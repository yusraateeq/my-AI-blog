"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Post {
  id: string;
  title: string;
  content: string;
}

const CreatePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch all posts on load
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  // Create a new post
  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous errors

    // Basic validation
    if (!title.trim() || !content.trim()) {
      setErrorMessage("Title and content are required.");
      return;
    }

    try {
      setIsSubmitting(true); // Disable the button
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error("Failed to create the post.");
      }

      const newPost = await response.json();
      setPosts([newPost, ...posts]); // Add the new post to the top of the list
      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while creating the post.");
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  // Delete a post
  const handleDeletePost = async (postId: string) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the post.");
      }

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while deleting the post.");
    }
  };

  // Update a post
  const handleUpdatePost = async (postId: string) => {
    const newTitle = prompt("Enter the new title:");
    const newContent = prompt("Enter the new content:");

    if (!newTitle || !newContent) return; // Cancel if fields are empty

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });

      if (!response.ok) {
        throw new Error("Failed to update the post.");
      }

      const updatedPost = await response.json();
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === postId ? updatedPost : post))
      );
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred while updating the post.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleCreatePost} className="p-4 border rounded mb-8">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <button
            type="submit"
            className={`bg-rose-400 text-white px-8 py-2 rounded-lg ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Create Post"}
          </button>
        </form>

        <h2 className="text-xl font-bold mb-4">All Posts</h2>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 border rounded shadow bg-slate-100">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-2">{post.content}</p>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => handleUpdatePost(post.id)}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
