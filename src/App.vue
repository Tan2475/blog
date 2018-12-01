<template>
  <div id="app">
    <!-- blog页面 -->
    <div 
      class="blog"
      v-if="!isAdmin">
      <navigation v-show="navShow"/>
      <div 
        ref="container" 
        class="container">
        <transition
          name="view"
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          :duration="300">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>    
          </keep-alive>
        </transition>  
        <transition
          name="view"
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          :duration="300">
          <router-view v-if="!$route.meta.keepAlive"/>
        </transition>
      </div>
    </div>
    <!-- 后台管理页面 -->
    <div 
      class="admin"
      v-if="isAdmin">
      <el-container>
        <el-aside>
          <Side/>
        </el-aside>
        <el-container>
          <el-header height="100px">{{sideBar}}</el-header>
          <el-main>
            <editor/>
          </el-main>
        </el-container>
      </el-container>
    </div>
    <!-- 背景图 -->
    <img 
      src="./assets/image/bg.jpg" 
      alt="背景图" >
    <!-- 回到顶部按钮 -->
    <div 
      class="top"
      @click="scroll">
      <i  
        class="el-icon-arrow-up"
        style="color:#fff"/>
    </div>
  </div>
</template>


<script>
import navigation from "@/components/navigation/Navigation.vue";
import Side from "@/components/side/Side.vue";
import editor from "@/views/admin/editor/Editor.vue"

export default {
  name: "App",
  data() {
    return {
      show: false,
      speed: 10,
      isAdmin: true,
      sideBar: "admin"
    };
  },
  components: { navigation, Side, editor },
  watch: {
    $route: "homeBack"
  },
  computed: {
     // 头部导航栏
    navShow() {
      if (!this.show & !(window.location.pathname == "/auth")) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    // 回退检测
    homeBack(to) {
      this.show = to.name == "home" ? true : false
    },
    toTop(){
      let top = document.documentElement.scrollTop || document.body.scrollTop
      if(top>0){
        this.speed+=50
        document.documentElement.scrollTop = document.body.scrollTop = top-this.speed
        setTimeout(this.toTop,40)
      }
    },
    // 回到顶部
    scroll(){
      this.toTop()
    }
  },
  mounted(){
    // 检测当前路由
    this.show = window.location.pathname == "/" ? true : false;   
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  & > img {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;}
}

.container {
  position: relative;
  z-index: 2;
}

.admin{
  position: relative;
  z-index: 10;
  background-color: #fff;
  .el-container{
    height: 100vh;
    .el-aside{
      width: 20%;
      background-color: #262a30;
    }
    .el-header{
      font-size: 24px;
      line-height: 100px;
      font-weight: bold;
      border-bottom: solid 1px #e6e6e6;
    }
  }
}

.top{
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(37, 37, 37, 0.2);
  i{
    font-size: 20px;
  }
}

@media (max-width: 700px) {
  #app > img {
    display: none;
  }
  
  nav {
    background: #fff;
  }
}
</style>

