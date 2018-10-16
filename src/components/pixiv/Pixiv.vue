<template>
    <div class="pixiv">
        <div class="pixiv_wrap flex_colum_center">
            <div class="big_image">
                <img :src="bigSrc()" alt="">
            </div>
            <div class="images_mask">
                <ul class="images">
                    <li v-for="(image, index) in images" :key="index" @click="changeImage(index)">
                        <div class="mask"></div>
                        <img :src=image alt="pixivImage">
                    </li>
                </ul>
            </div>
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
        pixiv1: require("../../assets/image/1.jpg"),
        pixiv2: require("../../assets/image/2.jpg"),
        pixiv3: require("../../assets/image/3.jpg"),
        pixiv4: require("../../assets/image/4.jpg"),
        pixiv5: require("../../assets/image/5.jpg"),
        pixiv6: require("../../assets/image/6.jpg"),
        pixiv7: require("../../assets/image/7.jpg")
      },
      index: "pixiv1"
    };
  },
  methods: {
    bigSrc() {
      return this.images[this.index];
    },
    changeImage(index) {
      this.index = index;
      return true;
    }
  }
};
</script>

<style>
.pixiv {
  height: 100vh;
  background: #fff;
  padding: 20px 0;
}

.pixiv_wrap {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
}

.big_image {
  width: 100%;
  height: 5.8rem;
}

.images {
  display: flex;

  width: 100%;
  height: 1rem;
  margin-top: 20px;
}

.images li {
  width: 13.8%;
  height: 100%;
  border-radius: 4px;
}

.images li:hover {
  opacity: 0.5;
}

.images img {
  width: 116%;
}

.pixiv,
.big_image,
.images li {
  overflow: hidden;
}

.big_image img {
  display: block;
  height: 100%;
  margin: 0 auto;
}

@media (max-width: 700px) {
  .pixiv_wrap {
    width: 100%;
  }

  .big_image {
    height: auto;
  }

  .big_image img {
    width: 100%;
  }

  .images_mask {
    height: 80px;
    overflow: hidden;
  }
  .images {
    height: inherit;
    overflow: auto;
    margin-top: 15px;
  }

  .images li {
    width: 25%;
    flex-shrink: 0;
    margin-right: 2px;
  }
}
</style>