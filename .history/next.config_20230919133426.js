/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'imagesunsplash.com',
            }
        ]
    }
}

module.exports = nextConfig
