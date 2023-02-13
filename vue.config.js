const path = require("path");

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [path.resolve(__dirname, "./src/styles/main.scss")]
        }
    },
    filenameHashing: false,
    chainWebpack: config => {
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
    },
    publicPath:'./',
}