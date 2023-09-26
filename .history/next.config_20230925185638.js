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

    }
}

module.exports = nextConfig
