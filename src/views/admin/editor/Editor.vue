<template>
  <div class="markBox flex_colum_center">
    <div class="postInfo">
      <input 
        class="post_title"
        v-model="title"
        placeholder="请输入标题">
      <div class="el-group">
        <div>
          <el-select
            allow-create
            default-first-option
            filterable
            v-model="category"
            placeholder="请选择文章类型">
            <el-option
              v-for="item in defaultCategory"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
          <el-select 
            allow-create
            default-first-option
            filterable
            multiple
            v-model="markList"
            placeholder="请输入文章标签">
            <el-option
              v-for="item in defaultMark"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </div>
        <div class="el-buttons">
          <el-button
            size="mini"
            type="default">清空</el-button>
          <el-button 
            size="mini"
            type="primary" 
            :loading="isloading"
            @click="savePost">保存</el-button>
        </div>
      </div>
    </div>
    <mavon-editor
      :toolbars-flag="false"
      class="editor"
      v-model="content" 
      :box-shadow="false" />    
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import "@/assets/css/layout.css"
import {setTime} from "@/util/time"

const { mapState, mapActions } = createNamespacedHelpers('post')

export default {
    name:"MorkDown",
    data(){ 
        return{
          content:'',
          title:'',
          defaultCategory:[],
          defaultMark:[],
          category:'',
          markList:[],
          isloading:false
        }
    },
    components:{ mavonEditor },
    computed: {
      ...mapState(['upStatus']),
       mark(){
        return this.markList.join()
      },
      summary(){
        const patter = />\s*\S*/
        return this.content.match(patter)[0].slice(2)
      },
      currentTime(){
        return setTime()
      }
    },
    methods:{
      ...mapActions(['upDatePost']),
      savePost(){
        const {
          content,title,mark,category,summary,currentTime
        } = this        
        this.isloading = true
        this.upDatePost({current_time: currentTime,title,category,mark,content,summary}).then(()=>this.isloading=false)
      }
    },
}
</script>

<style lang="scss">

.markBox{
  width: 100%;
  height: 100%;
}

.editor{
  width: 100%;
  height: 600px;
  padding-bottom: 60px;
}

.postInfo{
  width: 100%;
  .post_title{
    width: calc(100% - 20px);
    height: 80px;
    padding-left: 20px;
    font-size: 24px;
    font-weight: bold;
    outline: none;
    input::-webkit-input-placeholder{
      color: #666;
      font-size: 24px;
      font-weight: bold;
    }
  }
  .el-group{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #fff;
    input.el-input__inner{
      border-radius: 0;
      border: 0;
    }
    .el-buttons{
      margin-right: 20px;
    }
  }
}
</style>

