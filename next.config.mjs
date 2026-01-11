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
  output: 'standalone',
  // Ensure your GCP environment variables are available
  env: {
    VERTEX_AI_ENDPOINT_ID: process.env.VERTEX_AI_ENDPOINT_ID,
  },
}

export default nextConfig