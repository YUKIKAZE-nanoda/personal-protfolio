/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:
                hostname:'images.unsplash.com',
            }
        ]
    }
}

module.exports = nextConfig
