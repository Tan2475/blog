<template>
    <header>
      <nav>
        <ul class="menu">
          <router-link v-for="(item, index) in nav_list" :key="index" :to="item[1]">
            <li>{{item[0]}}</li>
          </router-link>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
    name: "navigation",
    data(){
        return{}
    },
    props: ["nav_list"]

}
</script>


<style >
header{
    padding-bottom: 70px;;
}

nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;

  z-index: 10;
  background: rgba(255, 255, 255);

  box-shadow: 0 1px 1px 0 #dcdcdc;
}

.menu{
    width: 60%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    font-size: 16px;
}

.menu li{
    color: #333;
    display: flex;
    align-items: center;
}

</style>
