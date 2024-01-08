/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['bcrypt'],
    },
    transpilePackages: ['lucide-react'],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false
            };
            config.externals = [...config.externals, 'bcrypt'];
        }

        return config
    }
}

module.exports = nextConfig
