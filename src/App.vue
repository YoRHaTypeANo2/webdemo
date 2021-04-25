<template>
  <div id="app" ref="Rapp">
      <!-- 头部容器 -->
      <div class="Appheader" ref="RappH" v-if="isHeadShow">
        <!-- logo -->
        <div class="Applogo" @click="GoWelcome()">
        </div>
        <!-- 导航栏 -->
        <div class="Apptabbar">
        <TabBar></TabBar>
        </div>
        <!-- 登录按钮 -->
        <div class="Applogin">
            <!-- 未登录时的按钮 -->
            <div class="Applogin2" v-show='unlog'>
                <el-button round class="logbutton" @click="login()">
                    <i class="el-icon-s-custom"></i>OA登录
                </el-button>
            </div>
            <!-- 登录后的按钮 -->
            <div class="Applogin2" v-show="!unlog">
                <el-button round class="logbutton">
                    <i class="el-icon-s-custom"></i>{{ name }}
                </el-button>
            </div>
        </div>
      </div>
      <!-- 页面容器 -->
      <div class="Appcontainer" ref="RappC">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import tabbar from './components/TabBar'
import main from './components/Main'
import main2 from './components/Main2'
import footer from './components/Footer'
Vue.component('TabBar', tabbar)
Vue.component('Main', main)
Vue.component('Main2', main2)
Vue.component('Footer', footer)
export default {
  name: 'App',
  data(){
    return{
      unlog:true,
      name:'1',
      isHeadShow:'true',
    }
  },
  methods:{
    GoWelcome(){
      this.$router.push('./WelcomePage');
    },
    pageinit(){
      let SW = screen.width;
      let SH = screen.height;
      SW<=1440?SW = '1440': SW =screen.width;
      SH<=900?SH = '900': SH =screen.height;
      this.$refs.Rapp.style.height = `${SH}px`;
      this.$refs.Rapp.style.width = `${SW}px`;
    },
    welcomeinit(){
      let SW = screen.width;
      let SH = screen.height;
      SW<=1440?SW = '1440': SW =screen.width;
      SH<=900?SH = '820': SH =0.912*screen.height;
      this.$refs.Rapp.style.height = `${SH}px`;
      this.$refs.Rapp.style.width = `${SW}px`;
    },
    login(){
         this.$prompt('请输入您的工号', '登录', {
          confirmButtonText: '登录',
          cancelButtonText: '取消',
          inputErrorMessage: '请输入正确的工号',
        }).then(({ value }) => {
          // if( value === '王鹏'||'张园园'||'段澳琦'||'董聪宇'||'戴思维'||'张芸珠' ){
            // 有些员工已经不在公司了，但我还是留下他们了，后面如果需要的话你删掉就好了
          if( value === '王鹏' ){
          this.$message({
            type: 'success',
            message: '欢迎回来， ' + value,
          })
            this.unlog = false;
            this.name = value;
            }
            else if(value === '张园园' )
            {
          this.$message({
            type: 'success',
            message: '欢迎回来， ' + value,
          })
            this.unlog = false;
            this.name = value;
            }
            else if(value === '董聪宇' )
            {
          this.$message({
            type: 'success',
            message: '欢迎回来， ' + value,
          })
            this.unlog = false;
            this.name = value;
            }
            else if(value === '戴思维' )
            {
          this.$message({
            type: 'success',
            message: '虽然已经走了，但是还是留个彩蛋吧，欢迎回来， ' + value,
          })
            this.unlog = false;
            this.name = value;
            }
            else if(value === '张芸珠' )
            {
          this.$message({
            type: 'success',
            message: '虽然已经走了，但是还是留个彩蛋吧，欢迎回来， ' + value,
          })
            this.unlog = false;
            this.name = value;
            }
            else if(value === '段澳琦' )
            {
          this.$message({
            type: 'success',
            message: '欢迎回来， ' + value,
          })
            this.unlog = false;
            this.name = value;
            }
            else{
              this.$message({
                type: 'error',
            message: '请输入正确的工号',
          })
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    }
  },
  mounted() {
// 为了不让后续长页面被遮盖，App的overflow hidden去掉了


      this.pageinit();
  },
  watch:{
        $route(e){
            if(e.name === 'WelcomePage'){
                this.isHeadShow = false;
                this.welcomeinit();
            }else {
                this.isHeadShow = true;
                this.pageinit();
            }
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
html,body{
  height: 100%;
  width: 100%;
}

#app{
  position: absolute;
  /* width: 100%; */
  /* height: 100%; */
  /* height: 900px; */
  /* width: 1440px; */
}
/* 头部样式 */
.Appheader{
    height: 11%;
    padding:0 5%;
    display: flex;
}
.Applogo{
    width: 20%;
    background-image: url('assets/Logoimg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.Apptabbar{
    width: 70%;
}
.Applogin{
    width: 10%;
    height: 100%;
    position: relative;
}
.Applogin2{
    margin: 18% 7%;
}
.logbutton:hover,
.logbutton:focus{
    color: #029E9D;
}
.rightname{
  color: #029E9D;
}

/* app容器样式 */
.Appcontainer{
  height: 90%;
  width: 100%;
}
</style>
