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
    }
}