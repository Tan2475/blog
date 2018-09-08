<template>
    <div class="home">
      <el-row :type="flex">
        <el-col :span="10" :justify="center">
          <div class="game_link flex_colum_center position_center">
            <div class="slogan flex_colum_center">
              <img src="../../assets/image/GameLife.png" alt="GameLife">
              <span>为了留住今日的回忆</span>
            </div>
            <ul>
              <li class="menu_bar"  v-for="(menu_bar, index) in menu_bars" 
              :key=index><span>{{menu_bar}}</span></li>
            </ul>
         </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import "../../assets/css/layout.css"

export default {
  name: "Home",
  data() {
    return {
      menu_bars: ["文章", "每日一P", "更新说明", "关于我"]
    };
  }
};
</script>

<style>


.home {
  width: 100%;
  height: 100%;
}

.game_link {
  width: 4.1rem;
  height: 4.68rem;
  
  min-width: 274px;
  min-height: 312px;

  justify-content: center;

  background: rgba(255, 255, 255, 0.82);
  border-radius: 4px;
}

.slogan {
  width: 74%;
  margin-bottom:0.6rem;
}

.slogan img{
 width:100%;
}
 

.slogan span{
  font-size: 12px;
  color: rgb(27, 164, 255);
}


ul {
  height: auto;
  width: 2.7rem;
}

.menu_bar {
  height: 0.42rem;
  margin-bottom: 0.2rem;
  background-color: #25c6ff;
  border-radius: 0.04rem;

  text-align: center;
  line-height: 0.42rem;
  color: #fff;
  font-size: 0.2rem;
}
.menu_bar:hover {
  background: #2699fb;
}

.menu_bar span {
  /* text-shadow: 0 2px 6px rgb(145, 149, 168); */
}
</style>


