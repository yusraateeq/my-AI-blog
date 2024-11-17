// import { NextApiRequest, NextApiResponse } from "next";

// let posts = [
//   { id: "1", title: "Post 1", content: "This is post 1 content" },
//   { id: "2", title: "Post 2", content: "This is post 2 content" },
// ];

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     return res.status(200).json(posts);
//   }

//   if (req.method === "POST") {
//     const { title, content } = req.body;

//     const newPost = {
//       id: String(posts.length + 1),
//       title,
//       content,
//     };

//     posts.push(newPost);
//     return res.status(201).json(newPost);
//   }

//   res.setHeader("Allow", ["GET", "POST"]);
//   res.status(405).end(`Method ${req.method} Not Allowed`);
// }



import { NextApiRequest, NextApiResponse } from "next";

const posts = [
  { id: "1", title: "Post 1", content: "This is post 1 content" },
  { id: "2", title: "Post 2", content: "This is post 2 content" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(posts);
  }

  if (req.method === "POST") {
    const { title, content } = req.body;

    const newPost = {
      id: String(posts.length + 1),
      title,
      content,
    };

    posts.push(newPost); // Modifying the array is fine even if it's declared with const
    return res.status(201).json(newPost);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
