<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CKFD3container" ref="RCKFD3">
            <!-- 主要区域容器 -->
            <div class="CKFD3main">
                <div class="CKFD3mainPic"></div>
                <div class="CKFD3mainDetail">
                    <!-- M1顶部结构 -->
                    <div class="CKFD3mainDetailTop">
                        <div class="CKFD3mainDetailBottomLeftNav">
                            <!-- M1顶部导航左 -->
                            <div class="CKFD3mainDetailBottomLeftNavLeft">
                                <div class="CKFD3mainDetailBottomLeftNavLeftDetail">
                                    <span>新闻资讯</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>文旅新闻</span>
                                </div>
                            </div>
                            <div class="CKFD3mainDetailBottomLeftNavRight">
                                <!-- M1顶部导航右 -->
                                <div class="CKFD3mainDetailBottomLeftNavRightDetail">
                                    <span class="XWredspan">文旅新闻</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="XWspan">开发新闻</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CKFD3mainDetailBottom">
                        <!-- M1底部结构左 -->
                        <div class="CKFD3mainDetailBottomLeft">
                            <div class="CKFD3mainDetailBottomLeftContainer">
                                <br/>
                                <br/>
                                <h1 class="CKFD3H2">新闻标题3</h1>
                                <br/>
                                <p class="CKFD3Ptitle">xxxx.xx.xx</p>
                                <br/>
                                <p class="CKFD3Pcontent">内容</p>
                            </div>
                        </div>
                        <!-- M1底部结构右 -->
                        <div class="CKFD3mainDetailBottomRight">
                            <div class="CKFD3mainDetailBottomRightCtn">
                                <div class="CKFD3img4">
                                    <div class="CKFD3img4word">
                                    <p class="CKFD3img4p1">桦正新闻</p>
                                    <p class="CKFD3img4p2">记录桦正每一刻</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部容器 -->
            <div class="CKFD3footer">
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
      this.$refs.RCKFD3.style.height = `${SH}px` ;
      this.$refs.RCKFD3.style.width = `${SW}px` ;
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
.CKFD3container{
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}
/* 主体样式 */
.CKFD3main{
    height: 97%;
}
/* 主体头部图片 */
.CKFD3mainPic{
    height: 20%;
    background-image: url("../assets/topimg.png");
    background-size: 100%;
    background-position-y: 86%;
}
/* 主体内容样式 */
.CKFD3mainDetail{
    margin: 0 5%;
    height: 80%;
}
.CKFD3mainDetailTop{
    height: 9%;
     border-bottom:1px solid #DCDFE6;
}
.CKFD3mainDetailBottom{
    height: 90%;
}
.CKFD3mainDetailBottomLeft{
    float: left;
    width: 69%;
    height: 100%;
    padding-right: 5px;
    border-right:1px solid #DCDFE6;
}
.CKFD3mainDetailBottomLeftContainer{
    height: 100%;
    width: 100%;
}
.CKFD3mainDetailBottomRight{
    float: left;
    width: 30%;
    height: 100%;
}
.CKFD3mainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CKFD3mainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CKFD3mainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CKFD3mainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CKFD3mainDetailBottomLeftNavRightDetail{
    float: right;
    height: 100%;
    padding-top: 2%;
}
.CKFD3mainDetailBottomRightCtn{
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
.CKFD3img4{
    background-image: url("../assets/newsRimg.png");
    background-position: center;
    background-position-y: 0%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-color: black; */
    height: 70%;
    width: 95%;
}
.CKFD3img4word{
    padding: 80% 0; 
}
.CKFD3img4p1{
    text-align: center;
    font-size: 2.5em;
    color: #ffffff;
}
.CKFD3img4p2{
    text-align: center;
    color: #ffffff;
    font-size: 2em;
}
.CKFD3H2{
    text-align: center;
}
.CKFD3Ptitle{
    text-align: center;
}
.CKFD3Pcontent{
    text-indent: 2em;
    font-size: 1em;
}
/* 底部样式 */
.CKFD3footer{
    height: 3%;
}


/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}
</style>