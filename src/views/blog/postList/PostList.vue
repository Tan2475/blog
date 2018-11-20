<template>
  <div 
    class="PostList">
    <postcard
      v-for="(post,index) in posts"
      :key="index" 
      :post="post"/>
    <div
      class="more"
      v-show="isLoading"
      @click="addPost"
    ><strong>+</strong> 加载更多</div>
  </div>
  
</template>

<script>
import postcard from "@/components/postCard/PostCard.vue";
import {createNamespacedHelpers} from 'vuex'

const {mapState, mapActions} = createNamespacedHelpers('post')

export default {
  name: "PostList",
  data() {
    return {
      params:{
        pageNo:1,
        pageSize:10,
      },
      posts:[],
      isLoading:false
    };  
  },
  components: { postcard },
  computed: { 
    ...mapState(['postList']),
 },
  methods: {
    ...mapActions(['fetchPostList']),
    getPostList(){
      this.fetchPostList(this.params).then(()=>this.isLoading=true)
    },
    addPost(){
      this.fetchPostList({pageNo:this.postList.pageNo+1,pageSize:10})
    }
  },
  watch:{
    postList(){
      this.posts = [...this.posts, ...this.postList.data]
      return this.posts
    }
  },
  beforeRouteLeave(to, from, next){
    if(to.name !== "post"){
      from.meta.keepAlive = false
    }
    next()
  },
  created () {
    this.getPostList()
  }
};
</script>

<style>
.PostList {
  width: 60%;
  height: 100%;
  padding: 20px 0;
  margin: 0 auto;
}
.el-icon-loading{
  font-size: 20px;
  color: #0096fa;
}
.more{
  color: rgb(0, 150, 250);
  width: 100%;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  text-align: center;
  font-weight: 500;
  padding: 12px 0px;
  font-size: 14px;
  border-radius: 4px;
 
}

@media (max-width: 700px) {
  .PostList {
    width: 100%;
  }
  .more{
    margin-top:-20px;
  }
}
</style>

