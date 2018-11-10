<template>
  <div class="PostList">
    <postcard 
      v-for="(post,index) in postList.data" 
      :key="index" 
      :post="post"/>
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="postList.total" 
      @current-change="changePage" />
  </div>
</template>

<script>
import postcard from "@/components/postCard/PostCard.vue";
import {createNamespacedHelpers} from 'vuex'

const {mapState, mapActions} = createNamespacedHelpers('post')

export default {
  name: "PostList",
  data() {
    return {
      params:{
        pageNo:1,
        pageSize:10,
      }
    };
  },
  components: { postcard },
  computed: {
    ...mapState(['postList'])
  },
  methods: {
    ...mapActions(['fetchPostList']),
    changePage(current_page){
      this.params.pageNo = current_page
      this.fetchPostList(this.params)
    }
  },
  created() {
    this.fetchPostList(this.params)
  }
};
</script>

<style>
.PostList {
  width: 60%;
  height: 100%;
  padding-top: 20px;
  margin: 0 auto;
}

.pagination{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
@media (max-width: 700px) {
  .PostList {
    width: 100%;
  }
  .pagination{
    margin-top: 20px;
  }
}
</style>

