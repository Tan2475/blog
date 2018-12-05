<template>
  <PostDetail 
    v-show="!isLoading"
    v-loading.fullscreen.lock="isLoading" 
    :detail="post"/>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import PostDetail from "@/components/postDetail/PostDetail"

const {mapState, mapActions} = createNamespacedHelpers('post')

export default {
  name: "Post",
  data() {
    return {
      params:{
        pid: this.pid,
      },
      isLoading: false,
    };
  },
  props:{
    pid:{
      type:[Number,String],
      default(){
        return 1
      }
    }
  },
  components: { PostDetail },
  computed: {
    ...mapState(['post']),
  },
  methods:{
    ...mapActions(['fetchPost'])
  },
  beforeRouteLeave(to, from, next){
    if(to.name === "postlist"){
      to.meta.keepAlive = true
    }else{
      to.meta.keepAlive = false
    }
    next()
  },
  mounted(){
    this.isLoading=true
    this.fetchPost(this.params).then(()=>this.isLoading=false)
  }
};
</script>






