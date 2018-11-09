<template>
  <div id="post">
    <section 
      id='markdown-preview-body'
      v-lightCode
      v-html='postData' />
  </div>
</template>

<script>
import markdown from '../../util/MdParse.js'

export default {
  name: "Post",
  data() {
    return {
      params:{
        title:'2',
        pid:'5',
      }
    };
  },
  computed: {
    postData() {    
        const {post_list}=this.$store.state
        const post = post_list[4]
        if(post){
          return markdown(post.content)
        }   
    }
  },
   created(){
    const {dispatch}=this.$store
    dispatch('getPost', {params:this.params}) 
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/markdown.css';

#post {
  position: relative;
  height: 100%;
  width: 60%;
  z-index: 2;
  padding: 20px 0;
  margin: 20px auto;
  font-size: 15px;
  line-height: 1.5;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 4px;
}
#markdown-preview-body{
  font-family: "Montserrat", "微软雅黑";
  font-weight: 400;
  word-spacing: 1px;
  color: #666;
  margin: 0 20px;
}
@media (max-width: 700px) {
  #post {
    width: 100%;
    margin-top: 0;
    background: #fff;
  }
}
</style>



