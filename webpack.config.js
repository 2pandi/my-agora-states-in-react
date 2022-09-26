const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_module/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_module/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
}