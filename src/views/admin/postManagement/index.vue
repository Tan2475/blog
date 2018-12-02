<template>
  <div class="post_management">
    <div 
      class="table"
      v-if="!isEditor">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="current_time"
          label="创建时间"
          ></el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          ></el-table-column>
        <el-table-column
          prop="category"
          label="分类"
          >
          <template slot-scope="scope">
            <el-tag 
              type="info"
              size="small">
              {{scope.row.category}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200px">
          <template slot-scope="scope">
            <el-button 
              type="primary" 
              size="small"
              @click="startEditor(scope.row)">编辑</el-button>
            <el-button 
              type="warning" 
              size="small"
              @click="_delete(scope.row)">删除</el-button>
          </template>  
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :total="this.postList.total"
          @current-change="pageChange">
        </el-pagination>
      </div>
    </div>
    <div 
      class="editor"
      v-if="isEditor">
      <el-button 
        type="text"
        icon="el-icon-d-arrow-left"
        @click="backList">返回文章列表</el-button>
      <editor :postDetail="currentRow"/>
    </div>
  </div>
</template>

<script>
import editor from "../editor/Editor"
import { createNamespacedHelpers } from "vuex"
const { mapState, mapActions} = createNamespacedHelpers("post")

export default{
  name:"PostManagement",
  data(){
    return {
      params:{
        pageNo:1,
        pageSize:10,
      },
      isEditor: false,
      currentRow: {}
    }
  },
  components:{ editor },
  computed:{
    ...mapState(["postList"]),
    tableData(){
      return this.postList.data
    }
  },
  methods:{
    ...mapActions(["fetchPostList", "deletePost"]),
    pageChange(currentpage){
      this.fetchPostList({pageNo:currentpage,pageSize:10})
    },
    startEditor(row){
      this.currentRow = row
      this.isEditor = true
    },
    backList(){
      this.isEditor = false
    },
    _delete(row){
      this.deletePost({"id":row.id}).then(()=>{
        this.fetchPostList(this.params)
      })
    }
},
  created(){
    this.fetchPostList(this.params)
  }
}
</script>
