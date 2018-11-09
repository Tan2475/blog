<template>
  <div class="writings">
    <div class="content">
      <div 
        class="wrap" 
        v-html='postData' />
    </div>
  </div>
</template>

<script>
import marked from 'marked'

const rendererMD = new marked.Renderer()

marked.setOptions({
renderer: rendererMD,
gfm: true,
tables: true,
breaks: true,
pedantic: false,
sanitize: false,
smartLists: true,
smartypants: false
})

export default {
  name: "Post",
  data() {
    return {
      config:{
        params:{
          title:'1',
          pid:'2',
        }
      },
    };
  },
  computed: {
    postData() {
      const text = this.$store.state.post_list[0]
      if(text.content){
        return marked(text, {sanitize: true})
      }
    }
  },
   created(){
    this.$store.dispatch('getPost', {url:'/api/post', config:this.config}) 
  }
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
@media (max-width: 700px) {
  .content {
    width: 100%;
    background: #fff;
  }
}
</style>

