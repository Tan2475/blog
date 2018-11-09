import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai.css'

const lightCode = {}

lightCode.install=function(Vue){
  Vue.directive('lightCode',function(el){
    const codeBlocks = el.querySelectorAll('pre code')
    codeBlocks.forEach(code => {
      hljs.highlightBlock(code)
    });
  })
}

Vue.use(lightCode)

export default lightCode