<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="WPcontainer" ref="RWP" v-show="WPShow">
            <!-- logo -->
            <div class="WPlogo"></div>
            <!-- 按钮 -->
            <div class="WPBtnCtn" @click="GoIndex()">
                <el-button  :class="WPBselect" @click="GoIndex()">进入官网</el-button>
            </div>
            <div :class="WPVselect" ref="RWPV">
                <video  autoplay loop muted class="WPvideo" v-if="videoShow">
                <source src="../assets/webvideo.mp4" type="video/mp4"/>
                    浏览器不支持 video 标签，建议升级浏览器。
                </video>
            </div>
        </div>
</transition>
</template>

<script>
export default {
    data(){
        return{
            WPShow:false,
            videoShow:false,
            WPstatus:'none',
        }
    },
    mounted(){
      this.WPShow = true;
      let SW = screen.width;
      let SH = screen.height;
      if ( SW < 1440 ){
          SW = '1440';
          this.WPstatus = 'mobile';
      }else {
          SW = screen.width;
          this.WPstatus = 'pc';
      };
      if ( SH < 900 ){
          SH = '820';
      }else {
          SH = 0.912*screen.height;
      };
    //   console.log(SW);
    //   console.log(SH);
      console.log(this.WPstatus);
      if (this.WPstatus === 'pc') { this.videoShow = true; console.log("videoSHowOn")};
      if (this.WPstatus === 'mobile') { this.videoShow = false; console.log("videoShowOff")};
      this.$refs.RWP.style.height = `${SH}px` ;
      this.$refs.RWP.style.width = `${SW}px` ;
      this.$refs.RWPV.style.height = `${SH}px` ;
      this.$refs.RWPV.style.width = `${SW}px` ;
    },
    computed:{
        WPVselect(){
            if ( this.WPstatus === 'pc'){
                return "WPVctn2";
                } else if ( this.WPstatus === 'mobile'){
                return "WPVctn1";
            }
        },
        WPBselect(){
            if ( this.WPstatus === 'pc'){
                return "WPbutton";
                } else if ( this.WPstatus === 'mobile'){
                return "WPbutton2";
            }
        }
    },
    methods:{
        GoIndex(){
            this.$router.push('./IndexPage')
        }
    },
}
</script>

<style scoped>
*{  font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    margin: 0;
    padding: 0;
}
/* 容器样式 */
.WPcontainer{
    background-color: black;
    position: absolute;
    z-index: 0;
    overflow: hidden;
}
.WPlogo{
    position: absolute;
    z-index: 3;
    margin: 5% 15%;
    background-image:url("../assets/WelPic.png");
    background-position: center;
    background-repeat: no-repeat;
    width: 300px;
    height: 440px;
}
.WPBtnCtn{
    position: absolute;
    z-index: 3;
    margin: 35% 15%;
    width: 300px;
	height: 90px;
}
.WPVctn1{
    width: 100%;
    height: 100%;
    background-image:url("../assets/snow2.gif");
    background-repeat: no-repeat;
    background-size: 100% 100%;
} 
.WPVctn2{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
} 
.WPbutton{
    position: absolute;
    outline: none;
    font-size: 30px;
    z-index: 3;
    width: 300px;
	height: 90px;
    color: #dddddd;
    border-radius: 50px;
    background-repeat: no-repeat;
    background: linear-gradient(90deg,#858181,#3a853a,#125353,#029e9d,#029e9d);
	background-size: 600%;
}
.WPbutton2{
    position: absolute;
    outline: none;
    font-size: 30px;
    z-index: 3;
    width: 300px;
	height: 90px;
    color: #dddddd;
    border-radius: 50px;
    background-repeat: no-repeat;
    background-color: #029e9d;
    /* background: linear-gradient(90deg,#858181,#3a853a,#125353,#029e9d,#029e9d); */
	/* background-size: 600%; */
}
.WPbutton::before{
	content: "";
    position: absolute;
    outline: none;
	/* 四周增宽5px */
	left: -5px;
	right: -5px;
	top: -5px;
    bottom: -5px;
    background-repeat: no-repeat;
	background: linear-gradient(90deg,#858181,#3a853a,#125353,#029e9d,#029e9d);
    background-size: 600%;
	border-radius: 50px;
	filter: blur(20px);
	z-index: -1;
}
.WPbutton2::before{
	content: "";
    position: absolute;
    outline: none;
	/* 四周增宽5px */
	left: -5px;
	right: -5px;
	top: -5px;
    bottom: -5px;
    background-repeat: no-repeat;
    animation: sun 1.8s infinite;
	background: linear-gradient(90deg,#029e9d,#04b1b1,#04cccc,#03c9c9,#04cccc,#04b1b1,#029e9d,#029e9d);
    background-size: 800%;
	border-radius: 50px;
	filter: blur(20px);
	z-index: -1;
}

.WPbutton:hover::before{
    animation: rolling 2s linear;
    animation-fill-mode: forwards;
}

.WPbutton:hover{
    animation: rolling 2s linear;
    animation-fill-mode: forwards;
} 

.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}

@keyframes  rolling{
0%{
    background-position: 0% 0%;
}
100%{
	background-position: 100% 0%;	
	}
}
</style>