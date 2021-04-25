<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CRcontainer" ref="RCR">
            <!-- 主要区域容器 -->
            <div class="CRmain">
                <div class="CRmainPic"></div>
                <div class="CRmainDetail">
                    <!-- M1顶部结构 -->
                    <div class="CRmainDetailTop">
                        <div class="CRmainDetailBottomLeftNav">
                            <!-- M1顶部导航左 -->
                            <div class="CRmainDetailBottomLeftNavLeft">
                                <div class="CRmainDetailBottomLeftNavLeftDetail">
                                    <span>联系我们</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>人才招聘</span>
                                </div>
                            </div>
                            <div class="CRmainDetailBottomLeftNavRight">
                                <!-- M1顶部导航右 -->
                                <div class="CRmainDetailBottomLeftNavRightDetail">
                                    <span class="LXspan">联系方式</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="LXredspan">人才招聘</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CRmainDetailBottom">
                        <!-- M1底部结构左 -->
                        <div class="CRmainDetailBottomLeft">
                            <div class="CRmainDetailBottomLeftTop">
                                <h2 class="CRH2">人才招聘</h2>
                            </div>
                            <br/>
                            <br/>
                            <div class="CAmainDetailBottomLeftBottom">
                                <p class="CRP">桦正文旅有限公司人才理念：诚信为先 简单务实 专业为本 追求卓越</p>
                                <br/>
                                <p class="CRP">HR邮箱：huazhengwenlv@163.com</p>
                                <br/>
                                <p class="CRP">地址：山东省济南市长清区大学科技园紫薇路2687号</p>
                                <p class="CRP">西部创新园C座505-1</p>
                                <br/>
                                <p class="CRP">公司电话：0531-87222085</p>
                                <br/>
                                <p class="CRP">欢迎您的加入</p>
                                <br/>
                            </div>
                        </div>
                        <!-- M1底部结构右 -->
                        <div class="CRmainDetailBottomRight">
                            <div class="CRmainDetailBottomRightCtn">
                                <div class="CRimg">
                                    <div class="CRimgword">
                                    <p class="CRimgp1">加入我们</p>
                                    <p class="CRimgp2">桦正文旅在等您</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部容器 -->
            <div class="CRfooter">
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
      this.$refs.RCR.style.height = `${SH}px` ;
      this.$refs.RCR.style.width = `${SW}px` ;
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
.CRcontainer{
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}

/* 主体样式 */
.CRmain{
    height: 97%;
}
/* 主体头部图片 */
.CRmainPic{
    height: 20%;
    background-image: url("../assets/topimg.png");
    background-size: 100%;
    background-position-y: 86%;
}

/* 主体内容样式 */
.CRmainDetail{
    margin: 0 5%;
    height: 80%;
}
.CRmainDetailTop{
    height: 9%;
    border-bottom:1px solid #DCDFE6;
}
.CRmainDetailBottom{
    height: 90%;
}
.CRmainDetailBottomLeft{
    float: left;
    width: 69%;
    height: 100%;
    padding-right: 5px;
    border-right:1px solid #DCDFE6;
}
.CRmainDetailBottomLeftTop{
    height: 20%;
}

.CRmainDetailBottomRight{
    float: left;
    width: 30%;
    height: 100%;
}
.CRmainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CRmainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CRmainDetailBottomRightCtn{
    width: 90%;
    height: 90%;
    margin: 5% auto;
}
.CRmainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CRmainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CRmainDetailBottomLeftNavRightDetail{
    float: right;
    height: 100%;
    padding-top: 2%;
}
.LXspan{
    color: #8E8B81;
}
.LXredspan{
    color: #029E9D;
}
.CRimg{
    background-image: url("../assets/titlelogo.png");
    background-position: center;
    background-position-y: 20%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
}
.CRimgword{
    padding: 90% 0; 
}
.CRimgp1{
    text-align: center;
    font-size: 2.5em;
    color: #029e90;
}
.CRimgp2{
    text-align: center;
    font-size: 2em;
    color: #029e90;
}
.CRH2{
    text-indent: 2em;
    line-height: 5em;
    font-size: 2em;
}
.CRP{
    text-indent: 5em;
    font-size: 1.2em;
}

/* 底部样式 */
.CRfooter{
    height: 3%;
}

/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}

</style>