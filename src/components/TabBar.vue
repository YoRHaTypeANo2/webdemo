<template>
    <div class="TabBarcontainer">
        <el-menu class="el-menu-demo"
             mode="horizontal"
             text-color="#8E8B81"
             active-text-color="#029E9D"
             >
                <el-menu-item id="elm1" index="1" @click="SYClick()">首页</el-menu-item>
                <el-submenu id="elm2" index="2">
                    <template slot="title">公司概况</template>
                    <el-menu-item index="2-1" @click="JJClick()">公司简介</el-menu-item>
                    <el-menu-item index="2-2" @click="JGClick()">组织架构</el-menu-item>
                    <el-menu-item index="2-3" @click="WHClick()">企业文化</el-menu-item>
                </el-submenu>
                <el-submenu id="elm3" index="3">
                    <template slot="title">新闻资讯</template>
                    <el-menu-item index="3-1" @click="XWClick()">文旅新闻</el-menu-item>
                    <el-menu-item index="3-2" @click="KFXWClick()">开发新闻</el-menu-item>
                </el-submenu>
                <el-submenu id="elm4" index="4">
                    <template slot="title">项目介绍</template>
                    <el-menu-item index="4-1" @click="XM1Click()">休闲农庄项目</el-menu-item>
                    <el-menu-item index="4-2" @click="XM2Click()">榕江县扶贫项目</el-menu-item>
                </el-submenu>
                <el-submenu id="elm5" index="5">
                    <template slot="title">联系我们</template>
                    <el-menu-item index="5-1" @click="TelClick()">联系方式</el-menu-item>
                    <el-menu-item index="5-2" @click="RecClick()">人才招聘</el-menu-item>
                </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return{
        };
    },
    methods:{
        SYClick(){
            this.$router.push('./Indexpage')
        },
        JJClick(){
            this.$router.push('./CompanyDetail')
        },
        JGClick(){
            this.$router.push('./CompanyStructure')
        },
        WHClick(){
            this.$router.push('./CompanyCulture')
        //     this.$alert('暂未开放', '', {
        //   confirmButtonText: '确定',
        // });
        },
        XWClick(){
            this.$router.push('./CompanyNews')
        //     this.$alert('暂未开放', '', {
        //   confirmButtonText: '确定',
        // });
        },
        KFXWClick(){
            this.$router.push('./CompanyKFNews')
        //     this.$alert('暂未开放', '', {
        //   confirmButtonText: '确定',
        // });
        },
        XM1Click(){
            this.$router.push('./CompanyProject1')
        //     this.$alert('暂未开放', '', {
        //   confirmButtonText: '确定',
        // });
        },
        XM2Click(){
            this.$router.push('./CompanyProject2')
        //     this.$alert('暂未开放', '', {
        //   confirmButtonText: '确定',
        // });
        },
        TelClick(){
            this.$router.push('./CompanyAddress')
        //     this.$alert('暂未开放', '', {
        //   confirmButtonText: '确定',
        // });
        },
        RecClick(){
            this.$router.push('./CompanyRecruitment')
        //     this.$alert('暂未开放', '', {
        //   confirmButtonText: '确定',
        // });
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
.TabBarcontainer{
    height: 100%;
    padding-left: 15%;
    padding-top: 1%;
    width: 100%;
}
.el-menu-demo{
    height: 100%;
}
.TabBarcontainer
#elm1,
#elm2,
#elm3,
#elm4,
#elm5
{
    margin: 0 2%;
}
a{
    text-decoration:none;
}
</style>