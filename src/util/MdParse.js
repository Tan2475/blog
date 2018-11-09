import marked from 'marked'
const rendererMD = new marked.Renderer()

marked.setOptions({
renderer: rendererMD,
gfm: true,
tables: true,
breaks: true,
pedantic: false,
sanitize: false,
smartLists: true,
smartypants: false,
})

// 自定义h标签
rendererMD.heading = (text, level)=>{
  return `<h${level} id='head-${level}' class='blog-head'>${text}</h${level}>`
}

// 自定义li标签
rendererMD.listitem = (text)=>{
  return `<li class='list-item'>${text}</li>`
}

rendererMD.paragraph = (text)=>{
  return `<p class='paragraph'>${text}</p>`
}


export default function markdown(mdStr){
  return marked(mdStr, {renderer: rendererMD})
}