import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const prep = (data) => ({
  title: data.title
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .join("-")
    .toLowerCase()
    .trim(),
  content: data.content.trim(),
  image: data.image ? data.image.trim() : null,
  draft: data.draft,
  excerpt: data.excerpt.trim(),
});

export default async function CreatePost(req, res) {
  if (req.method === "POST") {
    const obj = prep(req.body);
    try {
      const post = await prisma.posts.create({
        data: obj,
      });

      res.status(200).send(post);
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
