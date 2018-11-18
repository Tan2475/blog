<template>
  <header>
    <nav>
      <div class="menu">
        <a 
          class="homeback" 
          href="/">GameLife</a>
        <div class="right">
          <el-menu 
            class="menu_item"
            :default-active="activeIndex"
            mode="horizontal" 
            router >
            <template v-for="(item, index) in menu_bars">
              <el-menu-item 
                :index="item[1]" 
                :key="index"
                :style="menu">{{ item[0] }}</el-menu-item>            
            </template>
          </el-menu>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import "../../assets/css/layout.css";

export default {
  name: "NaviGation",
  data() {
    return {
      activeIndex:window.location.pathname,
      menu:{}
    };
  },
  watch:{
    $route:"routeChange"
  },
  computed: {
    menu_bars() {
      return this.$store.getters.menu_bars;
    },
  },
  methods: {
    routeChange(to){
      this.activeIndex = to.path
    },
    windowChange(){
      const docEl = document.documentElement
      const width = docEl.clientWidth
      this.menu = width<=701 ? {height:"30px",lineHeight:"30px"} : {height:"50px"}
    },
  },
  mounted(){
    const resizeEvt = "orientationchange" in window ? "orientationchange" : "resize"
    window.addEventListener(resizeEvt, this.windowChange, false)
    document.addEventListener("DOMContentLoaded", this.windowChange, false)
  }
};
</script>


<style lang="scss">
header {
  padding-bottom: 50px;
}
nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 10;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 100%;
  font-size: 16px;
  margin: 0 auto;
}
.right{
  display: flex;
  align-items: center;
}
.homeback {
  font-family: 'Indie Flower', cursive;
  font-size: 30px;
  font-weight: bold;
  line-height: 50px;
  padding-left: 10px;
  color: #0096fa;
}
.fa-bars {
  position: absolute;
  right: 0;
  height: 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
}


@media (max-width: 700px) {
  header {
    padding-bottom: 0;
  }
  nav {
    position: unset;
    height: 70px;
  }
  .menu {
    width: 100%;
    flex-wrap: wrap;
  }
  .homeback {
    font-size: 20px;
    line-height: 40px;
    padding-left: 20px;
  }
  .menu_item{
    width: 100vw;
    height: 30px;
  }
}
</style>
