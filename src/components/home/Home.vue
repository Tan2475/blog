<template>
    <div class="home"> 
      <div class="game_link flex_colum_center position_center">
        <div class="slogan flex_colum_center">
          <img src="../../assets/image/logo.svg" alt="GameLife">
          <span>为了留住今日的回忆</span>
        </div>
        <ul class="flex_colum_center">
          <router-link class="menu_bar" v-for="(menu_bar, index) in menu_bars" 
                                        :key=index 
                                        :to="menu_bar[1]"
                                        >
              <li class="flex_colum_center" @click="changeview">{{menu_bar[0]}}</li>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
import "../../assets/css/layout.css";

export default {
  name: "Home",
  data() {
    return {
      menu_bars: [["文章","/postlist"], ["每日一P","/pixiv"], ["登录","/auth"], ["关于我","/me"]]
    };
  },
  
  methods:{
    changeview(){
      this.$emit("changeview", this.menu_bars)
    },
  },
};
</script>

<style>
.home {
  width: 100%;
  height: 100vh;
}

.game_link {
  width: 3.4rem;
  height: 4.4rem;

  min-width: 300px;
  min-height: 400px;

  justify-content: space-around;

  background: rgba(255, 255, 255, 0.82);
  border-radius: 10px;
}

.slogan {
  width: 70%;
}

.slogan img {
  width: 100%;
}

.slogan span {
  color: rgba(27, 164, 255, 0.514);
  font-size: 12px;
}

ul {
  height: 50%;
  width: 70%;

  justify-content: space-between;
}

.menu_bar {
  display: block;
  height: 16%;
  width: 100%;
  background-color: #25c6ff;
  border-radius: 1rem;
  color: #fff;
}

.menu_bar:hover {
  background: #2699fb;
}

li{
  height: 100%;
  justify-content: center;
}

@media (max-width: 700px) {
  .game_link {
    width: 80%;
    height: 80%;

    background: rgba(255, 255, 255, 0);
    font-size: 14px;
  }

  .home {
    background: url("../../assets/image/bg.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }
}


</style>


