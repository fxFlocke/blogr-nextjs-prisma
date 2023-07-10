import prisma from "../../lib/prisma"

export default async (req, res) => {

    const feed = await prisma.post.findMany()
  
    res.status(200).json(feed);
};