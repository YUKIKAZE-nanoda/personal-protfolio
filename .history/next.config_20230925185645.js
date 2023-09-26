/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'unsplash.com',
            }
        ]
    },
    experimental:{
        serverActions
    }
}

module.exports = nextConfig
