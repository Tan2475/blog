<template>
  <div class="me">
    <PostDetail :detail="post"/>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex"
import PostDetail from "@/components/postDetail/PostDetail.vue"

const {mapState, mapActions} = createNamespacedHelpers('user')

export default {
    name: "Me",
    data(){
        return{}
    },
    components:{ PostDetail },
    computed:{
      ...mapState(['post'])
    },
    methods: {
      ...mapActions(['fetchUserPost'])
    },  
    watch:{
      $route(){
        this.fetchUserPost()
      }
    },
    created () {
      this.fetchUserPost()
    }
}
</script>
