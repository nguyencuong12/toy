/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:"cdn1.concung.com",
                // port:'',

            }
        ]
    }
}

module.exports = nextConfig
