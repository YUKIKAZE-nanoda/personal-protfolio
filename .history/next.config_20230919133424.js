/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'imaunsplash.com',
            }
        ]
    }
}

module.exports = nextConfig
