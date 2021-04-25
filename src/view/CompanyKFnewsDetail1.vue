<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CKFD1container" ref="RCKFD1">
            <!-- 主要区域容器 -->
            <div class="CKFD1main">
                <div class="CKFD1mainPic"></div>
                <div class="CKFD1mainDetail">
                    <!-- M1顶部结构 -->
                    <div class="CKFD1mainDetailTop">
                        <div class="CKFD1mainDetailBottomLeftNav">
                            <!-- M1顶部导航左 -->
                            <div class="CKFD1mainDetailBottomLeftNavLeft">
                                <div class="CKFD1mainDetailBottomLeftNavLeftDetail">
                                    <span>新闻资讯</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>文旅新闻</span>
                                </div>
                            </div>
                            <div class="CKFD1mainDetailBottomLeftNavRight">
                                <!-- M1顶部导航右 -->
                                <div class="CKFD1mainDetailBottomLeftNavRightDetail">
                                    <span class="XWredspan">文旅新闻</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="XWspan">开发新闻</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CKFD1mainDetailBottom">
                        <!-- M1底部结构左 -->
                        <div class="CKFD1mainDetailBottomLeft">
                            <div class="CKFD1mainDetailBottomLeftContainer">
                                <br/>
                                <br/>
                                <h1 class="CKFD1H2">新闻标题1</h1>
                                <br/>
                                <p class="CKFD1Ptitle">xxxx.xx.xx</p>
                                <br/>
                                <p class="CKFD1Pcontent">内容</p>
                            </div>
                        </div>
                        <!-- M1底部结构右 -->
                        <div class="CKFD1mainDetailBottomRight">
                            <div class="CKFD1mainDetailBottomRightCtn">
                                <div class="CKFD1img4">
                                    <div class="CKFD1img4word">
                                    <p class="CKFD1img4p1">桦正新闻</p>
                                    <p class="CKFD1img4p2">记录桦正每一刻</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部容器 -->
            <div class="CKFD1footer">
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
      this.$refs.RCKFD1.style.height = `${SH}px` ;
      this.$refs.RCKFD1.style.width = `${SW}px` ;
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
.CKFD1container{
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}

/* 主体样式 */
.CKFD1main{
    height: 97%;
}
/* 主体头部图片 */
.CKFD1mainPic{
    height: 20%;
    background-image: url("../assets/topimg.png");
    background-size: 100%;
    background-position-y: 86%;
}

/* 主体内容样式 */
.CKFD1mainDetail{
    margin: 0 5%;
    height: 80%;
}
.CKFD1mainDetailTop{
    height: 9%;
     border-bottom:1px solid #DCDFE6;
}
.CKFD1mainDetailBottom{
    height: 90%;
}
.CKFD1mainDetailBottomLeft{
    float: left;
    width: 69%;
    height: 100%;
    padding-right: 5px;
    border-right:1px solid #DCDFE6;
}
.CKFD1mainDetailBottomLeftContainer{
    height: 100%;
    width: 100%;
}
.CKFD1mainDetailBottomRight{
    float: left;
    width: 30%;
    height: 100%;
}
.CKFD1mainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CKFD1mainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CKFD1mainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CKFD1mainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CKFD1mainDetailBottomLeftNavRightDetail{
    float: right;
    height: 100%;
    padding-top: 2%;
}
.CKFD1mainDetailBottomRightCtn{
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
.CKFD1img4{
    background-image: url("../assets/newsRimg.png");
    background-position: center;
    background-position-y: 0%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-color: black; */
    height: 70%;
    width: 95%;
}
.CKFD1img4word{
    padding: 80% 0; 
}
.CKFD1img4p1{
    text-align: center;
    font-size: 2.5em;
    color: #ffffff;
}
.CKFD1img4p2{
    text-align: center;
    color: #ffffff;
    font-size: 2em;
}
.CKFD1H2{
    text-align: center;
}
.CKFD1Ptitle{
    text-align: center;
}
.CKFD1Pcontent{
    text-indent: 2em;
    font-size: 1em;
}
/* 底部样式 */
.CKFD1footer{
    height: 3%;
}

/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}
</style>