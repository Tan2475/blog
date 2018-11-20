<template>
  <div 
    class="PostList">
    <postcard
      v-for="(post,index) in posts"
      :key="index" 
      :post="post"/>
    <i 
      class="el-icon-loading" 
      v-show="isLoading" />
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
    ...mapActions(['fetchPostList', "selectType"]),
    getPostList(){
      if(this.type === "all"){
        this.fetchPostList(this.params)
      }else{
        this.selectType(this.type)
      }
    },
  },
  watch:{
    $route(to){
      if (to.path === "/postlist/all"){
        this.fetchPostList(this.params)
      }
    },
    postList(){
      this.posts = [...this.posts, ...this.postList.data]
      return this.posts
    }
  },
  beforeMount(){
    this.getPostList()  
  },
  mounted(){
    window.addEventListener("scroll",()=>{
     let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 200
      if(bottomOfWindow && this.isLoading === false ){
          this.isLoading = true
          let pageNo = this.postList.pageNo + 1
          this.fetchPostList({pageNo, pageSize:10}).then(()=>this.isLoading=false).catch(()=>this.isLoading=true)
      }
    }, false)
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

