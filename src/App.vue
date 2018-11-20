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
          <router-view />
        </transition>
      </div>
    </div>
    <img 
      src="./assets/image/bg.jpg" 
      alt="背景图" >
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
    }
  },
  mounted(){
    // 检测当前路由
    this.h_show = window.location.pathname == "/" ? true : false;   
  },
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

#app > img {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.container {
  position: relative;
  z-index: 2;
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
