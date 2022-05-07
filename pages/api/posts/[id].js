import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.ENV === "live") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

const prep = (data) => ({
  title: data.title
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .join("-")
    .toLowerCase()
    .trim(),
  content: data.content.trim(),
  draft: data.draft,
  excerpt: data.excerpt.trim(),
});

export default async function (req, res) {

  if (req.method === "PUT") {

    try {
      const obj = prep(req.body);
      // Put
      const data = await prisma.posts.update({
        where: { id: parseInt(req.query.id) },
        data: obj,
      });

      res.status(200).send(data);
    } catch (err) {
      console.log(err)
      res.status(500).json({
        statusCode: 500,
        message: err.response.data.detail,
        data: err.response.data,
      });
    }
  } else if (req.method === "GET") {
    try {
      // GET HERE
      const data = await prisma.posts.findUnique({
        where: {
          id: parseInt(req.query.id),
        },
      });

      res.status(200).send(data);
    } catch (err) {
      res.status(500).json({
        statusCode: 500,
        message: err.response.data.detail,
        data: err.response.data,
      });
    }
  } else {
    res.setHeader("Allow", "PUT", "GET");
    res.status(405).end("Method Not Allowed");
  }
};
