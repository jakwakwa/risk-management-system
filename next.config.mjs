/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  serverExternalPackages: [
    '@google-cloud/tasks',
    '@google-cloud/aiplatform',
    '@google-cloud/bigquery',
    '@google-cloud/storage',
    '@google-cloud/vertexai',
  ],
 
}

export default nextConfig