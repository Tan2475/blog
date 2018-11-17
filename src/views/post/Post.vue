<template>
  <transition name="post">
    <PostDetail :detail="post"/>
  </transition>
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
  components: { PostDetail },
  computed: {
    ...mapState(['post']),
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
.post-enter,.post-leave-to{
  transform: translateY(-20px);
  opacity: 0;
}

.post-enter-active,.post-leave-active{
  transition:all 0.3s ease
}
</style>




