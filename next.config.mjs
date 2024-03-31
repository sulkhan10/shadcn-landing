/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,

        domains: ['aceternity.com', 'res.cloudinary.com', 'localhost', 'assets.aceternity.com','images.unsplash.com','unsplash.com','images.pexels.com','pexels.com'],
      },
      distDir: 'build',
      // output: 'export',


};  

export default nextConfig;
