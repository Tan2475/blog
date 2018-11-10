<template>
  <header>
    <nav>
      <div class="menu">
        <a 
          class="homeback" 
          href="/">GameLife</a>
        <el-menu 
          :default-active="activeIndex"
          mode="horizontal" 
          router >
          <template v-for="(item, index) in menu_bars">
            <el-menu-item 
              :index="item[1]" 
              :key="index"
              style="height:50px">{{ item[0] }}</el-menu-item>            
          </template>
        </el-menu>
        <i 
          class="fa fa-bars" 
          aria-hidden="true" 
          @click="showbar" />
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
      isShow: false,
      activeIndex:'/postlist'
    };
  },
  computed: {
    menu_bars() {
      return this.$store.state.menu_bars;
    }
  },
  methods: {
    showbar() {
      this.isShow = !this.isShow;
    }
  }
};
</script>


<style >
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
  width: 60%;
  height: 100%;
  font-size: 16px;
  margin: 0 auto;
  justify-content: space-between;
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
    height: 50px;
  }

  .menu {
    width: 100%;
  }

  .fa-bars {
    opacity: 1;
  }

  .homeback {
    padding-left: 20px;
  }

  nav .menu .showbar {
    display: flex;
  }

/* 
  .menu ul {
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 10px 0;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.92);
    z-index: 10;
    border-top: 1px solid #ececec;
    box-shadow: 0 10px 18px #66666617;
  } */
}
</style>
