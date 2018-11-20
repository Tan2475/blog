<template>
  <div class="category">
    <div class="wrap">
      <el-container>
        <el-header>
          <h1>分类</h1>
        </el-header>
        <el-main>
          <el-button 
            size="medium" 
            type="primary"
            v-for="(category,index) in categorys"
            :key="index"
            @click="showPostList(category)">{{ category }}</el-button>        
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex"
const { mapState, mapActions } = createNamespacedHelpers("post")

export default {
  name:"Category",
  data(){
    return{}
  },
  computed:{
    ...mapState(["categorys"])
  },
  methods:{
    ...mapActions(["fetchCategory"]),
    showPostList(category){
      const patter = /\s*\S*/
      const type = category.match(patter)[0]
      this.$router.replace({name:"typepost", params:{ type }})
    },
  },
  created(){
    this.fetchCategory()
  }
}
</script>

<style lang="scss">
.category{
  position: fixed;
  width: 100%;
  height: 100%;
  .wrap{
    width: 60%;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
     .el-header{
        display:flex;
        justify-content: center;
        align-items: center;
        padding-top:20px;
      }
    .el-main{
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      .el-button{
          margin: 8px;
        }
      } 
    }
}
@media (max-width: 700px){
  .category .wrap{
    width: 100%;
  }
}
</style>

