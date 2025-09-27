/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Uncomment and modify if deploying to GitHub Pages with custom domain
  // assetPrefix: '/ngoc-portfolio/',
  // basePath: '/ngoc-portfolio',
}

module.exports = nextConfig