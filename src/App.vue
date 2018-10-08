<template>
  <div id="app">
    <navigation v-if="navShow()" :style="{opacity:visible}" :nav_list="menu_bar"/>
    <div ref="container" class="container">
      <home @changeview="changeView" v-show="h_show"/>
      <router-view />
    </div>
    <img src="./assets/image/bg.jpg" alt="tupain" >
  </div>
</template>


<script>
import home from "@/components/home/Home.vue";
import navigation from "@/components/navigation/Navigation.vue";

export default {
  name: "App",
  data() {
    return {
      h_show: false,
      visible: "1",
      menu_bar:""
    };
  },
  components: { home, navigation },
  watch: {
    $route: "homeBack"
  },
  computed: {
  },
  methods: {
    // 切换路由，隐藏home
    changeView(menu_bar) {
      this.h_show = false
      this.menu_bar = menu_bar
    },

    // 回退检测
    homeBack(to) {
      this.h_show = to.name == "home" ? true : false
    },

    // 头部导航栏
    navShow() {
      if (!this.h_show & !(window.location.pathname == "/auth")) {
        return true
      } else {
        return false
      }
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
        if (p > 70) {
          this.visible = "0"
        }
        if (t > p) {
          this.visible = "1"
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
  background: #f4f5f5;
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
