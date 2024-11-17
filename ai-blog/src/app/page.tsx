"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./Hero/Hero";

interface Post {
  id: number;
  title: string;
  content: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />
      <Hero />
      <div className="container mx-auto p-4 flex-grow mt-6">
        <h1 className="sm:text-4xl smd:text-2xl font-bold my-8 text-center">Next-Gen Blogging with AI and Next.js</h1>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="p-4 border-b">
              <Link href={`/blog/${post.id}`}>  
              <div className="bg-rose-300 py-10 px-6 rounded-lg shadow-xl transition-all hover:-translate-y-3">
                <h2 className="text-2xl font-bold text-black ">{post.title}</h2>
                <p className="mt-4 text-lg">
                    {post.content.length > 100
                      ? `${post.content.slice(0, 100)}...`
                      : post.content}
                  </p>
                <button className="bg-white py-2 px-6 rounded-lg mt-6 transition-all hover:bg-rose-100">Read More</button>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;







