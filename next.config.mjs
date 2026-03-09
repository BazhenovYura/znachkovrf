/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // полезно оставить
  },
  images: {
    unoptimized: true, // обязательно для статического экспорта!
  },
  output: 'export', // 👈 ТОЛЬКО ЭТО ДОБАВИТЬ
}

export default nextConfig
