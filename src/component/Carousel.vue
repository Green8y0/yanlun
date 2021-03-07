<template>
	<!-- 右侧轮播图区域 -->
    <div class="right-carousel">
        <transition-group name="image" tag="ul" class="carousel-img">
            <li v-for="(list, index) in carouselImgSrc" :key="index" v-show="index===currentIndex"
            @mouseenter="stop" @mouseleave="move">
                <img :src="require('@/assets/img/common/'+list+'.png')">
            </li>
        </transition-group>
        <div class="carousel-btn-div">
            <span v-for="(list, index) in carouselImgSrc.length" :key="index"
            :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
        </div>
    </div>
    <!-- end of 右侧轮播图区域 -->
</template>

<script>
	export default{
		name: "Carousel",
		data() {
			return{
                carouselImgSrc: ['carousel1','carousel2','carousel3','carousel4','carousel5'],
				currentIndex: 0,
                timer: ''
			}
		},
		methods: {
			autoPlay() {
                this.currentIndex++;
                if (this.currentIndex > this.carouselImgSrc.length - 1) {
                    // 遍历到最后一张图片时置零
                    this.currentIndex = 0
                }
            },
            move() {
                console.log('轮播图继续')
                // console.log(this.posts[0].postImg)
                this.timer = setInterval(() => {
                    this.autoPlay()
                },2000)
            },
            stop(){
                console.log('轮播图暂停')
                clearInterval(this.timer)
                this.timer = null
            },
            change(index){
                this.currentIndex = index
            }
		},
        created() {
            this.$nextTick(() => {
                // 设置定时器，每隔2s this.currentIndex+1
                this.timer = setInterval(() => {
                    this.autoPlay()
                }, 2000)
            })
        }
	}
</script>

<style scoped>
	.right-carousel{
        width: 100%;
        height: 184px;
        margin-top: 16px;
        overflow: hidden;                       /*超出当前区域隐藏*/
        cursor: pointer;                        /*鼠标悬停时光标形状*/
    }
    .carousel-img{
        width: 430px;
        height: 100%;
    }
    .carousel-btn-div{
        width: 106px;
        height: 20px;
        background: #a9a9a9;
        z-index: 10;
        position: relative;
        bottom: 11%;
        left: 75%;
        opacity: 0.8;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .carousel-btn-div span{
        height: 6px;
        width: 6px;
        border-radius: 50%;
        background: #d2d2d2;
        z-index: 20;
    }
    .carousel-btn-div .active{
        background: #ffffff !important;
    }
    /*轮播图动画未完成
    .image-enter{
        transform: translateX(100%);
    }
    .image-enter-active{
        transform: translateX(0);
        transition: all 1.5s ease;
    }
    .image-leave{
        transform: translateX(0);
    }
    .image-leave-active{
        transform: translateX(-100%);
        transition: all 1.5s ease;
    }*/
</style>