<template>
    <div class="PostList">
        <post v-for="i in 10" :key="i" />
    </div>
</template>

<script>

import post from "@/components/post_list/Post.vue"

export default {
    name:"postlist",
    data(){
        return{}
    },
    components:{
        post
    }
}
</script>

<style>
.PostList{
    width: 60%;
    height: 100%;
    
    margin: 0 auto;
}

@media (max-width: 700px){
    .PostList{
        width: 100%;
        background: #f4f5f5;
    }
}
</style>

