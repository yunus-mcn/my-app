/** @type {import('next').NextConfig} */


const nextConfig = {
    images: {
      domains: ['cdn2.thecatapi.com'],
    },
    cookie: {
      // Çerezlerin şifrelenmesi
      secret: 'YOUR_SECRET_KEY',
  
      // Çerezlerin geçerlilik süresi
      expires: '1y',
  
      // Çerezlerin etki alanı
      httpOnly: true,
  
      // Çerezlerin üçüncü taraf siteler tarafından okunması
      secure: true,
    },
  };
  
  module.exports = nextConfig;