import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { getSession } from "next-auth/react";

const prep = (data, session) => {
  const cleanData = {
    firstName: data.firstName.toLowerCase().trim(),
    lastName: data.lastName.toLowerCase().trim(),
    email: data.email.toLowerCase().trim(),
    comments: data.comments.toLowerCase().trim(),
  };
  if (session) {
    cleanData.User = {
      connect: { id: session ? session.user.id : undefined },
    };
  }

  return cleanData;
};

export default async function ContactUs(req, res) {
  const session = await getSession({ req });

  if (req.method === "POST") {
    console.log(req.body.data);
    const obj = prep(req.body.data, session);

    try {
      let lead;

      lead = await prisma.leads.create({
        data: obj,
      });

      res.status(200).send(lead);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        statusCode: 500,
        message: err.response.data.detail,
        data: err.response.data,
      });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
