<template>
    <div class="PostList">
        <post v-for="(post,index) in post_list" :key="index" :post="post"/>
    </div>
</template>

<script>
import post from "@/components/post_list/Post.vue";

export default {
  name: "postlist",
  data() {
    return {
        post_list:[]
    };
  },
  components: {
    post
  },
  mounted() {
    this.$axios.get("/v1/posts").then(res => {
      this.post_list = res.data
    });
  }
};
</script>

<style>
.PostList {
  width: 60%;
  height: 100%;

  padding-top: 20px;
  margin: 0 auto;
}

@media (max-width: 700px) {
  .PostList {
    width: 100%;
  }
}
</style>

