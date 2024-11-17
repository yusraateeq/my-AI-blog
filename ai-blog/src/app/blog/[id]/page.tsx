"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "@/app/components/Footer";

interface Post {
  id: number;
  title: string;
  content: string;
  image: string; // Added image to the Post interface
}

const BlogDetails = () => {
  const params = useParams();
  
  // Ensure params.id is a string and handle case when it is an array.
  const postId = Array.isArray(params.id) ? params.id[0] : params.id;
  const parsedPostId = postId ? parseInt(postId, 10) : NaN;

  const [post, setPost] = useState<Post | null>(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("/api/posts");
        const data: Post[] = await res.json();
        const matchedPost = data.find((p) => p.id === parsedPostId);

        if (matchedPost) {
          setPost(matchedPost);

          // Load comments from localStorage
          const storedComments = JSON.parse(localStorage.getItem(`comments-${parsedPostId}`) || "[]");
          setComments(storedComments);
        } else {
          console.error("Post not found.");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    if (!isNaN(parsedPostId)) {
      fetchPost();
    }
  }, [parsedPostId]);

  const handleComment = () => {
    if (!comment.trim()) return;

    const newComment = comment.trim();
    const updatedComments = [...comments, newComment];

    // Save to localStorage
    localStorage.setItem(`comments-${parsedPostId}`, JSON.stringify(updatedComments));

    setComments(updatedComments);
    setComment("");
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen bg-slate-100"> {/* Full screen layout with flexbox */}
      <Navbar />
      <div className="container mx-auto p-4 flex-grow px-6 mt-8 mb-16 bg-white"> {/* This ensures the content grows */}
        
        {/* Display image first */}
        

        {/* Title and Content */}
        <h1 className="text-5xl font-bold leading-[4rem] mb-10 ">{post.title}</h1>
        <p className="mt-4 text-lg">{post.content}</p>

        {/* Comments Section */}
        <div className="mt-6">
          <h3 className="text-3xl font-bold mb-4">Comments</h3>
          {comments.map((c, idx) => (
            <p key={idx} className="border-b p-4 bg-slate-200 mb-6 rounded-lg py-8 text-lg font-bold">{c}</p>
          ))}
          <input
            className="border p-2 mt-4 w-full"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
          />
          <button
            className="bg-red-400 text-white px-8 py-4  rounded-full w-full mt-10"
            onClick={handleComment}
          >
            Add Comment
          </button>
        </div>
      </div>
      <Footer /> {/* Footer will stay at the bottom */}
    </div>
  );
};

export default BlogDetails;

