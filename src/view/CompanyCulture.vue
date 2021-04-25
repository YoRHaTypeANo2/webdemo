<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CCcontainer" ref="RCC">
            <!-- 主要区域容器 -->
            <div class="CCmain">
                <div class="CCmainPic"></div>
                <div class="CCmainDetail">
                    <div class="CCmainDetailTop">
                        <div class="CCmainDetailBottomLeftNav">
                            <div class="CCmainDetailBottomLeftNavLeft">
                                <div class="CCmainDetailBottomLeftNavLeftDetail">
                                    <span>公司概况</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>企业文化</span>
                                </div>
                            </div>
                            <div class="CCmainDetailBottomLeftNavRight">
                                <div class="CCmainDetailBottomLeftNavRightDetail">
                                    <span class="WHspan" @click="cometoJJ()">公司简介</span>
                                    <el-divider direction="vertical" class="CCdivider"></el-divider>
                                    <span class="WHspan">组织架构</span>
                                    <el-divider direction="vertical" class="CCdivider"></el-divider>
                                    <span class="WHredspan">企业文化</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CCmainDetailBottom">
                        <!-- 内容左侧 -->
                        <div class="CCmainDetailBottomLeft">
                            <br/>
                            <h1 class="WH1"><i class="el-icon-s-home"></i>企业文化</h1>
                            <h3 class="WH2">企业价值理念：体现自我价值，共创美好生活</h3>
                            <p class="WHP">全体员工一致认同的价值理念是指导企业行为的最根本的原则，本质上决定着企业的成功与否，也是影响企业业绩的根源。体现自我价值，共创美好生活，是我们的价值理念，是所有企业文化理念的核心理念。
                            体现个人价值就是追求自我价值实现，它可以摧人奋进，使人向上，能使人在困境中奋起，从而成就自己的辉煌人生。追求个人价值实现可以使我们在实践中不断地学习,不断地
                            进步，不断地成长。我们的认识能力和认知水平，也可以在追求自我的过程中，不断地
                            得到提高，只要我们不断地学习，不轻言放弃，就会慢慢地从错误和失败走出来，最终看到胜利的曙光。共创美好生活:通过我们共同努力，逐渐实现基础物质目标，
                            改善个人及家庭物质生活条件，从而提高生活质量;提升自身综合素质体现自我价值，创造实现个人美好的生活。</p>
                            <br/>
                            <h3 class="WH2">经营理念：诚信，合作，共赢，发展</h3>
                            <p class="WHP">诚信是市场经济的基础;诚信是企业发展和做人的根本。诚信是企业永恒的投资,也是每一个人永恒的投资。人以诚为先，
                                信以诚为本，诚以德为源。谁拥有了诚信，就等于和微笑、掌声与胜利联姻;谁违背了诚信，就注定和苦涩、孤独与失败同行。合作是为了共同的目的一起工作或共同完成某项任务。在如今这个社会化大生产时期,
                            没有合作，许多产品根本无法生产，交易无法进行。只有通过合作，才能互通有无，实现资源共享，避免资源的浪费。
                            共赢与发展是在共同的价值理念下，共同承担风险，共同分享利益，达至共同目标，共同获得持续发展。共赢能提升企业竞争力，规范行业标准，有效配置各种社会资源，
                            它是智慧、实力、品牌和人力资源的强强联手，是企业与客户、与战略伙伴、与员工的相互依存、共同发展的支撑点。
                            然而，共赢不可能自然而然地实现，它首先要有信念、意志和品格等主观品质基础。企业在寻求自己利益的同时，也要主动考虑别人的利益，以互利、互信、互赖、合作代替独立竞争。
                            21世纪是是竞争的时代，也是合作的世代。是资源共享、渠道共享、财富共享的时代。
                            理想的商业模式是大家既竞争又合作，进行“合作性创造”，共同把蛋糕做大、做强，最终实现双赢、共赢或多赢。</p>
                        </div>
                        <div class="CCmainDetailBottomRight">
                             <div class="CCmainDetailBottomRightDetail1">
                                 <!-- 内容右侧 -->
                                <br/>
                                <h4 class="JYH4"><i class="el-icon-s-flag"></i>企业愿景</h4>
                                <p class="JYP1">桦正文旅有限公司立志于成为中国领先的文化</p>
                                    <p class="JYP2">旅游项目运作有限公司</p>
                            </div>
                            <div class="CCmainDetailBottomRightDetail2">
                                <br/>
                                <h4 class="JYH4"><i class="el-icon-s-flag"></i>企业使命</h4>
                                <p class="SMP1">通过资源整合和模式创新，为有价值追求的客</p>
                                <p class="SMP2">户提供品味独特、内涵丰富的文化旅游空间及体验;</p>
                                <p class="SMP3">为股东提供有包容性的增长，有竞争力的回报;实现</p>
                                <p class="SMP4">战略合作伙伴和员工的不断成长;持续回馈社会。</p>
                            </div>
                            <div class="CCmainDetailBottomRightDetail3">
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
            <div class="CCfooter">
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
      this.$refs.RCC.style.height = `${SH}px` ;
      this.$refs.RCC.style.width = `${SW}px` ;
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
.CCcontainer{
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}

/* 主体1样式 */
.CCmain{
    height: 97%;
}
.CCmainPic{
    height: 20%;
    background-image: url("../assets/topimg.png");
    background-size: 100%;
    background-position-y: 86%;
}
.CCmainDetail{
    margin: 0 5%;
    height: 80%;
}
.CCmainDetailTop{
    height: 9%;
    border-bottom:1px solid #DCDFE6;
}
.CCmainDetailBottom{
    height: 90%;
}
.CCmainDetailBottomLeft{
    float: left;
    width: 69%;
    height: 100%;
    padding-right: 5px;
    border-right:1px solid #DCDFE6;
}
.CCmainDetailBottomRight{
    float: left;
    width: 30%;
    height: 100%;
}
.CCmainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CCmainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CCmainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CCmainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CCmainDetailBottomLeftNavRightDetail{
    float: right;
    height: 100%;
    padding-top: 2%;
}
.CCdivider{
    background-color: black;
}
.WHspan{
    color: #8E8B81;
}
.WHredspan{
    color: #029E9D;
}
.CCmainDetailBottomRightDetail1{
    height: 20%;
    width: 100%;
    margin:  2% 2%;
    border-bottom: 2px solid #DCDFE6;
}
.CCmainDetailBottomRightDetail2{
    height: 35%;
    width: 100%;
    margin:  2% 2%;
    border-bottom: 2px solid #DCDFE6;
}
.CCmainDetailBottomRightDetail3{
    height: 45%;
    width: 100%;
    margin:  2% 2%;
    border-bottom: 2px solid #DCDFE6;
}
.JYH4{
    text-indent: 2em;
}
.JYP1,.SMP1,.PPP1,.PPP2,.PPP3{
    text-indent: 4em;
    color: #343434;
}
.JYP2,.SMP2,.SMP3,.SMP4{
    text-indent: 2em;
    color: #343434;
}
.WH2{
    text-indent: 2em;
}
.WHP{
    text-indent: 4em;
    color: #343434;
}
/* 底部样式 */
.CCfooter{
    height: 3%;
}

/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}

</style>