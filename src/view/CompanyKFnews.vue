<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CKFcontainer" ref="RCKF"> 
            <!-- 主要区域容器 -->
            <div class="CKFmain">
                <div class="CKFmainPic"></div>
                <div class="CKFmainDetail">
                    <!-- M1顶部结构 -->
                    <div class="CKFmainDetailTop">
                        <div class="CKFmainDetailBottomLeftNav">
                            <!-- M1顶部导航左 -->
                            <div class="CKFmainDetailBottomLeftNavLeft">
                                <div class="CKFmainDetailBottomLeftNavLeftDetail">
                                    <span>新闻资讯</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>开发新闻</span>
                                </div>
                            </div>
                            <div class="CKFmainDetailBottomLeftNavRight">
                                <!-- M1顶部导航右 -->
                                <div class="CKFmainDetailBottomLeftNavRightDetail">
                                    <span class="XWspan">文旅新闻</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="XWredspan">开发新闻</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CKFmainDetailBottom">
                        <!-- M1底部结构左 -->
                        <div class="CKFmainDetailBottomLeft">
                             <div class="CKFmainDetailBottomLeftContent1">
                                 <div class="CKFmainDetailBottomLeftContent1Left">
                                     <div class="CKFmainDetailBottomLeftContent1LeftLeft">
                                        <h1 class="CKFDateH2">9.27</h1>
                                        <p class="CKFDateP">2020</p>
                                     </div>
                                     <div class="CKFmainDetailBottomLeftContent1LeftRight">
                                        <br/>
                                        <br/>
                                        <br/>
                                        <h4 class="CKFH2">桦正文旅官方微信公众号上线啦</h4>
                                        <p class="CKFP">关注桦正文旅微信公众号即可享受线上购卡，线上预订等服务</p>
                                        <br/>
                                        <div class="CKFBtnDiv">
                                            <!-- <el-button round class="CKFBtn" @click="goCKFD1()">查看更多</el-button> -->
                                        </div>
                                     </div>
                                 </div>
                                 <div class="CKFmainDetailBottomLeftContent1Right"></div>
                             </div>
                             <div class="CKFmainDetailBottomLeftContent2">
                                 <div class="CKFmainDetailBottomLeftContent2Left">
                                     <div class="CKFmainDetailBottomLeftContent2LeftLeft">
                                        <h1 class="CKFDateH2">9.10</h1>
                                        <p class="CKFDateP">2020</p>
                                     </div>
                                     <div class="CKFmainDetailBottomLeftContent2LeftRight">
                                        <br/>
                                        <br/>
                                        <br/>
                                        <h4 class="CKFH2">桦正文旅推出山东艺术学院专属会员卡</h4>
                                        <p class="CKFP">桦正文旅携手山东艺术学院推出校园专属会员卡</p>
                                        <br/>
                                        <div class="CKFBtnDiv">
                                            <!-- <el-button round class="CKFBtn" @click="goCKFD2()">查看更多</el-button> -->
                                        </div>
                                     </div>
                                 </div>
                                 <div class="CKFmainDetailBottomLeftContent2Right"></div>
                             </div>
                             <div class="CKFmainDetailBottomLeftContent3">
                                 <div class="CKFmainDetailBottomLeftContent3Left">
                                     <div class="CKFmainDetailBottomLeftContent3LeftLeft">
                                        <h1 class="CKFDateH2">9.3</h1>
                                        <p class="CKFDateP">2020</p>
                                     </div>
                                     <div class="CKFmainDetailBottomLeftContent3LeftRight">
                                        <br/>
                                        <br/>
                                        <br/>
                                        <h4 class="CKFH2">桦正文旅推出山东交通学院专属会员卡</h4>
                                        <p class="CKFP">桦正文旅携手山东交通学院推出校园专属会员卡</p>
                                        <br/>
                                        <div class="CKFBtnDiv">
                                            <!-- <el-button round class="CKFBtn" @click="goCKFD3()">查看更多</el-button> -->
                                        </div>
                                     </div>
                                 </div>
                                 <div class="CKFmainDetailBottomLeftContent3Right"></div>
                             </div>
                        </div>
                        <!-- M1底部结构右 -->
                        <div class="CKFmainDetailBottomRight">
                             <div class="CKFmainDetailBottomRightCtn">
                                <div class="CKF1img4">
                                    <div class="CKF1img4word">
                                    <p class="CKF1img4p1">桦正新闻</p>
                                    <p class="CKF1img4p2">记录桦正每一刻</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部容器 -->
            <div class="CKFfooter">
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
      this.$refs.RCKF.style.height = `${SH}px` ;
      this.$refs.RCKF.style.width = `${SW}px` ;
    },
    methods:{
        goCKFD1(){
            this.$router.push('/CompanyKFnewsDetail1');
        },
        goCKFD2(){
            this.$router.push('/CompanyKFnewsDetail2');
        },
        goCKFD3(){
            this.$router.push('/CompanyKFnewsDetail3');
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
.CKFcontainer{
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}

/* 主体样式 */
.CKFmain{
    height: 97%;
}
/* 主体头部图片 */
.CKFmainPic{
    height: 20%;
    background-image: url("../assets/topimg.png");
    background-size: 100%;
    background-position-y: 86%;
}

/* 主体内容样式 */
.CKFmainDetail{
    margin: 0 5%;
    height: 80%;
}
.CKFmainDetailTop{
    height: 9%;
     border-bottom:1px solid #DCDFE6;
}
.CKFmainDetailBottom{
    height: 90%;
}
.CKFmainDetailBottomLeft{
    float: left;
    width: 69%;
    height: 100%;
    padding-right: 5px;
    border-right:1px solid #DCDFE6;
}
.CKFmainDetailBottomLeftContent1,
.CKFmainDetailBottomLeftContent2,
.CKFmainDetailBottomLeftContent3{
    height: 27%;
    padding-bottom: 1%;
    border-bottom:1px solid #DCDFE6;
}
.CKFmainDetailBottomLeftContent1Left,
.CKFmainDetailBottomLeftContent2Left,
.CKFmainDetailBottomLeftContent3Left{
    width: 70%;
    height: 100%;
    float: left;
}
.CKFmainDetailBottomLeftContent1LeftLeft,
.CKFmainDetailBottomLeftContent2LeftLeft,
.CKFmainDetailBottomLeftContent3LeftLeft
{
    float: left;
    width: 25%;
    height: 43%;
    margin: 8% 0;
    border-radius: 5%;
    border:1px solid #029e90;
}
.CKFmainDetailBottomLeftContent1LeftRight,
.CKFmainDetailBottomLeftContent2LeftRight,
.CKFmainDetailBottomLeftContent3LeftRight
{
    float: left;
    width: 70%;
    height: 100%;
}
.CKFBtnDiv{
    float: right;
    padding-right: 6%;
    height: 23%;
    width: 25%;
}
.CKFBtn{
    height: 100%;
    width: 100%;
    color: #029E9D;
}
.CKFmainDetailBottomLeftContent1Right,
.CKFmainDetailBottomLeftContent2Right,
.CKFmainDetailBottomLeftContent3Right{
    width: 30%;
    height: 100%;
    float: left;
    /* background-color: blue; */
    border-radius: 5%;
}
.CKFmainDetailBottomLeftContent1Right{
    background-image: url("../assets/KFlist1.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.CKFmainDetailBottomLeftContent2Right{
    background-image: url("../assets/KFlist2.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.CKFmainDetailBottomLeftContent3Right{
    background-image: url("../assets/KFlist3.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.CKFH1{
    text-indent: 1em;
}
.CKFH2{
    text-indent: 3em;
}
.CKFP{
    text-indent: 5em;
    font-size: 0.8em;
}
.CKFmainDetailBottomRight{
    float: left;
    width: 30%;
    height: 100%;
}
.CKFmainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CKFmainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CKFmainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CKFmainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CKFmainDetailBottomLeftNavRightDetail{
    float: right;
    height: 100%;
    padding-top: 2%;
}
.CKFmainDetailBottomRightCtn{
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
.CKF1img4{
    background-image: url("../assets/newsRimg.png");
    background-position: center;
    background-position-y: 0%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-color: black; */
    height: 70%;
    width: 95%;
}
.CKF1img4word{
    padding: 80% 0; 
}
.CKF1img4p1{
    text-align: center;
    font-size: 2.5em;
    color: #ffffff;
}
.CKF1img4p2{
    text-align: center;
    color: #ffffff;
    font-size: 2em;
}
.CKFDateH2,
.CKFDateP{
    padding: 1.5%;
    text-align: center;
    color: #029e90;
}
/* 底部样式 */
.CKFfooter{
    height: 3%;
}

/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}
</style>