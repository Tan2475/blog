<template>
  <div class="markBox flex_colum_center">
    <mavon-editor 
      v-model="context" 
      style="height:100%" 
      :box-shadow="false">1</mavon-editor>    
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

<style>

.markBox{
    width: 100%;
    height: 100%;
}

</style>

