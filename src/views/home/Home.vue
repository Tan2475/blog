<template>
  <transition name="home">
    <div class="home"> 
      <div class="game_link flex_colum_center position_center">
        <div class="slogan flex_colum_center">
          <span class="logo">Game Life</span>
          <p class="catchphrase">让生活变得更有趣</p>
        </div>
        <ul class="menu_list flex_colum_center">
          <router-link 
            class="menu_bar" 
            v-for="(menu_bar, index) in menu_bars" 
            :key=index 
            :to="menu_bar[1]">
            <li 
              class="flex_colum_center" 
              @click="changeview">{{ menu_bar[0] }}</li>
          </router-link>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import "../../assets/css/layout.css";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    menu_bars() {
      return this.$store.getters.menu_bars;
    },
  },
  methods: {
    changeview() {
      return this.$emit("changeview");
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

  background: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
}

.slogan {
  width: 70%;
}

.slogan .logo {
  display: inline-block;
  width: 100%;
  font-family: 'Indie Flower', cursive;
  font-size: 50px;
  text-align: center;
  color: #0096fa;
}

.slogan .catchphrase {
  font-size: 12px;
  color: #757c80;
  font-weight: bold;
  margin-top: 6px;
}

.menu_list {
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

.menu_list li {
  height: 100%;
  justify-content: center;
}

.home-enter,.home-leave-to{
  opacity: 0;
}

.home-enter-active,.home-leave-active{
  transition:all 0.3s ease
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

  .home::before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    content: "";
    display: block;
    background-color: rgba(255, 255, 255, 0.92);
  }
}
</style>


