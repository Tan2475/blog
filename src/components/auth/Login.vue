<template>
<div class="login">
 <div class="login_box flex_colum_center position_center ">
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
    width: 100%;
    height: 100%;
}

.login_box{
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

.input_box{
    width: 100%;
    height: 20%;
    
    display: flex;

}

.input_box label{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30%;
    background: #25C6FF;
    
   
    color: #fff;

    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;

}

.input_box input{
    width: 70%;
    background: #fff;

    text-align: center;
    color: #25c6FF;
    
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

}

.login_form input[type="submit"]{
    width: 30%;
    height: 20%;
    background: #25c6FF;
    border-radius: 1rem;

    color: #fff;
    text-align: center;
    line-height: 1;
}

@media (max-width: 700px){
    .login_box{
        min-width: 100%;
        background: rgba(250, 250, 250, 0);
    }
}

</style>
