import prisma from '../../../lib/prisma';

// POST /api/post

// Required fields in body: title

// Optional fields in body: content

export default async function handle(req, res) {

  const { title, content, author } = req.body;

  const result = await prisma.post.create({

    data: {

      title: title,

      content: content,

      author: author,
    },

  });

  console.log(result)
  res.json(result);

}