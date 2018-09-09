const path = require('path');
const fs = require('fs');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    createModule() {
        let dirNames = fs.readdirSync(path.resolve(__dirname, '../src/module'));
        let modules = {}
        dirNames.forEach(dirName => {
            modules[`module/${dirName}/view`] = path.resolve(__dirname, `../src/module/${dirName}`);
        });
        return modules;
    },
    createHtml() {
        let httpPlugin = [];
        let modules = this.createModule();
        for(let module in modules){
            httpPlugin.push(new htmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/common/assets/template/index.html'),
                filename: `${module}.html`,
                chunks: [module, 'vendor']
            }));
        }
        return httpPlugin;
    },
}