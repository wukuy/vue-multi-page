const common = require('./webpack.common');
const path = require('path');

module.exports = Object.assign(common, {
    mode: 'production',
});