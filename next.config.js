const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
    images: {// Add the domains for your images, deprecated
        remotePatterns: [{
            'hostname': 'cdn.builder.io'
        }]
    },
});

module.exports = nextConfig;