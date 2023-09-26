/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'images'
            }
        ]
    }
}

module.exports = nextConfig
