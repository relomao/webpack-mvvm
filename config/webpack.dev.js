
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const base = require('./webpack.base.js');
const devConfig = {
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        hot: true,
        contentBase: '.'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

module.exports = merge(base, devConfig);

