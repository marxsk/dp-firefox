const WebExtWebpackPlugin = require('@ianwalter/web-ext-webpack-plugin')
const path = require('path');

module.exports = {
    plugins: [
        new WebExtWebpackPlugin()
    ],
    entry: './module.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        fallback: {
            "crypto": require.resolve('crypto-browserify'),
            "crypto-browserify": require.resolve('crypto-browserify'),
            "fs": false,
            "stream": require.resolve("stream-browserify")
        },
    }
}