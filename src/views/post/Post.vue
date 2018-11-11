<template>
  <div id="post">
    <div class="postHeader">
      <div class="title">{{ post.title }}</div>
      <div class="pInfo">
        <div class="tips">
          <span><i 
            class="fa fa-tags" 
            aria-hidden="true" />{{ post.category }}</span>
          <span><i 
            class="fa fa-calendar" 
            aria-hidden="true" 
            style='padding-left:20px'/>{{ post.current_titme }}</span>
        </div>
      </div>
    </div>
    <section 
      id='markdown-preview-body'
      v-lightCode
      v-html='postData'/>
  </div>
</template>

<script>
import markdown from '../../util/MdParse.js'
import {createNamespacedHelpers} from 'vuex'

const {mapState, mapActions} = createNamespacedHelpers('post')

export default {
  name: "Post",
  data() {
    return {
      params:{
        pid: this.pid,
      }
    };
  },
  props:{
    pid:{
      type:Number,
      default(){
        return 1
      }
    }
  },
  computed: {
    ...mapState(['post']),
    postData(){
      if(this.post){
        return markdown(this.post.content)
      }
    }
  },
  methods:{
    ...mapActions(['fetchPost'])
  },
  created(){
    this.fetchPost(this.params)
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

.postHeader{
  display: flex;
  flex-direction: column;
  align-items: center;
  .title{
    font-size: 2em;
    font-weight: 700;
    line-height: 1.75;
    margin: .67em 0;
  }
  .pInfo{
    align-self: flex-start;
    margin-left: 20px;
    .tips i {
      padding-right: 10px;
    }
  }
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



