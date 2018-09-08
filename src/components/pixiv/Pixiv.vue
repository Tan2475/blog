<template>
    <div class="pixiv">
        <div class="pixiv_wrap flex_colun_center">
            <h1>2018-9-2</h1>
            <div class="big_image">
                <img :src="bigSrc()" alt="">
            </div>
            <ul class="images">
                <li v-for="(image, index) in images" :key="index" @click="changeImage(index)">
                    <div class="mask">pid:2475</div>
                    <img :src=image alt="pixivImage">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import "../../assets/css/layout.css";

export default {
  name: "pixiv",
  data() {
    return {
      images: {
        "pixiv1": require("../../assets/image/1.jpg"),
        "pixiv2": require("../../assets/image/2.jpg"),
        "pixiv3": require("../../assets/image/3.jpg"),
        "pixiv4": require("../../assets/image/4.jpg"),
        "pixiv5": require("../../assets/image/5.jpg"),
        "pixiv6": require("../../assets/image/6.jpg"),
        "pixiv7": require("../../assets/image/7.jpg")
      },
      index:"pixiv1"
    };
  },
  methods: {
      bigSrc(){
          return this.images[this.index] 
      },
      changeImage(index){

          this.index = index
          return true
      }
  }
};
</script>

<style>
.pixiv{
  width: 100%;
  height: 100%;
  background: #fff;
}

.pixiv_wrap {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
}

.pixiv_wrap h1{
    padding: 20px 0;
}

.big_image {
  width: 100%;
  height: 5.8rem;

}

.images {
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 1rem;
  margin-top: 20px;
}

.iamges li{
    position: relative;
    height: 100%;
}

.images .mask{
    position:absolute;
    height: 1rem;
    background: rgba(0, 0, 0, 0.219);
    opacity: 0;

    font-size: 16px;
    color: #FFF;
    text-align: center;
    line-height: 1rem;
}

.images li,
.images .mask{
  width: 1.6rem;
  border-radius: 4px;
}


.images .mask:hover{
    opacity: 1;
}

.images img{
    width: 110%;
}

.big_image,
.images li{
    overflow: hidden;
}

.big_image img{
  display: block;
  height: 100%;
  margin: 0 auto;
}


</style>