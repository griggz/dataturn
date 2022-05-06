import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const prep = ({ data }) => ({
  firstName: data.firstName.toLowerCase().trim(),
  lastName: data.lastName.toLowerCase().trim(),
  email: data.email.toLowerCase().trim(),
  comments: data.comments.toLowerCase().trim(),
});

export default async function ContactUs(req, res) {
  if (req.method === "POST") {
    const obj = prep(req.body);
    let exists;
    try {
      if (req.body.session) {
        exists = await prisma.user.findUnique({
          where: {
            id: req.body.session.user.id,
          },
        });
      } else {
        exists = await prisma.user.findUnique({
          where: {
            email: obj.email,
          },
        });
      }
    } catch (err) {
      exists = null;
    }
    try {
      let lead;
      if (exists) {
        lead = await prisma.leads.create({
          data: {
            firstName: obj.firstName,
            lastName: obj.lastName,
            email: obj.email,
            comments: obj.comments,
            User: {
              connect: { id: exists.id },
            },
          },
        });
      } else {
        lead = await prisma.leads.create({
          data: {
            firstName: obj.firstName,
            lastName: obj.lastName,
            email: obj.email,
            comments: obj.comments,
          },
        });
      }
      // if solutions
      if (req.body.solution && lead) {
        req.body.solution.map(async (d) => {
          await prisma.solution.create({
            data: {
              solution: d.toLowerCase().trim(),
              Leads: {
                connect: { id: lead.id },
              },
            },
          });
        });
      }
      // if subscribe
      if (req.body.subscribe) {
        if (exists) {
          await prisma.subscribe.create({
            data: {
              email: obj.email,
              active: true,
              User: {
                connect: { id: exists.id },
              },
            },
          });
        } else {
          await prisma.subscribe.create({
            data: {
              email: obj.email,
              active: true,
            },
          });
        }
      }
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
