<template>
  <div class="search">
    <div 
      class="box"
      :style="border">
      <input
        placeholder="请输入关键字搜索"
        v-model="keyword"
        @keyup.enter="submit">
      <i 
        class="el-icon-loading"
        v-show="isLoading"/>
    </div>
    <transition-group
      name="view"
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      :duration="300">
      <template
        v-if = "showPost"
        v-for="(post,index) in postList.data" >
        <postcard 
          :key="index" 
          :post="post"/>
      </template>
    </transition-group>
  </div>
</template>

<script>
import postcard from "@/components/postCard/PostCard.vue"
import {createNamespacedHelpers} from "vuex"
const {mapState, mapActions} = createNamespacedHelpers('post')

export default {
  name:"Search",
  data(){
    return {
      keyword:"",
      border:{},
      showPost:false,
      isLoading:false
    }
  },
  components: { postcard },
  computed:{
    ...mapState(["postList"]),
  },
  methods:{
    ...mapActions(["searchPost"]),
    submit(){
      this.showPost = true
      this.isLoading = true
      this.searchPost({keyword:this.keyword}).then(()=>this.isLoading=false)
    }
  },
  mounted () {
    document.documentElement.addEventListener("click", (e)=>{
      this.border = e.target == document.querySelector(".box input") ? {borderColor:"#409eff"} : {}
    }, false)
  }
}
</script>


<style lang="scss">
.search{
  width: 60%;
  padding-top: 20px;
  margin: 0 auto;
}
.box{
  position:relative;
  width: 100%;
  height: 40px;
  margin-bottom: 18px;
  line-height: 1.5;
  border: 1px solid #dcdfe6;
  border-radius: 4px;    
  color: #606266;
  background-color: #fff;
  input{
    height: 100%;
    width: calc(100% - 12px);
    margin-left: 10px;
    &:focus{
      outline: none;
      border-color: #409eff;
    }
  }
  .el-icon-loading{
    position: absolute;
    top: calc(50% - 10px);
    font-size: 20px;
    right: 10px;
    color: #ccc;
  }
}
@media (max-width: 700px) {
  .search {
    width: 90%;
  }
}
</style>
