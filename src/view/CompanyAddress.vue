<template>
<transition name="el-fade-in-linear">
        <!-- 主体容器 -->
        <div class="CAcontainer" ref="RCA">
            <!-- 主要区域容器 -->
            <div class="CAmain">
                <div class="CAmainPic"></div>
                <div class="CAmainDetail">
                    <!-- M1顶部结构 -->
                    <div class="CAmainDetailTop">
                        <div class="CAmainDetailBottomLeftNav">
                            <!-- M1顶部导航左 -->
                            <div class="CAmainDetailBottomLeftNavLeft">
                                <div class="CAmainDetailBottomLeftNavLeftDetail">
                                    <span>联系我们</span>
                                     <i class="el-icon-arrow-right"></i>
                                     <span>联系方式</span>
                                </div>
                            </div>
                            <div class="CAmainDetailBottomLeftNavRight">
                                <!-- M1顶部导航右 -->
                                <div class="CAmainDetailBottomLeftNavRightDetail">
                                    <span class="LXredspan">联系方式</span>
                                    <el-divider direction="vertical" class="CDdivider"></el-divider>
                                    <span class="LXspan">人才招聘</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="CAmainDetailBottom">
                        <!-- M1底部结构左 -->
                        <div class="CAmainDetailBottomLeft">
                            <div class="CAmainDetailBottomLeftTop">
                                <h2 class="CAH2">联系方式</h2>
                            </div>
                            <br/>
                            <br/>
                            <div class="CAmainDetailBottomLeftBottom">
                                <p class="CAP">桦正文旅有限公司</p>
                                <br/>
                                <p class="CAP">地址：山东省济南市长清区大学科技园紫薇路2687号</p>
                                <p class="CAP">西部创新园C座505-1</p>
                                <br/>
                                <p class="CAP">公司电话：0531-87222085</p>
                                <p class="CAP1">400-658-6123</p>
                                <br/>
                                <p class="CAP">周一至周六8:30-17:30</p>
                                <br/>
                            </div>
                        </div>
                        <!-- M1底部结构右 -->
                        <div class="CAmainDetailBottomRight">
                            <div class="CAmainDetailBottomRightCtn" id="CAmainDetailBottomRightCtn"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部容器 -->
            <div class="CAfooter">
                <Footer></Footer>
            </div>
        </div>
</transition>
</template>

<script>
import BMap from 'BMap'
export default {
  mounted () {
      this.ready();
      let SW = screen.width;
      let SH = screen.height;
      SW<=1440?SW = '1440': SW =screen.width;
      SH<=900?SH = '900': SH =screen.height;
      this.$refs.RCA.style.height = `${SH}px` ;
      this.$refs.RCA.style.width = `${SW}px` ;
  },
  methods: {
   ready () {
       // 百度地图API功能
	var map = new BMap.Map("CAmainDetailBottomRightCtn");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.818, 36.555), 13);  // 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("济南");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
   }
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
.CAcontainer{
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
}

/* 主体样式 */
.CAmain{
    height: 97%;
}
/* 主体头部图片 */
.CAmainPic{
    height: 20%;
    background-image: url("../assets/topimg.png");
    background-size: 100%;
    background-position-y: 86%;
}

/* 主体内容样式 */
.CAmainDetail{
    margin: 0 5%;
    height: 80%;
}
.CAmainDetailTop{
    height: 9%;
     border-bottom:1px solid #DCDFE6;
}
.CAmainDetailBottom{
    height: 90%;
}
.CAmainDetailBottomLeft{
    float: left;
    width: 54%;
    height: 100%;
    /* border-right:1px solid #DCDFE6; */
}
.CAmainDetailBottomLeftTop{
    height: 20%;
}
.CAmainDetailBottomLeftBottom{
    width: 100%;
    height: 50%;
}
.CAmainDetailBottomRight{
    float: left;
    width: 45%;
    height: 100%;
}
.CAmainDetailBottomRightCtn{
    width: 100%;
    height: 70%;
    margin: 11% auto;
}

.CAmainDetailBottomLeftNav{
    float: left;
    width: 100%;
    height: 100%;
}
.CAmainDetailBottomLeftNavLeft{
    float: left;
    width: 30%;
    height: 100%;
}
.CAmainDetailBottomLeftNavRight{
    float: left;
    width: 70%;
    height: 100%;
}
.CAmainDetailBottomLeftNavLeftDetail{
    padding-top: 5%;
}
.CAmainDetailBottomLeftNavRightDetail{
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
.CAH2{
    text-indent: 2em;
    line-height: 5em;
    font-size: 2em;
}
.CAP{
    text-indent: 5em;
    font-size: 1.2em;
}
.CAP1{
    text-indent: 10em;
    font-size: 1.2em;
}

/* 底部样式 */
.CAfooter{
    height: 3%;
}


/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 1s linear;
}
</style>