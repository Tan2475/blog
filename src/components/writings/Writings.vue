<template>
    <div class="writings">
        <div class="content">
            <h1><a id="About_Me_0"></a>About Me</h1> 
            <h2><a id="who_2"></a>who</h2> 
            <h3><a id="attribute_4"></a>attribute</h3> 
            <p>妄想系、专业直男、不善社交（貌似近期有改善）、宅（？）、好奇心旺盛</p> 
            <h3><a id="hobby_8"></a>hobby</h3> <p><strong>游戏</strong>、动画、历史、战争、异世界（泛指一切除现实世界的地方）</p> 
            <h2><a id="why_13"></a>why</h2> <p>本博客主要来记录个人生活中的胡思乱想，在此你也许会看到一些可笑或者引起不适的观点，那我先说声抱歉。</p> 
            <p>博客的另一个用途是作为技术笔记，同样，在技术理解上可能存在错误，敬请指出，或者无视。</p> 
            <h2><a id="Game_20"></a>Game</h2> <p>PSN：tb247200</p> <p>STEAM: 247544172</p> <p>NID: SW-7337-0277-2121</p> <h2><a id="website_structure_28"></a>website structure</h2> <ul> <li>服务器：Google Cloud</li> <li>运行环境：uwsgi+ningx</li> <li>语言：python</li> <li>框架：flask Vue</li> </ul> <h2><a id="__36"></a>拜了个拜 !!!</h2>
        </div>
    </div>
</template>

<script>
export default {
    name:"writhings",
    data(){
        return{

        }
    }
}
</script>

<style>
.writings{
    width:100%;
    height: 100%;
}

.content{
    padding: 20px;
    background:#fff;
    font-size: 16px;
    line-height: 1.5;
}

p,li{
    margin: 14px 0;
}

h1{
    display:none;
}

h2 {
    border-bottom: 1px solid #ececec;
}

h2, h3, h4 ,h5 {
    padding: 0.2rem 0 0.1rem;
}
</style>

