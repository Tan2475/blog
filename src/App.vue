<template>
  <div id="app">
    <navigation 
      v-show="navShow"/>
    <div 
      ref="container" 
      class="container">
      <router-view />
    </div>
    <img 
      src="./assets/image/bg.jpg" 
      alt="背景图" >
  </div>
</template>


<script>
import home from "@/views/home/Home.vue";
import navigation from "@/components/navigation/Navigation.vue";

export default {
  name: "App",
  data() {
    return {
      h_show: false,
      menu_bars:""
    };
  },
  components: { home, navigation },
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


  mounted() {
    // 检测当前路由
    this.h_show = window.location.pathname == "/" ? true : false;
    // 滚动监听
    let docEl = document.documentElement,
      t = 0,
      p = 0;
    window.addEventListener("scroll", () => {
      p = docEl.scrollTop
      if (docEl.clientWidth < 701) {
        if (p > 1) {
          this.n_show = false
        }
        if (t > p) {
          this.n_show = true
        }
        setTimeout(() => (t = p), 0)
      }
    })
  }
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
