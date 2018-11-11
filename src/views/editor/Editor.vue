<template>
  <div class="markBox flex_colum_center">
    <div class="postInfo">
      <input 
        class="post_title"
        v-model="title"
        placeholder="请输入标题">
      <div class="el-group">
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
          v-model="mark"
          placeholder="请输入文章标签"
          :fetch-suggestions="querySearch">
          <el-option
            v-for="item in defaultMark"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <div class="el-buttons">
          <el-button 
            size="mini"
            type="default">清空</el-button>
          <el-button 
            size="mini"
            type="primary" 
            :loading="true">保存</el-button>
        </div>
      </div>
    </div>
    <mavon-editor
      :toolbars-flag="false"
      class="editor"
      v-model="context" 
      :box-shadow="false" />    
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import "@/assets/css/layout.css"

export default {
    name:"MorkDown",
    data(){ 
        return{
          title:'',
          defaultCategory:[
            {
              value:"技术",
              label:"技术"
            },
            {
              value:"杂谈",
              label:"杂谈"
            },
            {
              value:"趣闻",
              label:"趣闻"
            },
          ],
          category:[],
          mark:[]
        }
    },
    components:{ mavonEditor },
    methods:{}
}
</script>

<style lang="scss" >
.markBox{
  position: fixed;
  top: 50px;
  width: 100%;
  height: 100%;
}
.editor{
  width:80%;
  height: 100%;
}
.postInfo{
  width: 80%;
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
    display: flex;
    background: #fff;
    input.el-input__inner{
      border-radius: 0;
      border: 0;
    }
    .el-buttons{
      align-self: center;
    }
  }
}


</style>

