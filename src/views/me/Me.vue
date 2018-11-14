<template>
  <div class="me">
    <PostDetail :detail="user"/>
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
      ...mapState(['user'])
    },
    methods: {
      ...mapActions(['fetchUser'])
    },  
    created () {
      this.fetchUser()
    }
}
</script>
