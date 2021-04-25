<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CND2container" ref="RCND2">
            <!-- 主要区域容器 -->
            <div class="CND2main">
                <div class="CND2mainPic"></div>
                <div class="CND2mainDetail">
                    <!-- M1顶部结构 -->
                    <div class="CND2mainDetailTop">
                        <div class="CND2mainDetailBottomLeftNav">
                            <!-- M1顶部导航左 -->
                            <div class="CND2mainDetailBottomLeftNavLeft">
                                <div class="CND2mainDetailBottomLeftNavLeftDetail">
                                    <span>新闻资讯</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>文旅新闻</span>
                                </div>
                            </div>
                            <div class="CND2mainDetailBottomLeftNavRight">
                                <!-- M1顶部导航右 -->
                                <div class="CND2mainDetailBottomLeftNavRightDetail">
                                    <span class="XWredspan">文旅新闻</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="XWspan">开发新闻</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CND2mainDetailBottom">
                        <!-- M1底部结构左 -->
                        <div class="CND2mainDetailBottomLeft">
                            <div class="CND2mainDetailBottomLeftContainer">
                                <br/>
                                <br/>
                                <h1 class="CND2H2">桦正文旅携手中医药大学举办棋王争霸赛</h1>
                                <br/>
                                <p class="CND2Ptitle">2020.11.07</p>
                                <br/>
                                <p class="CND2Pcontent">由桦正文旅公司赞助举办的棋王争霸赛圆满结束。</p>
                                <br/>
                                <p class="CND2Pcontent">导语：天气渐冷，寒风萧瑟，桦正文旅作为致力于推动大学生文化发展的新型旅游公司将为了让因疫情被困在家中的同学们在居家防疫的同时又能体验到学校学习生活的快乐，
让同学们在棋盘上，比赛中拓展知识面培养兴趣爱好，让同学们在对弈之中体会中华⽂化的博⼤精深，
本公司赞助此次比赛拓宽了选手们对于下棋的知识面，锻炼了同学们的意志力和心理素质，聚焦了大学生对于下棋的想法和看法，
将下棋艺术通过此次比赛推进更多人的视野中，同时也将中西文化结合，推动了棋艺市场的发展，也将比赛的奖励形式转化为学分的形式，鼓励学生参与。</p>
                                <br/>
                                <div class="D2img1"></div>
                                <br/>
                                <p class="CND2Pcontent">此次比赛的报名时间为11月3日的10：00-17：00，凭借新颖的形式以及主题吸引了一大批前来报名的学生。</p>
                                <br/>
                                <div class="D2img2"></div>
                                <br/>
                                <p class="CND2Pcontent">开幕式2020 年 11 ⽉ 7 ⽇ 08:30-09:00在体育馆的二楼举行（开幕式的舞狮表演）</p>
                                <br/>
                                <div class="D2img3"></div>
                                <br/>
                                <p class="CND2Pcontent">开幕式学生表演结束后便在体育馆迎来了初赛，现场参赛选手众多，都严阵以待的坐在位置上聚精会神地看着自己的棋盘，为比赛加油使劲。</p>
                                <br/>
                                <div class="D2img4"></div>
                                <br/>
                                <div class="D2img5"></div>
                                <br/>
                                <p class="CND2PcontentSpace">（比赛进行中）</p>
                                <br/>
                                <p class="CND2Pcontent">比赛中间各位选手都拿出了各自的看家本领，展开了激烈的角逐，观众以及评委也都对热烈的比赛产生了共鸣。</p>
                                <br/>
                                <p class="CND2Pcontent">最后，在这个寒冷的冬天，由本公司联合山东中医药大学举办的棋王争霸赛完美落下帷幕，在此次比赛中获得优异成绩的各位也都领取了各自的奖励。
                                <br/>
在比赛中，选手们互相切磋棋技，磨练各自的心态，培养了良好的个人兴趣，把下棋这件艺术带进了更多人的生活，让更多人了解到了下棋的魅力。</p>
                                <div class="D2img6"></div>
                                <br/>
                                <div class="D2img9"></div>
                            </div>
                        </div>
                        <!-- M1底部结构右 -->
                        <div class="CND2mainDetailBottomRight">
                            <div class="CND2mainDetailBottomRightCtn">
                                <div class="CND2img4">
                                    <div class="CND2img4word">
                                    <p class="CND2img4p1">桦正新闻</p>
                                    <p class="CND2img4p2">记录桦正每一刻</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部容器 -->
            <div class="CND2footer">
                <Footer></Footer>
            </div>
        </div>
</transition>
</template>

<script>
export default {
    mounted(){
      let SW = screen.width;
      let SH = screen.height;
      SW<=1440?SW = '1440': SW =screen.width;
      SH<=900?SH = '3500': SH =3.89*screen.height;
      this.$refs.RCND2.style.height = `${SH}px` ;
      this.$refs.RCND2.style.width = `${SW}px` ;
    },
}
</script>

<style scoped>
*{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    margin: 0;
    padding: 0;
}
/* 容器样式 */
.CND2container{
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
}

/* 主体样式 */
.CND2main{
    /* 高度改变这个要改 */
    height: 99.3%;
}
/* 主体头部图片 */
.CND2mainPic{
    /* 高度改变这个要改 */
    height: 5.04%;
    background-image: url("../assets/topimg.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: 86%;
}

/* 主体内容样式 */
.CND2mainDetail{
    margin: 0 5%;
    height: 92%;
}
.CND2mainDetailTop{
    /* 高度改变这个要改 */
    height: 1.93%;
    border-bottom:1px solid #DCDFE6;
}
.CND2mainDetailBottom{
    height: 100%;
}
.CND2mainDetailBottomLeft{
    float: left;
    width: 69%;
    height: 100%;
    padding-right: 5px;
    border-right:1px solid #DCDFE6;
}
.CND2mainDetailBottomLeftContainer{
    height: 100%;
    width: 100%;
}
.CND2mainDetailBottomRight{
    float: left;
    width: 30%;
    height: 100%;
}
.CND2mainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CND2mainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CND2mainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CND2mainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CND2mainDetailBottomLeftNavRightDetail{
    float: right;
    height: 100%;
    padding-top: 2%;
}
.CND2mainDetailBottomRightCtn{
    width: 90%;
    height: 100%;
    margin: 5% auto;
}
.XWspan{
    color: #8E8B81;
}
.XWredspan{
    color: #029E9D;
}
.CND2img4{
    background-image: url("../assets/newsRimg.png");
    background-position: center;
    background-position-y: 0%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-color: black; */
    height: 13.75%;
    width: 95%;
}
.CND2img4word{
    padding: 80% 0; 
}
.CND2img4p1{
    text-align: center;
    font-size: 2.5em;
    color: #ffffff;
}
.CND2img4p2{
    text-align: center;
    color: #ffffff;
    font-size: 2em;
}
.CND2H2{
    text-align: center;
}
.CND2Ptitle{
    text-align: center;
}
.CND2Pcontent{
    text-indent: 2em;
    font-size: 1em;
}
.CND2PcontentSpace{
    text-align: center;
    font-size: 1em;
}
.D2img1,.D2img2,.D2img3,.D2img4,
.D2img5,.D2img6,.D2img7,.D2img8,
.D2img9{
    height: 290px;
    width: 490px;
    margin: 5px auto;
}
.D2img1{
    background-image: url("../assets/D2img1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D2img2{
    background-image: url("../assets/D2img2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D2img3{
    background-image: url("../assets/D2img3.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D2img4{
    background-image: url("../assets/D2img4.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D2img5{
    background-image: url("../assets/D2img5.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D2img6{
    background-image: url("../assets/D2img6.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D2img9{
    background-image: url("../assets/d1img9.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
/* 底部样式 */
.CND2footer{
    height: 3%;
}

/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}
</style>