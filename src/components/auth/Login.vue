<template>
    <div class="login flex_colum_center ">
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
</template>

<script>
import "../../assets/css/layout.css"

export default {
    name:"login",
    data(){
        return{}
    }
}
</script>

<style>
.login{
    width: 5.26rem;
    height: 3.4rem;
    
    position: relative;
    top: 2rem;
    margin: 0 auto;

    justify-content: center;

    background: rgba(250, 250, 250, 0.82);
    border-radius: 6px;
}

.login_form {
   /* width: 4.6rem; */
   /* height: 2.1rem; */

}

.input_box{
    width: 3.8rem;
    height: 0.4rem;
    display: flex;
    margin-bottom: 20px;
}

.input_box label{
    display: inline-block;
    width: 0.8rem;
    background: #25C6FF;
    
    text-align: center;
    line-height: 0.4rem;
    color: #fff;
}

.input_box input{
    width: 3rem;
    height: 0.4rem;
    background: #fff;

    text-align: center;
    font-size: 16px;
    color: #25c6FF;
}

.login_form input[type="submit"]{
    width: 1.6rem;
    height: 0.4rem;
    background: #25c6FF;
    margin-top: 10px;
    
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 1;
}
</style>
