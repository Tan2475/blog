<template>
  <div 
    class="PostList">
    <postcard
      v-for="(post,index) in posts"
      :key="index" 
      :post="post"/>
    <div
      class="more"
      @click="addPost"
      v-show="isShow"
    >
      <span 
        v-show="!isLoading"
        style="color:#ccc"><i class="el-icon-loading"/> 正在加载</span>
      <span v-show="isLoading"><strong>+</strong> 加载更多</span>
    </div>
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
      isLoading:true,
      isShow:false
    };  
  },
  components: { postcard },
  computed: { 
    ...mapState(['postList']),
 },
  methods: {
    ...mapActions(['fetchPostList']),
    getPostList(){
      this.fetchPostList(this.params).then(()=>this.isShow=true)
    },
    addPost(){
      this.isLoading = false
      this.fetchPostList({pageNo:this.postList.pageNo+1,pageSize:10}).then(()=>this.isLoading=true).catch(()=>this.isLoading=true)
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

<style lang="scss">
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
  .el-icon-loading {
    font-size: 16px;
    color: #cccccc;
  }
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

