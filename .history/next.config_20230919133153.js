/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'images.uns'
            }
        ]
    }
}

module.exports = nextConfig
