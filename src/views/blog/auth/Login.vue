<template>
  <div class="login flex_colum_center">
    <div class="login_box flex_colum_center ">
      <logins />
    </div>
  </div>
</template>

<script>
import "@/assets/css/layout.css";
import logins from '@/components/loginform/logins.vue';

export default {
  name: "Login",
  data() {
    return {};
  },
  components:{ logins }
};
</script>

<style>
.login {
  height: 100vh;
  justify-content: center;
}

.login_box {
  width: 4.8rem;
  height: 3rem;
  min-width: 480px;
  min-height: 300px;
  justify-content: center;
  background: rgba(250, 250, 250, 0.82);
  border-radius: 10px;
  font-size: 14px;
}

.login_form {
  width: 80%;
  height: 70%;
  justify-content: space-around;
}

.input_box {
  width: 100%;
  height: 20%;
  display: flex;
}

@media (max-width: 700px) {
  .login {
    background: url("../../../assets/image/bg.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  .login_box {
    min-width: 100%;
    background: rgba(250, 250, 250, 0);
  }
  .el-form-item__label{
    color:#fff
  }
}
</style>
