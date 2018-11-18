<template>
  <PostDetail :detail="post"/>
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






