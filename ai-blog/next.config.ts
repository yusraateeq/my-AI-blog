// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
  
// };

// export default nextConfig;



module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/posts/:id",
        destination: "/api/posts/[id]",
      },
    ];
  },
};

