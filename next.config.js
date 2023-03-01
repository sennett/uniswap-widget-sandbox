const path = require('path')

module.exports = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        // config.resolve.alias['@uniswap/conedison'] = '/Users/sennett/git/nextjs-blog/node_modules/@uniswap/widgets/node_modules/@uniswap/conedison/dist'
        config.resolve.alias['@uniswap/conedison/provider'] = '/Users/sennett/git/nextjs-blog/node_modules/@uniswap/widgets/node_modules/@uniswap/conedison/dist/provider.js'

        // Important: return the modified config
        return config
    },
}