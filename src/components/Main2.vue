<template>
    <div class="M2container">
       <div class="M2content1">
            <div class="M2T1Code"></div>
        </div>
        <div class="M2content2">
            <div class="M2content2Detail">
                <h2 class="JJEng">COMPANY PROFILE</h2>
                <h3 class="JJChn">公司简介</h3>
                <br/>
                <br/>
                <el-button round class="M22button" @click="goJJ()">认识我们</el-button>
            </div>
        </div>
        <div class="M2content3">
            <div class="M2content3Detail">
                <h2 class="JJEng">PROJECT INTRODUCTION</h2>
                <h3 class="JJChn">项目介绍</h3>
                <br/>
                <br/>
                <el-button round class="M23button" @click="goXM()">了解我们</el-button>
            </div>
        </div>
        <div class="M2content4">
            <div class="M2content4Detail">
                <h2 class="JJEng">JOIN US</h2>
                <h3 class="JJChn">人才招聘</h3>
                <br/>
                <br/>
                <el-button round class="M24button" @click="goJR()">加入我们</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goJJ(){
            this.$router.push('/CompanyDetail');
        },
        goXM(){
            this.$router.push('./CompanyProject1');
        },
        goJR(){
            this.$router.push('./CompanyRecruitment');
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
.M2container{
    display: flex;
    height: 100%;
    margin: 0 5%;
}
.M2content1,
.M2content2,
.M2content3,
.M2content4{
    width: 24%;
    height: 100%;
    border-left:1px solid #DCDFE6;
}
.M2T1Code{
    height: 100%;
    width: 100%;
    margin: auto;
    background-image: url("../assets/Codeimg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 9px;
}
.M2content2Detail{
    height: 100%;
    width: 100%;
    padding: 13%;
}
.M2content3Detail{
    height: 100%;
    width: 100%;
    padding: 13%;
}
.M2content4Detail{
    height: 100%;
    width: 100%;
    padding: 13%;
}
.JJEng{
    color: #029E9D;
    font-size: 22px;
}
.M22button:hover,
.M23button:hover,
.M24button:hover
{
    color: #029E9D;
}
</style>