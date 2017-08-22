const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React from scratch'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'www')
    }
};