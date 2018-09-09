const common = require('./webpack.common');
const path = require('path');
const friendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'none',
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        port: 3000,
        openPage: 'module/home/view.html',
        open: true,
        quiet: true
    },
    plugins: [
        new friendlyErrorsPlugin()
    ]
});