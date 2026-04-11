/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static exports for GitHub Pages

  // Optional: Set a basePath if your GitHub Pages site is hosted in a subdirectory
  // For example, if your repository is 'username.github.io/repo-name',
  // set basePath: '/repo-name',
  basePath: '/ko',
};

export default nextConfig;
