<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CND1container" ref="RCND1">
            <!-- 主要区域容器 -->
            <div class="CND1main">
                <div class="CND1mainPic"></div>
                <div class="CND1mainDetail">
                    <!-- M1顶部结构 -->
                    <div class="CND1mainDetailTop">
                        <div class="CND1mainDetailBottomLeftNav">
                            <!-- M1顶部导航左 -->
                            <div class="CND1mainDetailBottomLeftNavLeft">
                                <div class="CND1mainDetailBottomLeftNavLeftDetail">
                                    <span>新闻资讯</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>文旅新闻</span>
                                </div>
                            </div>
                            <div class="CND1mainDetailBottomLeftNavRight">
                                <!-- M1顶部导航右 -->
                                <div class="CND1mainDetailBottomLeftNavRightDetail">
                                    <span class="XWredspan">文旅新闻</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="XWspan">开发新闻</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CND1mainDetailBottom">
                        <!-- M1底部结构左 -->
                        <div class="CND1mainDetailBottomLeft">
                            <div class="CND1mainDetailBottomLeftContainer">
                                <br/>
                                <br/>
                                <h1 class="CND1H2">桦正文旅携手山艺微摄影社团团建来了</h1>
                                <br/>
                                <p class="CND1Ptitle">2020.11.14</p>
                                <br/>
                                <p class="CND1Pcontent">桦正文旅带着山东艺术学院微摄影社团的成员们出来团建啦！</p>
                                <p class="CND1Pcontent">11月14日，早上九点，大家带着各自的相机上了大巴车，脸上是掩饰不住的兴奋和跃跃欲试，看的出来大家对这次的团建抱有非常大的期待呢。</p>
                                <p class="CND1Pcontent">为了促进社员之间的友好交流，拓宽大家的交流面，鼓舞更多的孩子爱上摄影，我们特地带他们来到了充满人文艺术气息的山东省博物馆和美术馆，让他们能够在拍摄的过程中了解更多历史人文。</p>
                                <div class="D1img1"></div>
                                <div class="D1img2"></div>
                                <div class="D1img3"></div>
                                <div class="D1img4"></div>
                                <div class="D1img5"></div>
                                <div class="D1img6"></div>
                                <br/>
                                <br/>
                                <p class="CND1Pcontent">到了目的地之后，下了大巴车，大家兴致高昂的组好队来到博物馆门前的阶梯上开始合影，每个人的脸上都洋溢着开心的笑容，被他们的快乐感染，连照片都变得有温度了起来。</p>
                                <br/>
                                <div class="D1img7"></div>
                                <div class="D1img8"></div>
                                <p class="CND1Pcontent">合照结束之后，大家进入了博物馆，四散开来拿着相机开始拍摄，留下了很多精美的照片~
                                <br/>
                                <br/>
在博物馆和美术馆拍的差不多了之后，大家便走向了旁边的万象城解决午饭，万象城也是这边地标性的建筑，里面除了有各种美食之外还有很多值得拍照打卡的地方，例如line主题馆，泡泡玛特等等，大家玩玩闹闹地拍了一天，在傍晚意犹未尽地结束了这次行程。
  这次地团建促进了我们公司和学生之间的关系，加强了我们与他们的联系，让我们看到一个朝气蓬勃的社团正在冉冉升起，期待我们的下次团建！</p>
                                <br/>
                                <div class="D1img9"></div>
                            
                            </div>
                        </div>
                        <!-- M1底部结构右 -->
                        <div class="CND1mainDetailBottomRight">
                            <div class="CND1mainDetailBottomRightCtn">
                                <div class="CND1img4">
                                    <div class="CND1img4word">
                                    <p class="CND1img4p1">桦正新闻</p>
                                    <p class="CND1img4p2">记录桦正每一刻</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部容器 -->
            <div class="CND1footer">
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
      this.$refs.RCND1.style.height = `${SH}px` ;
      this.$refs.RCND1.style.width = `${SW}px` ;
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
.CND1container{
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
}

/* 主体样式 */
.CND1main{
    /* 高度改变这个要改 */
    height: 99.3%;
}
/* 主体头部图片 */
.CND1mainPic{
    /* 高度改变这个要改 */
    height: 5.04%;
    background-image: url("../assets/topimg.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: 86%;
}

/* 主体内容样式 */
.CND1mainDetail{
    margin: 0 5%;
    height: 92%;
}
.CND1mainDetailTop{
    /* 高度改变这个要改 */
    height: 1.93%;
    border-bottom:1px solid #DCDFE6;
}
.CND1mainDetailBottom{
    height: 100%;
}
.CND1mainDetailBottomLeft{
    float: left;
    width: 69%;
    height: 100%;
    padding-right: 5px;
    border-right:1px solid #DCDFE6;
}
.CND1mainDetailBottomLeftContainer{
    height: 100%;
    width: 100%;
}
.CND1mainDetailBottomRight{
    float: left;
    width: 30%;
    height: 100%;
}
.CND1mainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CND1mainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CND1mainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CND1mainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CND1mainDetailBottomLeftNavRightDetail{
    float: right;
    height: 100%;
    padding-top: 2%;
}
.CND1mainDetailBottomRightCtn{
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
.CND1img4{
    background-image: url("../assets/newsRimg.png");
    background-position: center;
    background-position-y: 0%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-color: black; */
    height: 13.75%;
    width: 95%;
}
.CND1img4word{
    padding: 80% 0; 
}
.CND1img4p1{
    text-align: center;
    font-size: 2.5em;
    color: #ffffff;
}
.CND1img4p2{
    text-align: center;
    color: #ffffff;
    font-size: 2em;
}
.CND1H2{
    text-align: center;
}
.CND1Ptitle{
    text-align: center;
}
.CND1Pcontent{
    text-indent: 2em;
    font-size: 1em;
}
.D1img1,.D1img2,.D1img3,.D1img4,
.D1img5,.D1img6,.D1img7,.D1img8,
.D1img9{
    height: 290px;
    width: 490px;
    margin: 5px auto;
}
.D1img1{
    background-image: url("../assets/d1img1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D1img2{
    background-image: url("../assets/d1img2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D1img3{
    background-image: url("../assets/d1img3.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D1img4{
    background-image: url("../assets/d1img4.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D1img5{
    background-image: url("../assets/d1img5.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D1img6{
    background-image: url("../assets/d1img6.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D1img7{
    background-image: url("../assets/d1img7.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D1img8{
    background-image: url("../assets/d1img8.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.D1img9{
    background-image: url("../assets/d1img9.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
/* 底部样式 */
.CND1footer{
    height: 3%;
}

/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}
</style>