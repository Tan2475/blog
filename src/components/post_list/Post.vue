<template>
    <div class="post flex_colum_center">
        <div class="title">通过vue-cli3构建一个SSR应用程序</div>
        <div class="text">
            <p>
            Vue.js构建的应用程序，默认情况下是有一个html模板页，然后通过webpack打包生成一堆js、css等等资源文件。然后塞到index.html中
            用户输入url访问页面 -> 先得到一个html模板页 -> 然后通过异步请求服务端数据 -> 得到服务端的数据 -> 渲染成局部页面 -> 用户这是vue.js官方的SSR原理介绍图，从这张图片，我们可以知道：我们需要通过Webpack打包生成两份bundle文件：Client Bundle，给浏览器用。和纯Vue前端项目Bundle类似Server Bundle，供服务端SSR使用，一个json文件不管你项目先前是什么样子，是否是使用vue-cli生成的。都会有这个构建改造过程。在构建改造这里会用到 vue-server-renderer 库，这里要注意的是 vue-server-renderer 版本要与Vue版本一样。
            </p>
        </div>
        <div class="tips">
            <i class="fa fa-tags" aria-hidden="true"></i> 文学赏析
            <i class="fa fa-calendar" aria-hidden="true"></i> 2018-2-1
        </div>
    </div>
</template>

<script>

import "../../assets/css/layout.css";

export default {
    name:"post",
    data(){
        return{}
    }
}
</script>

<style>
.post{
    height: 180px;
    background: rgba(255, 255, 255, 0.92);
    border-radius: 6px;
    
    padding: 14px;
    margin-bottom: 0.22rem;

    font-size: 14px;
    line-height: 2;
    color: rgb(0, 0, 0);

    align-items: flex-start;
}

.post .title{
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px
}

.post .text{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    color: rgb(75, 75, 75);
}

.post .tips{
    padding-top: 14px;
}

.post .tips i{
    padding-right: 10px;
}

.post .tips i:last-child{
    padding-left: 100px;
}

@media (max-width: 700px){
    .post{
        border-radius: 0;
        border-bottom: 1px solid #ececec
    }
}
</style>
