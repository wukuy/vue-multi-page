<template src="./view.html"></template>
<style src="./view.styl" lang="stylus"></style>

<script>
import {getGoodsCount} from '../../common/model/model.home.js';

export default {
    name: 'login',
    created() {
        this.getGoodsCount();
    },
    methods: {
        // 接口请求测试
        async getGoodsCount() {
            let data = await getGoodsCount();
            if(data) {
                console.log(data);
            }
        }
    }
}
</script>
