<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CDcontainer" ref="RCD">
            <!-- 主要区域容器 -->
            <div class="CDmain">
                <div class="CDmainPic"></div>
                <div class="CDmainDetail">
                    <div class="CDmainDetailTop">
                        <div class="CDmainDetailBottomLeftNav">
                            <div class="CDmainDetailBottomLeftNavLeft">
                                <div class="CDmainDetailBottomLeftNavLeftDetail">
                                    <span>公司概况</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>公司简介</span>
                                </div>
                            </div>
                            <div class="CDmainDetailBottomLeftNavRight">
                                <div class="CDmainDetailBottomLeftNavRightDetail">
                                    <span class="JJredspan">公司简介</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="JJspan">组织架构</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="JJspan">企业文化</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CDmainDetailBottom">
                        <div class="CDmainDetailBottomLeft">
                            <br/>
                            <br/>
                            <h2><i class="el-icon-s-home"></i>桦正文旅有限公司简介</h2>
                            <p class="JJP">山东桦正文旅有限公司成立于2020年06月24日，注册地位于山东省济南市长清区大学科技园紫薇路2687号西部创新园C座505室-1，法定代表人为王长鹏。
                                经营范围包括一般项目：园区管理服务；休闲观光活动；游览景区管理；会议及展览服务；旅行社服务网点旅游招徕、咨询服务；旅客票务代理；体验式拓展活动及策划；城市公园管理；文化用品设备出租；数字文化创意技术装备销售；数字文化创意内容应用服务；文化场馆管理服务；文化娱乐经纪人服务；其他文化艺术经纪代理；组织文化艺术交流活动；游艺及娱乐用品销售；游艺用品及室内游艺器材销售；普通露天游乐场所游乐设备销售；文具用品零售；工艺美术品及收藏品零售（象牙及其制品除外）；软件开发；社会经济咨询服务；礼仪服务；文艺创作（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）许可项目：旅游业务；住宿服务；道路旅客运输经营；演出经纪（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）</p>
                            <br/>
                            <br/>
                            <h2><i class="el-icon-s-home"></i>企业使命</h2>
                            <p class="JJP">通过资源整合和模式创新，为有价值追求的客户提供品味独特、内涵丰富的文化旅游空间及体验;为股东提供有包容性的增长，有竞争力的回报;实现战略合作伙伴和员工的不断成长;持续回馈社会。</p>
                        </div>
                        <div class="CDmainDetailBottomRight">
                            <div class="CDmainDetailBottomRightDetail1">
                                <br/>
                                <h4 class="JYH4"><i class="el-icon-s-flag"></i>企业愿景</h4>
                                <p class="JYP1">桦正文旅有限公司立志于成为中国领先的文化</p>
                                    <p class="JYP2">旅游项目运作有限公司</p>
                            </div>
                            <div class="CDmainDetailBottomRightDetail2">
                                <br/>
                                <h4 class="JYH4"><i class="el-icon-s-flag"></i>企业使命</h4>
                                <p class="SMP1">通过资源整合和模式创新，为有价值追求的客</p>
                                <p class="SMP2">户提供品味独特、内涵丰富的文化旅游空间及体验;</p>
                                <p class="SMP3">为股东提供有包容性的增长，有竞争力的回报;实现</p>
                                <p class="SMP4">战略合作伙伴和员工的不断成长;持续回馈社会。</p>
                            </div>
                            <div class="CDmainDetailBottomRightDetail3">
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
      this.$refs.RCD.style.height = `${SH}px` ;
      this.$refs.RCD.style.width = `${SW}px` ;
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
.CDcontainer{
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}

/* 主体1样式 */
.CDmain{
    /* 世纪难题已解决  +10%来解决overflow问题 */
    height: 97%;
}
.CDmainPic{
    height: 20%;
    background-image: url("../assets/topimg.png");
    background-size: 100%;
    background-position-y: 86%;
}
.CDmainDetail{
    margin: 0 5%;
    height: 80%;
}
.CDmainDetailTop{
    height: 9%;
    border-bottom:1px solid #DCDFE6;
}
.CDmainDetailBottom{
    height: 90%;
}
.CDmainDetailBottomLeft{
    float: left;
    width: 69%;
    height: 100%;
    padding-right: 5px;
    border-right:1px solid #DCDFE6;
}
.CDmainDetailBottomRight{
    float: left;
    width: 30%;
    height: 100%;
}
.CDmainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CDmainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CDmainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CDmainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CDmainDetailBottomLeftNavRightDetail{
    float: right;
    height: 100%;
    padding-top: 2%;
}
.CDmainDetailBottomRightDetail1{
    height: 20%;
    width: 100%;
    margin:  2% 2%;
    border-bottom: 2px solid #DCDFE6;
}
.CDmainDetailBottomRightDetail2{
    height: 35%;
    width: 100%;
    margin:  2% 2%;
    border-bottom: 2px solid #DCDFE6;
}
.CDmainDetailBottomRightDetail3{
    height: 45%;
    width: 100%;
    margin:  2% 2%;
    border-bottom: 2px solid #DCDFE6;
}
.CDdivider{
    background-color: black;
}
.JJspan{
    color: #8E8B81;
}
.JJredspan{
    color: #029E9D;
}
.JYH4{
    text-indent: 2em;
}
.JYP1,.SMP1,.PPP1,.PPP2,.PPP3{
    text-indent: 4em;
    color: #343434;
}
.JJP,.JYP2,.SMP2,.SMP3,.SMP4{
    text-indent: 2em;
    color: #343434;
}

/* 底部样式 */
.CDfooter{
    height: 3%;
}

/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}
</style>