<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CScontainer" ref="RCS">
            <!-- 主要区域容器 -->
            <div class="CSmain">
                <div class="CSmainPic"></div>
                <div class="CSmainDetail">
                    <!-- M1顶部结构 -->
                    <div class="CSmainDetailTop">
                        <div class="CSmainDetailBottomLeftNav">
                            <!-- M1顶部导航左 -->
                            <div class="CSmainDetailBottomLeftNavLeft">
                                <div class="CSmainDetailBottomLeftNavLeftDetail">
                                    <span>公司概况</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>组织架构</span>
                                </div>
                            </div>
                            <div class="CSmainDetailBottomLeftNavRight">
                                <!-- M1顶部导航右 -->
                                <div class="CSmainDetailBottomLeftNavRightDetail">
                                    <span class="JGspan">公司简介</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="JGredspan">组织架构</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="JGspan">企业文化</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CSmainDetailBottom">
                        <!-- M1底部结构左 -->
                        <div class="CSmainDetailBottomLeft"></div>
                        <!-- M1底部结构右 -->
                        <div class="CSmainDetailBottomRight">
                            <div class="CSmainDetailBottomRightDetail1">
                                <br/>
                                <h4 class="JYH4"><i class="el-icon-s-flag"></i>企业愿景</h4>
                                <p class="JYP1">桦正文旅有限公司立志于成为中国领先的文化</p>
                                    <p class="JYP2">旅游项目运作有限公司</p>
                            </div>
                            <div class="CSmainDetailBottomRightDetail2">
                                <br/>
                                <h4 class="JYH4"><i class="el-icon-s-flag"></i>企业使命</h4>
                                <p class="SMP1">通过资源整合和模式创新，为有价值追求的客</p>
                                <p class="SMP2">户提供品味独特、内涵丰富的文化旅游空间及体验;</p>
                                <p class="SMP3">为股东提供有包容性的增长，有竞争力的回报;实现</p>
                                <p class="SMP4">战略合作伙伴和员工的不断成长;持续回馈社会。</p>
                            </div>
                            <div class="CSmainDetailBottomRightDetail3">
                                <br/>
                                <h4 class="JYH4"><i class="el-icon-s-flag"></i>品牌理念</h4>
                                <p class="PPP1">品牌口号:旅居生活品味人生</p>
                                <p class="PPP2">品牌主张:创造丰富、高品质用户</p>
                                <p class="PPP3">价值品牌个性:专注、有戏、有价值</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部容器 -->
            <div class="CDfooter">
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
      this.$refs.RCS.style.height = `${SH}px` ;
      this.$refs.RCS.style.width = `${SW}px` ;
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
.CScontainer{
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}

/* 主体1样式 */
.CSmain{
    /* 10%加在这里了 */
    height: 97%;
}
.CSmainPic{
    height: 20%;
    background-image: url("../assets/topimg.png");
    background-size: 100%;
    background-position-y: 86%;
}
.CSmainDetail{
    margin: 0 5%;
    height: 80%;
}
.CSmainDetailTop{
    height: 9%;
     border-bottom:1px solid #DCDFE6;
}
.CSmainDetailBottom{
    height: 90%;
}
.CSmainDetailBottomLeft{
    float: left;
    width: 69%;
    height: 100%;
    padding-right: 5px;
    background-image: url("../assets/JGimg.png");
    background-size: 100% 100%;
    border-right:1px solid #DCDFE6;
}
.CSmainDetailBottomRight{
    float: left;
    width: 30%;
    height: 100%;
}
.CSmainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CSmainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CSmainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CSmainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CSmainDetailBottomLeftNavRightDetail{
    float: right;
    height: 100%;
    padding-top: 2%;
}
.CSmainDetailBottomRightDetail1{
    height: 20%;
    width: 100%;
    margin:  2% 2%;
    border-bottom: 2px solid #DCDFE6;
}
.CSmainDetailBottomRightDetail2{
    height: 35%;
    width: 100%;
    margin:  2% 2%;
    border-bottom: 2px solid #DCDFE6;
}
.CSmainDetailBottomRightDetail3{
    height: 45%;
    width: 100%;
    margin:  2% 2%;
    border-bottom: 2px solid #DCDFE6;
}
.JGspan{
    color: #8E8B81;
}
.JGredspan{
    color: #029E9D;
}
.JYH4{
    text-indent: 2em;
}
.JYP1,.SMP1,.PPP1,.PPP2,.PPP3{
    text-indent: 4em;
    color: #3F3F39;
}
.JJP,.JYP2,.SMP2,.SMP3,.SMP4{
    text-indent: 2em;
    color: #3F3F39;
}


/* 底部样式 */
.CSfooter{
    height: 3%;
}

/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}


</style>