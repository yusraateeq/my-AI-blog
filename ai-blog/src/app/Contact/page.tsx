"use client";

import { useState } from "react";
import Navbar from "../components/Navbar"; // Adjusted the import path
import Footer from "../components/Footer"; // Adjusted the import path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to backend)
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow container mx-auto p-4 my-10 bg-slate-100">
        <h1 className="text-5xl font-bold mb-4 text-center">Contact Me</h1>
        {submitted ? (
          <p className="text-rose-500">Thank you for contacting us! We will get back to you soon.</p>
        ) : (
          <form  onSubmit={handleSubmit} className="max-w-lg mx-auto" method="POST">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2 " htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className=" p-2 w-full border-rose-400 border-4 rounded-lg outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" p-2 w-full border-rose-400 border-4 rounded-lg outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className=" p-2 w-full border-rose-400 border-4 rounded-lg outline-none"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-500 w-full "
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
