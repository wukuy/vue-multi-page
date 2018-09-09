const path = require('path');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const cleanPlugin = require('clean-webpack-plugin');
const progressBarPlugin = require('progress-bar-webpack-plugin');
const utils = require('./utils.js');
const webpack = require('webpack');

const webpackConfig = {
    entry: {
        ...utils.createModule()
    },
    output: {
        filename: '[name].[chunkhash:6].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    // MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js?$/,
                use: 'babel-loader',
                include: path.resolve(__dirname, '../src')
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[hash:6].[ext]',
                            outputPath: '/'
                        }
                    }
                ],
            },
            {
                test:  /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'font/[name].[hash:6].[ext]',
                            outputPath: '/'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendor'
        }
    },
    plugins: [
        new vueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:6].css'
        }),
        ...utils.createHtml(),
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new progressBarPlugin()
    ],
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, '../src/common/assets')
        }
    },
}

const isWatch = process.argv.includes('--watch');
if(!isWatch) {
    webpackConfig.plugins.push(
        new cleanPlugin(['dist/*'], {
            root: path.resolve(__dirname, '../')
        })
    );
}

module.exports = webpackConfig;