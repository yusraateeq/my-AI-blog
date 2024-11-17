"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-red-500 to-rose-600 text-white pb-8 shadow-lg border-t-4">
      <div className="container mx-auto text-center p-6 sm:p-10">
        {/* Footer links container */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 mb-6">
          <Link href="/" className="hover:underline font-bold text-lg mb-2 sm:mb-0">
            Home
          </Link>
          <Link href="/About" className="hover:underline font-bold text-lg mb-2 sm:mb-0">
            About Us
          </Link>
          <Link href="/Contact" className="hover:underline font-bold text-lg mb-2 sm:mb-0">
            Contact
          </Link>
          <Link href="/create" className="hover:underline font-bold text-lg mb-2 sm:mb-0">
            Create Post
          </Link>
        </div>
        
        {/* Social Media Links */}
        <p className="mb-6">
          Follow us on{" "}
          <a href="https://www.facebook.com/profile.php?id=61552980219340&mibextid=ZbWKwL" target="_blank" className="text-blue-400 underline">
            Facebook
          </a>{" "}
          |{" "}
          <a href="https://www.instagram.com/ateeq.yusra?igsh=OWR6Y3lwZjlyZ3Nh" target="_blank" className="text-blue-400 underline">
            Instagram
          </a>{" "}
          |{" "}
          <a href="https://www.linkedin.com/in/yusra-ateeq-00797a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-blue-400 underline">
            LinkedIn
          </a>
        </p>

        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} AI Blog. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;






