<template>
  <el-form 
    :model="ruleForm" 
    :rules="rules"
    status-icon 
    ref="ruleForm"
    label-width="60px">
    <el-form-item
      label="用户名"
      prop="userName">
      <el-input
        type="text"
        v-model="ruleForm.userName"
        autocomplete="off"/>
    </el-form-item>
    <el-form-item 
      label="密码" 
      prop="pass">
      <el-input 
        type="password" 
        v-model="ruleForm.pass" 
        autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button 
        type="primary" 
        @click="submitForm('ruleForm')">登录</el-button>
      <el-button 
        @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Message } from "element-ui"
import { createNamespacedHelpers } from "vuex"
const { mapActions } = createNamespacedHelpers("user")

export default {
  name: "Logins",
  data() {
    // 验证用户名
    const validateName = (rule, value, callback) => {
      if(value === ""){
        callback(new Error("请输入用户名"));
      }else{
        callback();
      }
    }
    // 验证密码
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName:"",
        pass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: validateName, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(["LoginByUsername"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.LoginByUsername(this.ruleForm).then(res => {
            if(res.data.token){
              Message.success("登录成功")
              this.$router.push({name:"home"})
            }else{
              Message.error("账号或密码有误，请重新登录")
              this.resetForm(formName)
            }
          }).catch()
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.el-form{
  width:300px;
}
</style>

