<template>
  <el-menu 
    background-color="#262a30" 
    text-color="#ffffff" 
    style="border:0px" 
    :router="true">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-document"/><span>文章管理</span></template>
      <el-menu-item index="/admin/management"><i class="el-icon-tickets"/>所有文章</el-menu-item>
      <el-menu-item index="/admin/editor"><i class="el-icon-edit-outline"/>新增文章</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-delete"/>草稿箱</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-service"/><span>账号管理</span></template>
      <el-menu-item index="4"><i class="el-icon-info"/>管理员信息</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-edit"/>修改密码</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default{
  name:"Side",
  data(){return{}}
}
</script>