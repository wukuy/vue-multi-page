<template>
    <div class="p-about">
        <span>about</span>
        <img :src="headDefault">
        <img src="~@assets/images/head_default.png">

        <li><a href="../home/view.html">首页</a></li>
        <li><a href="../login/view.html">登录</a></li>
        <li><a href="../about/view.html">关于</a></li>
    </div>
</template>

<script>
import headDefault from '@assets/images/head_default.png';
console.log(headDefault);

export default {
    data() {
        return {
            headDefault
        }
    },
    mounted() {
        // lodash 测试
        console.log(_.join(['a', 'b', 'c'], '-'));
        console.log('创建about');
    }
}
</script>

<style lang="stylus">
@import '~@assets/css/define.styl';
.p-about{
    span {
        color: red;
    }
    img{
        width: 100px;
    }
}
</style>
