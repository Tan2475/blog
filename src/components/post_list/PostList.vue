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
        console.log("p")
        store.add(post);
      }
    },
    putStore(store) {
      for (let post of this.post_list) {
        console.log("p")
        store.put(post);
      }
    }
  },
  created() {
    this.$store.dispatch("getPost", { req: this.$axios, url: "/v1/posts" });
  },
  mounted() {
    // 打开indexedDB
    let request = window.indexedDB.open("blog", 1);

    // 监听成功
    request.onsuccess = event => {
      let db = request.result;
      let store = db.transaction(["post"], "readwrite").objectStore("post");
      
      // 初始化更新
      let rq = store.get(1)
      rq.onsuccess = (e)=>{
        if(!rq.result){
          this.initStore(store)
        }else{
          this.putStore(store)
        }
      }
    };
    // 监听更改
    request.onupgradeneeded = event => {
      let db = event.target.result;
      let objectStore;
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

