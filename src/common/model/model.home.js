import Http from '../app.http.js';

const model = {
    getGoodsCount: async data => await Http({
        url: '/restaurant/getGoodsCount',
        data,
        rawData: true
    })
}

module.exports = model;