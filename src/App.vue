<template>
  <div id="app">
    <div
      class="blog">
      <navigation 
        v-show="navShow"/>
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
    <img 
      src="./assets/image/bg.jpg" 
      alt="背景图" >
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

export default {
  name: "App",
  data() {
    return {
      h_show: false,
      menu_bars:"",
      speed:10
    };
  },
  components: { navigation },
  watch: {
    $route: "homeBack"
  },
  computed: {
     // 头部导航栏
    navShow() {
      if (!this.h_show & !(window.location.pathname == "/auth")) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    // 回退检测
    homeBack(to) {
      this.h_show = to.name == "home" ? true : false
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
    this.h_show = window.location.pathname == "/" ? true : false;   
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

