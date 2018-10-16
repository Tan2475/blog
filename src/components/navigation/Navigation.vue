<template>
    <header>
      <nav>
        <div class="menu">
          <a class="homeback" href="/">Home</a>
          <ul >
            <router-link v-for="(item, index) in nav_list" :key="index" :to="item[1]">
              <li>{{item[0]}}</li>
            </router-link>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
import "../../assets/css/layout.css"

export default {
  name: "navigation",
  data() {
    return {};
  },
  props: ["nav_list"]
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
  width: 60%;
  height: 100%;
  font-size: 16px;
  margin: 0 auto;
}


.homeback{
  font-family: logo;
  font-size: 30px;
  font-weight: bold;
  line-height: 50px;
  padding-left: 10px;
  color: #333;
}


.menu ul {
  width: 40%;
  align-items: center;
  padding-right: 10px;
}

.menu, .menu ul{
  display: flex;
  justify-content: space-between;
}

.menu li{
    color: #333;
}

@media (max-width: 700px) {
  header {
    padding-bottom: 0;
  }
  nav {
    position:unset;
    height: 50px;
  }
}
</style>
