const common = require('./webpack.common');
const path = require('path');
const utils = require('./utils.js');


module.exports = Object.assign(common, {
    mode: 'development',
    devtool: 'none',
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        port: 3000,
        openPage: 'module/home/view.html',
        open: true,
        stats: utils.getState()
    },
});