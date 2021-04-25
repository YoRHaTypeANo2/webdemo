<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CNcontainer" ref="RCN"> 
            <!-- 主要区域容器 -->
            <div class="CNmain">
                <div class="CNmainPic"></div>
                <div class="CNmainDetail">
                    <!-- M1顶部结构 -->
                    <div class="CNmainDetailTop">
                        <div class="CNmainDetailBottomLeftNav">
                            <!-- M1顶部导航左 -->
                            <div class="CNmainDetailBottomLeftNavLeft">
                                <div class="CNmainDetailBottomLeftNavLeftDetail">
                                    <span>新闻资讯</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>文旅新闻</span>
                                </div>
                            </div>
                            <div class="CNmainDetailBottomLeftNavRight">
                                <!-- M1顶部导航右 -->
                                <div class="CNmainDetailBottomLeftNavRightDetail">
                                    <span class="XWredspan">文旅新闻</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="XWspan">开发新闻</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CNmainDetailBottom">
                        <!-- M1底部结构左 -->
                        <div class="CNmainDetailBottomLeft">
                             <div class="CNmainDetailBottomLeftContent1">
                                 <div class="CNmainDetailBottomLeftContent1Left">
                                     <div class="CNmainDetailBottomLeftContent1LeftLeft">
                                        <h1 class="CNDateH2">11.14</h1>
                                        <p class="CNDateP">2020</p>
                                     </div>
                                     <div class="CNmainDetailBottomLeftContent1LeftRight">
                                        <br/>
                                        <br/>
                                        <br/>
                                        <h4 class="CNH2">桦正文旅携手山艺微摄影社团团建来了</h4>
                                        <p class="CNP">桦正文旅带着山东艺术学院微摄影社团的成员们出来团建啦！</p>
                                        <br/>
                                        <div class="CNBtnDiv">
                                            <el-button round class="CNBtn" @click="goCND1()">查看更多</el-button>
                                        </div>
                                     </div>
                                 </div>
                                 <div class="CNmainDetailBottomLeftContent1Right"></div>
                             </div>
                             <div class="CNmainDetailBottomLeftContent2">
                                 <div class="CNmainDetailBottomLeftContent2Left">
                                     <div class="CNmainDetailBottomLeftContent2LeftLeft">
                                        <!-- <div class="CNDateSpace"></div>   -->
                                        <h1 class="CNDateH2">11.07</h1>
                                        <!-- <div class="CNDateSpace"></div> -->
                                        <p class="CNDateP">2020</p>
                                     </div>
                                     <div class="CNmainDetailBottomLeftContent2LeftRight">
                                        <br/>
                                        <br/>
                                        <br/>
                                        <h4 class="CNH2">桦正文旅携手中医药大学举办棋王争霸赛</h4>
                                        <p class="CNP">由桦正文旅公司赞助举办的棋王争霸赛圆满结束</p>
                                        <br/>
                                        <div class="CNBtnDiv">
                                            <el-button round class="CNBtn" @click="goCND2()">查看更多</el-button>
                                        </div>
                                     </div>
                                 </div>
                                 <div class="CNmainDetailBottomLeftContent2Right"></div>
                             </div>
                             <div class="CNmainDetailBottomLeftContent3">
                                 <div class="CNmainDetailBottomLeftContent3Left">
                                     <div class="CNmainDetailBottomLeftContent3LeftLeft">
                                        <h1 class="CNDateH2">9.29</h1>
                                        <p class="CNDateP">2020</p>
                                     </div>
                                     <div class="CNmainDetailBottomLeftContent3LeftRight">
                                        <br/>
                                        <br/>
                                        <br/>
                                        <h4 class="CNH2">这个十一，让桦正文旅告诉你去哪儿玩</h4>
                                        <p class="CNP">十一来了，桦正文旅告诉你去哪儿玩儿，带你认识济南</p>
                                        <br/>
                                        <div class="CNBtnDiv">
                                            <el-button round class="CNBtn" @click="goCND3()">查看更多</el-button>
                                        </div>
                                     </div>
                                 </div>
                                 <div class="CNmainDetailBottomLeftContent3Right"></div>
                             </div>
                        </div>
                        <!-- M1底部结构右 -->
                        <div class="CNmainDetailBottomRight">
                             <div class="CNmainDetailBottomRightCtn">
                                <div class="CN1img4">
                                    <div class="CN1img4word">
                                    <p class="CN1img4p1">桦正新闻</p>
                                    <p class="CN1img4p2">记录桦正每一刻</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部容器 -->
            <div class="CNfooter">
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
      SH<=900?SH = '900': SH =screen.height;
      this.$refs.RCN.style.height = `${SH}px` ;
      this.$refs.RCN.style.width = `${SW}px` ;
    },
    methods:{
        goCND1(){
            this.$router.push('/CompanyNewsDetail1');
        },
        goCND2(){
            this.$router.push('/CompanyNewsDetail2');
        },
        goCND3(){
            this.$router.push('/CompanyNewsDetail3');
        },
    }
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
.CNcontainer{
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}

/* 主体样式 */
.CNmain{
    height: 97%;
}
/* 主体头部图片 */
.CNmainPic{
    height: 20%;
    background-image: url("../assets/topimg.png");
    background-size: 100%;
    background-position-y: 86%;
}
/* 主体内容样式 */
.CNmainDetail{
    margin: 0 5%;
    height: 80%;
}
.CNmainDetailTop{
    height: 9%;
     border-bottom:1px solid #DCDFE6;
}
.CNmainDetailBottom{
    height: 90%;
}
.CNmainDetailBottomLeft{
    float: left;
    width: 69%;
    height: 100%;
    padding-right: 5px;
    border-right:1px solid #DCDFE6;
}
.CNmainDetailBottomLeftContent1,
.CNmainDetailBottomLeftContent2,
.CNmainDetailBottomLeftContent3{
    height: 27%;
    padding-bottom: 1%;
    border-bottom:1px solid #DCDFE6;
}
.CNmainDetailBottomLeftContent1Left,
.CNmainDetailBottomLeftContent2Left,
.CNmainDetailBottomLeftContent3Left{
    width: 70%;
    height: 100%;
    float: left;
}
.CNmainDetailBottomLeftContent1LeftLeft,
.CNmainDetailBottomLeftContent2LeftLeft,
.CNmainDetailBottomLeftContent3LeftLeft
{
    float: left;
    width: 25%;
    height: 43%;
    margin: 8% 0;
    border-radius: 5%;
    border:1px solid #029e90;
}
.CNmainDetailBottomLeftContent1LeftRight,
.CNmainDetailBottomLeftContent2LeftRight,
.CNmainDetailBottomLeftContent3LeftRight
{
    float: left;
    width: 70%;
    height: 100%;
}
.CNBtnDiv{
    float: right;
    padding-right: 6%;
    height: 23%;
    width: 25%;
}
.CNBtn{
    height: 100%;
    width: 100%;
    color: #029E9D;
}
.CNmainDetailBottomLeftContent1Right,
.CNmainDetailBottomLeftContent2Right,
.CNmainDetailBottomLeftContent3Right{
    width: 30%;
    height: 100%;
    float: left;
    border-radius: 5%;
}
.CNmainDetailBottomLeftContent1Right{
    background-image: url("../assets/CNlist1.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.CNmainDetailBottomLeftContent2Right{
    background-image: url("../assets/CNlist2.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.CNmainDetailBottomLeftContent3Right{
    background-image: url("../assets/CNlist3.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.CNH1{
    text-indent: 1em;
}
.CNH2{
    text-indent: 3em;
}
.CNP{
    text-indent: 5em;
    font-size: 0.8em;
}
.CNmainDetailBottomRight{
    float: left;
    width: 30%;
    height: 100%;
}
.CNmainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CNmainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CNmainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CNmainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CNmainDetailBottomLeftNavRightDetail{
    float: right;
    height: 100%;
    padding-top: 2%;
}
.CNmainDetailBottomRightCtn{
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
.CN1img4{
    background-image: url("../assets/newsRimg.png");
    background-position: center;
    background-position-y: 0%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-color: black; */
    height: 70%;
    width: 95%;
}
.CN1img4word{
    padding: 80% 0; 
}
.CN1img4p1{
    text-align: center;
    font-size: 2.5em;
    color: #ffffff;
}
.CN1img4p2{
    text-align: center;
    color: #ffffff;
    font-size: 2em;
}
.CNDateH2,
.CNDateP{
    padding: 1.5%;
    text-align: center;
    color: #029e90;
}
.CNDateSpace{
    height: 6%;
    background-color: red;
    width: 100%;
}
/* 底部样式 */
.CNfooter{
    height: 3%;
}

/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 0.5s linear;
}
</style>