
<style src="./view.styl" lang="stylus"></style>

<script>
export default {
    name: 'home',
    mounted() {
        console.log('home创建');
    },
    // jsx、render函数测试
    render(h) {
        // return h('div', '我是home内容');
        return (<div class="p-home">
            <div>首页页面</div>

            <li><a href="../home/view.html">首页</a></li>
            <li><a href="../login/view.html">登录</a></li>
            <li><a href="../about/view.html">关于</a></li>
        </div>)
    }
}
</script>
