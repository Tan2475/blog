<template>
  <div 
    class="post flex_colum_center" 
    @click="intoPost">
    <div class="title">{{ post.title }}</div>
    <div class="text">
      <p v-html='post.summary' />
    </div>
    <div class="info">
      <div class="tips">
        <span><i 
          class="fa fa-tags" 
          aria-hidden="true" />{{ post.category }}</span>
        <span><i 
          class="fa fa-calendar" 
          aria-hidden="true" />{{ post.current_titme }}</span>
      </div>
      <span class="go">
        <a :href="'/post/'+post.id">点击阅读 <i 
          class="fa fa-angle-double-right" 
          aria-hidden="true" /></a>
      </span>
    </div>
  </div>
</template>

<script>
import "../../assets/css/layout.css";

export default {
  name: "PostCard",
  data() {
    return {};
  },
  props:{
    post:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    intoPost() {
      this.$router.push({
        name: "post",
        params: { pid: this.post.id }
      });
    }
  }
};
</script>

<style lang="scss">
.post {
  max-height: 180px;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 6px;
  padding: 14px;
  margin-bottom: 0.22rem;
  font-size: 14px;
  line-height: 2;
  color: rgb(0, 0, 0);
  align-items: flex-start;
  .title {
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 10px;
    }
  .text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      color: rgb(75, 75, 75);
    }
}

.info {
  width: 100%;
  height: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.go {
  display: inline-block;
  padding-right: 20px;
  a {
      color: #333;
      font-weight: bold;
    }
  a:hover {
      color: #0096fa;
    }
  i {
      padding-left: 4px;
    }
}

.tips i {
  padding-right: 10px;
}

.tips .fa-calendar {
  padding-left: 1rem;
}

@media (max-width: 700px) {
  .post {
    border-radius: 0;
    border-bottom: 1px solid #ececec;
  }
}
</style>
