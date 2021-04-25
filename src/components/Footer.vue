<template>
    <div class="FooterContainer">
        <span @click="GOMAP()">网站地图</span>
        <el-divider direction="vertical" class="eldivider"></el-divider>
        <span @click="GOMAP()">联系我们</span>
        <el-divider direction="vertical" class="eldivider"></el-divider>
        <span @click="GOREPORT()">举报投诉</span>
        <el-divider direction="vertical" class="eldivider"></el-divider>
        <span @click="GOLAW()">法律声明</span>
        <el-divider direction="vertical" class="eldivider"></el-divider>
        <span @click="GOBA()">鲁ICP备2020045066号</span>
    </div>
</template>

<script>
export default {
    methods:{
        GOMAP(){
            this.$router.push("../CompanyAddress")
        },
        GOREPORT(){
            console.log("并没有写完")
        },
        GOLAW(){
            console.log("并没有写完")
        },
        GOBA(){
            window.location.href = 'http://beian.miit.gov.cn'
        }
    }
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
.FooterContainer{
    width: 70%;
    margin:  0 20%;
}
span{
    cursor: pointer; 
    cursor: hand;
    font-size: 0.7em;
    padding: 0 4.5%;
}
.eldivider{
    background-color:black;
}
</style>