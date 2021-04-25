<template>
    <div class="M1container" ref="M1c">
       <el-carousel
        :height="M1Height + 'px'"
        :interval="2000"
       >
            <el-carousel-item v-for="item in 4" :key="item">
            </el-carousel-item>
  </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return{
            M1Height:'',
        }
    },
    // 根据屏幕自适应轮播图大小
    mounted(){
            // console.log("为什么你是第一个加载的？？")
            // console.log(screen.height);
            // console.log(screen.width);
            // console.log(this.$refs.M1c.clientHeight);
            let SH = screen.height;
            SH<=900?SH = '900': SH =screen.height;
            let REALheight = 0.60 * SH;
            // this.M1Height = this.$refs.M1c.clientHeight;
            this.M1Height = REALheight;
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.M1container{
    height: 100%;
}

.el-carousel__item:nth-child(3) {
    background-image: url("../assets/swpimg1.png");
    background-size: 100%;
    background-position-y: 95%;
    background-repeat: no-repeat;
}
.el-carousel__item:nth-child(4) {
    background-image: url("../assets/swpimg2.png");
    background-size: 100%;
    background-repeat: no-repeat;
}
.el-carousel__item:nth-child(5) {
    background-image: url("../assets/swpimg3.png");
    background-size: 100%;
    background-position-y: 80%;
    background-repeat: no-repeat;
}
.el-carousel__item:nth-child(6) {
    background-image: url("../assets/swpimg4.png");
    background-size: 100%;
    background-position-y: 100%;
    background-repeat: no-repeat;
}

</style>