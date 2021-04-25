<template>
        <!-- 主体容器 -->
<transition name="el-fade-in-linear">
        <div class="container" ref="Rindex" v-show="indexShow">
            <!-- 头部容器 -->
            <!-- <div class="header"> -->
                <!-- logo -->
                <!-- <div class="logo"> -->
                <!-- </div> -->
                <!-- 导航栏 -->
                <!-- <div class="tabbar"> -->
                <!-- <TabBar></TabBar> -->
                <!-- </div> -->
                <!-- 登录按钮 -->
                <!-- <div class="login"> -->
                    <!-- <div class="login2"> -->
                        <!-- <el-button round> -->
                    <!-- <i class="el-icon-s-custom"></i>OA登录 -->
                            <!-- </el-button> -->
                    <!-- </div> -->
                <!-- </div> -->
            <!-- </div> -->
            <!-- 主要区域容器 -->
            <div class="main">
                <Main></Main>
            </div>
            <!-- 次要区域容器 -->
            <div class="main2">
                <Main2></Main2>
            </div>
            <!-- 底部容器 -->
            <div class="footer">
                <Footer></Footer>
            </div>
        </div>
</transition>
</template>

<script>
export default {
    data(){
        return{
            indexShow:false
        }
    },
    methods:{
        Show_n_Hide(){
            this.indexShow = true;
        }
    },
    mounted(){
      let SW = screen.width;
      let SH = screen.height;
      SW<=1440?SW = '1440': SW =screen.width;
      SH<=900?SH = '900': SH =screen.height;
      this.$refs.Rindex.style.height = `${SH}px` ;
      this.$refs.Rindex.style.width = `${SW}px` ;
      this.Show_n_Hide();
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
.container{
    overflow: hidden;
}

/* 头部样式 */
/* .header{
    height: 10%;
    padding:0 5%;
    display: flex;
}
.logo{
    background-color:red;
    width: 20%;
    background-image: url('../assets/zhwllogo.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.tabbar{
    width: 70%;
}
.login{
    width: 10%;
    position: relative;
    margin: auto;
    padding: 0 2%;
} */


/* 主体1样式 */
.main{
    height: 60%;
}

/* 主体2样式 */
.main2{
    /* 这个世纪难题暂时可能。。。。就这样解决了  怪我css学的不好   这里+了10%的高度让底部的留白暂时没了 */
    height: 33%;
    padding-top: 10px;
}



/* 底部样式 */
.footer{
    padding-top: 25px;
    height: 5%;
}

/* 过渡动画 */
.el-fade-in-linear-enter-active {
  transition: all 0.5s linear;
}

</style>