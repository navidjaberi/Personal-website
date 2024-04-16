/** @type {import('next').NextConfig} */
const nextConfig = {
  
    async rewrites() {
        return [
          // Rewrite everything else to use `pages/index`
          {
            source: '/:any*',
            destination: '/',
          },
        ];
        
      },
};

export default nextConfig;
