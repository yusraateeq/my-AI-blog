import { NextResponse } from "next/server";

let posts = [
  
  {
    id: 1,
    title: " A Deep Dive into Agentic AI",
    content: `
      The realm of Artificial Intelligence (AI) is rapidly evolving, and one of the most exciting and controversial advancements is Agentic AI. Unlike traditional AI systems, which are designed to assist with tasks under human supervision, Agentic AI is equipped to make autonomous decisions, act independently, and adapt to dynamic environments without constant human input. In this blog, we’ll explore what Agentic AI is, its potential applications, benefits, and the challenges it poses.
      Agentic AI refers to artificial intelligence systems designed to make decisions and take actions on their own, without human intervention. Unlike narrow AI, which is limited to specific tasks, Agentic AI has broader capabilities, including autonomy, decision-making, and adaptability. It is built with a high degree of self-sufficiency, allowing it to operate independently in dynamic and uncertain environments.
    `,
    image: "https://via.placeholder.com/150",
    comments: [],
  },
  
  {
    id: 2,
    title: "AUnderstanding AI and Its Impact on the Future",
    content: "Artificial Intelligence (AI) has rapidly evolved from a concept in science fiction to a transformative force in the modern world. At its core, AI refers to machines and systems that can perform tasks traditionally requiring human intelligence, such as learning, problem-solving, and decision-making. This technology is already deeply embedded in various industries, from healthcare and finance to entertainment and manufacturing. As AI continues to advance, its impact is becoming increasingly profound. It holds the potential to revolutionize the way we live and work, bringing about increased efficiency, new capabilities, and the automation of mundane tasks. However, AI also presents challenges, particularly in areas like ethics, job displacement, and security. Understanding how to navigate these challenges while harnessing AI’s full potential will be key to shaping a sustainable and beneficial future for all.",
    image: "https://tscfm.org/wp-content/uploads/2020/08/ai-company-staqu-partners-with-microsoft-bring-jarvis.jpg", // Example image URL
    comments: [],
  },
  {
    id: 3,
    title: "What’s New in Next.js 15",
    content: "Next.js is one of the most popular React frameworks, known for its ability to create fast, user-friendly web applications. It simplifies the development of server-rendered React applications by offering features like static site generation (SSG), server-side rendering (SSR), and automatic code splitting. Next.js 15, the latest major release of the framework, brings several new features and improvements that enhance performance, usability, and developer experience. Let’s take a closer look at what’s new in Next.js 15.",
    image: "https://via.placeholder.com/150", // Example image URL
    comments: [],
  },
];

// GET: Fetch all posts
export async function GET() {
  return NextResponse.json(posts);
}

// POST: Create a new post
export async function POST(req: Request) {
  const body = await req.json();
  const newPost = {
    id: Date.now(),
    title: body.title,
    content: body.content,
    image: body.image || "https://via.placeholder.com/150", // Default image if none provided
    comments: [],
  };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}

// PUT: Update a post
export async function PUT(req: Request) {
  const body = await req.json();
  posts = posts.map((post) =>
    post.id === body.id
      ? { ...post, title: body.title, content: body.content, image: body.image }
      : post
  );
  return NextResponse.json(posts.find((post) => post.id === body.id));
}

// DELETE: Delete a post
export async function DELETE(req: Request) {
  const body = await req.json();
  posts = posts.filter((post) => post.id !== body.id);
  return NextResponse.json({ success: true });
}




