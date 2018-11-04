<template>
  <div class="writings">
    <div class="content">
      <div class="wrap">
        {{ postData }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      postData: ""
    };
  },
  computed: {
    post_list() {
      return this.$store.state.post_list;
    }
  },
  methods: {
    update(query) {
      const queryString = query;
      for (let post of this.post_list) {
        if (post.title === queryString.title) {
          this.postData = post.content;
        } else {
          return "未获取到文章数据";
        }
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {vm.update(to.query)});
  },
};
</script>

<style scoped>
.writings {
  position: relative;
  width: 100%;
  height: 100%;

  padding-top: 20px;
}

.content {
  position: relative;
  z-index: 2;
  width: 60%;
  padding: 20px 0;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.5;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 4px;
}

.wrap {
  margin: 0 20px;
}

p,
li {
  margin: 14px 0;
}

h1 {
  padding-bottom: 0.2rem;

  text-align: center;
  font-size: 30px;
  font-weight: bold;
}

h2 {
  border-bottom: 1px solid #ececec;
}

h2,
h3,
h4,
h5 {
  padding: 0.2rem 0 0.1rem;
}

@media (max-width: 700px) {
  .content {
    width: 100%;
    background: #fff;
  }
}
</style>

