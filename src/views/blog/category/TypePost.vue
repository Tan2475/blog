<template>
  <div 
    class="PostList">
    <postcard
      v-for="(post,index) in posts"
      :key="index" 
      :post="post"/>
    <el-button
      style="color:#0096fa;width:100%"
      v-show="isLoading"
      @click="addPost"
    ><strong>+</strong> 加载更多</el-button>
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
  props:{
    type:{
      type:String,
      default(){return ""}
    }
  },
  components: { postcard },
  computed: { 
    ...mapState(['postList']),
 },
  methods: {
    ...mapActions(["selectType"]),
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
  mounted (){
    this.selectType(this.type)
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

@media (max-width: 700px) {
  .PostList {
    width: 100%;
  }
  .pagination{
    margin-top: 20px;
  }
}
</style>

