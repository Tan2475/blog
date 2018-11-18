<template>
  <div id="post">
    <div class="postHeader">
      <div class="title">{{ detail.title }}</div>
      <div class="pInfo">
        <div class="tips">
          <span><i 
            class="fa fa-tags" 
            aria-hidden="true" />{{ detail.category }}</span>
          <el-tag
            style='margin-left: 20px'
            size='mini'
            v-for="(item,index) in markList"
            :key="index">
            {{ item }}
          </el-tag>
          <span><i 
            class="fa fa-calendar" 
            aria-hidden="true" 
            style='padding-left:40px'/>{{ currentTime }}</span>
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
import markdown from '@/util/MdParse.js'
import {getTime} from "@/util/time"

export default {
  name: "PostDetail",
  data() {
    return {};
  },
  props:{
    detail:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    postData(){
      const content = this.detail.content
      if(content){
        return markdown(content)
      }
    },
    markList(){
      const mark = this.detail.mark
      if(mark){
        return mark.split(",")
      }
    },
    currentTime(){
      const time = this.detail.current_time
      return getTime(time)
    }
  },
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



