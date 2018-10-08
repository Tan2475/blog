<template>
<div class="login flex_colum_center">
 <div class="login_box flex_colum_center ">
        <form class="login_form flex_colum_center" action="" method="POST">
            <div class="input_box">
                <label for="name">Name</label>
                <input id="name"  name="name" type="text" placeholder="    请输入用户名">
            </div>
            <div class="input_box">
                <label for="password">PassWord</label>
                <input id="password" name="password" type="password" placeholder="    请输入密码">
            </div>
            <input type="submit" value="login">
        </form>
    </div>

</div>
</template>

<script>
import "../../assets/css/layout.css";

export default {
  name: "login",
  data() {
    return {};
  }
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

.input_box label {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30%;
  background: #25c6ff;

  color: #fff;

  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.input_box input {
  width: 70%;
  background: #fff;

  text-align: center;
  color: #25c6ff;

  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.login_form input[type="submit"] {
  width: 30%;
  height: 20%;
  background: #25c6ff;
  border-radius: 1rem;

  color: #fff;
  text-align: center;
  line-height: 1;
}

@media (max-width: 700px) {
  .login {
    background: url("../../assets/image/bg.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
  .login_box {
    min-width: 100%;
    background: rgba(250, 250, 250, 0);
  }
}
</style>
