<template>
  <div class="PostList">
    <post 
      v-for="(post,index) in post_list" 
      :key="index" 
      :post="post"/>
  </div>
</template>

<script>
import post from "@/components/post/Post.vue";

export default {
  name: "PostList",
  data() {
    return {
      store: null
    };
  },
  components: { post },
  computed: {
    post_list() {
      return this.$store.state.post_list;
    }
  },
  methods: {
    initStore(store) {
      for (let post of this.post_list) {
        store.add(post);
      }
    },
    putStore(store) {
      for (let post of this.post_list) {
        store.put(post);
      }
    }
  },
  created() {
    this.$store.dispatch("getPost", { req: this.$axios, url: "/v1/posts" });
  },
  mounted() {
    // 打开indexedDB
    const request = window.indexedDB.open("blog", 1);

    // 监听成功
    request.onsuccess = () => {
      const db = request.result;
      const store = db.transaction(["post"], "readwrite").objectStore("post");
      
      // 初始化更新
      const rq = store.get(1)
      rq.onsuccess = ()=>{
        if(!rq.result){
          this.initStore(store)
        }else{
          this.putStore(store)
        }
      }
    };
    // 监听更改
    request.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("post")) {
        db.createObjectStore("post", { keyPath: "id" });
      }
    };
  },
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

