<template>
    <div id="marked">
        <mavon-editor v-model="context" style="height:100%" :boxShadow=false @save="saveMark"></mavon-editor>    
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
    name:"marked",
    props:["article"],
    data(){
        return{
            context:this.article
        }
    },
    components:{
        mavonEditor
    },
    methods:{
        
    }
}
</script>

<style>
#marked {
    margin: auto;
    width:80%;
    height:580px;
}
</style>

