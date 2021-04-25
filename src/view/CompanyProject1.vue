<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CP1container" ref="RCP1">
            <!-- 主要区域容器 -->
            <div class="CP1main">
                <div class="CP1mainPic"></div>
                <div class="CP1mainDetail">
                    <!-- M1顶部结构 -->
                    <div class="CP1mainDetailTop">
                        <div class="CP1mainDetailBottomLeftNav">
                            <!-- M1顶部导航左 -->
                            <div class="CP1mainDetailBottomLeftNavLeft">
                                <div class="CP1mainDetailBottomLeftNavLeftDetail">
                                    <span>项目介绍</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>休闲农庄项目</span>
                                </div>
                            </div>
                            <div class="CP1mainDetailBottomLeftNavRight">
                                <!-- M1顶部导航右 -->
                                <div class="CP1mainDetailBottomLeftNavRightDetail">
                                    <span class="XMredspan">休闲农庄项目</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="XMspan">榕江县扶贫项目</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CP1mainDetailBottom">
                        <!-- M1底部结构左 -->
                        <div class="CP1mainDetailBottomLeft">
                            <div class="CP1mainDetailBottomLeftContainer">
                                <br/>
                                <br/>
                                <h2 class="XM1H2">休闲农庄项目</h2>
                                <br/>
                                <h5 class="XM1H2">[休闲农庄项目概述]</h5>
                                <p class="XM1TTP">休闲农庄概念</p>
                                <p class="XM1P">休闲农庄是乡村旅游的一种类型。所谓休闲农庄是以农民为经营主体，乡村民俗文化为灵魂，城市居民为目标的一种新型休闲旅游形式。</p>
                                <br/>
                                <div class="XM1img1"></div>
                                <br/>
                                <p class="XM1TTP">国家政策</p>
                                <p class="XM1P">亟需采取措施加大建设力度，加强对基本农田的保护，改变现有不合理的耕作方式，发展生态农业，减少化肥和农药的使用，并控制和防治农业环境污染，保护农业生物多样性，生产绿色食品。这样才能保证休闲农庄的可持续发展。</p>
                                <br/>
                                <div class="XM1img2"></div>
                                <br/>
                                <p class="XM1TTP">立体农业介绍</p>
                                <p class="XM1P">立体农业：又称层状农业，就是利用光、热、水、肥、气等资源，同时利用各种农作物在生育过程中的时间差和空间差，在地面地下、水面水下、空中以及前方后方同时或较互进行生产，通过合理组装，粗细配套，组成各种类型的多功能、多层次、多途径的高产优质生产系统，来获得最大经济效益。</p>
                                <br/>
                                <div class="XM1img3"></div>
                                <br/>
                            </div>
                        </div>
                        <!-- M1底部结构右 -->
                        <div class="CP1mainDetailBottomRight">
                            <div class="CP1mainDetailBottomRightCtn">
                                <div class="XM1img4">
                                    <div class="XM1img4word">
                                    <p class="XM1img4p1">项目介绍</p>
                                    <p class="XM1img4p2">文旅新概念</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部容器 -->
            <div class="CP1footer">
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
      SH<=900?SH = '1700': SH = 1.89*screen.height;
      this.$refs.RCP1.style.height = `${SH}px`;
      this.$refs.RCP1.style.width = `${SW}px`;
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
.CP1container{
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
}

/* 主体样式 */
.CP1main{
    height: 98.5%;
}
/* 主体头部图片 */
.CP1mainPic{
    height: 10.5%;
    background-image: url("../assets/topimg.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: 86%;
}

/* 主体内容样式 */
.CP1mainDetail{
    margin: 0 5%;
    height: 80%;
}
.CP1mainDetailTop{
    height: 5%;
    border-bottom:1px solid #DCDFE6;
}
.CP1mainDetailBottom{
    height: 100%;
}
.CP1mainDetailBottomLeft{
    float: left;
    width: 69%;
    height: 100%;
    padding-right: 5px;
    border-right:1px solid #DCDFE6;
    /* overflow: scroll; */
}
.CP1mainDetailBottomLeftContainer{
    height: 100%;
    width: 100%;
}
.CP1mainDetailBottomRight{
    float: left;
    width: 30%;
    height: 100%;
}
.CP1mainDetailBottomRightCtn{
    width: 90%;
    height: 100%;
    margin: 5% auto;
}
.CP1mainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CP1mainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CP1mainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CP1mainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CP1mainDetailBottomLeftNavRightDetail{
    float: right;
    height: 100%;
    padding-top: 2%;
}
.XMspan{
    color: #8E8B81;
}
.XMredspan{
    color: #029E9D;
}
.XM1H2{
    text-align: center;
}
.XM1TTP{
    font-weight: normal;
    font-size: 1.1em;
}
.XM1P{
    text-indent: 1.6em;
    font-size: 0.8em;
}
.XM1img1,.XM1img2,.XM1img3{
    height: 20%;
    width: 50%;
    margin: 0 auto;
}
.XM1img1{
    background-image: url("../assets/proj1img1.png");
    background-repeat: no-repeat;
}
.XM1img2{
    background-image: url("../assets/proj1img2.png");
    background-repeat: no-repeat;
}
.XM1img3{
    background-image: url("../assets/proj1img3.png");
    background-repeat: no-repeat;
}
.XM1img4{
    background-image: url("../assets/projRimg.png");
    background-position: center;
    background-position-y: 0%;
    background-repeat: no-repeat;
    background-size: 100% 50%; 
    /* background-color: black; */
    height: 68%;
    width: 95%;
}
.XM1img4word{
    padding: 10% 0; 
}
.XM1img4p1{
    text-align: center;
    font-size: 2.5em;
    color: #000000;
}
.XM1img4p2{
    text-align: center;
    color: #000000;
    font-size: 2em;
}

/* 底部样式 */
.CP1footer{
    height: 3%;
}

/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}


</style>