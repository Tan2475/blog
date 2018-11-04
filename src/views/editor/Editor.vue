<template>
  <div class="markBox flex_colum_center">
    <mavon-editor
      class="editor"
      v-model="context" 
      :box-shadow="false" />    
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import "@/assets/css/layout.css"

export default {
    name:"MorkDown",
    data(){ 
        return{}
    },
    components:{ mavonEditor },
    methods:{}
}
</script>

<style scoped>
.markBox{
    width: 100%;
  height: 100vh;
}

.editor{
  position:fixed;
  top:50px;
  height:90%;
}
</style>

