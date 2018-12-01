<template>
  <div class="post_management">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="currentTime"
        label="创建时间"
        ></el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        ></el-table-column>
      <el-table-column
        prop="catagory"
        label="分类"
        ></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        >
        <template slot-scope="scope">
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>  
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default{
  name:"PostManagement",
  data(){
    return {
      tableData:[{
        currentTime:"2018-12-1",
        title:"测试标题",
        category:"测试",  
      }]
    }
  }
}
</script>
