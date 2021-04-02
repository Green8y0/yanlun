<template>
	<!-- 链接 -->
    <div class="top-nav">
        <div class="nav-content">
            <div :class="currentRouter === 'circledetail'?'nav-link-div-active':'nav-link-div'">
                <router-link to="circledetail" class="nav-link">
                    <span>主页</span>
                </router-link>
            </div>
<!--            <div :class="currentRouter === 'collection'?'nav-link-div-active':'nav-link-div'">-->
<!--                <router-link to="collection" class="nav-link">-->
<!--                    <span>学长/学姐</span>-->
<!--                </router-link>-->
<!--            </div>-->
        </div>
    </div>
    <!-- end of 链接 -->
</template>

<script>
	import {getUrlInfo} from '@/util.js'
	export default{
		name: "CircleDetailNav",
		data() {
			return {
				currentRouter: null
			}
		},
		methods: {
			checkCurrentRouter(){
                let urlInfo = getUrlInfo()
                this.currentRouter = urlInfo.currentRouter
                console.log('currentRouter=',this.currentRouter)
            }
		},
		mounted() {
			// 设置当前页面的CSS
            this.checkCurrentRouter()
		}
	}
</script>

<style scoped>
	.top-nav{
        width: 918px;
        height: 44px;
        background: #FFFFFF;
        border: 1px solid #E4E4E4;
        position: relative;
        top: -4px;
        display: flex;
        justify-content: center;
    }
    .nav-content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 494px;
        height: 100%;
    }
    .nav-link-div{
        width: 90px;
        height: 42px;
    }
    .nav-link-div-active{
        width: 62px;
        height: 42px;
        border-bottom: 2px solid #FFDA1F;
    }
    .nav-link-div:hover{
        border-bottom: 2px solid #FFDA1F;
    }
    .nav-link{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-link span{
        font-size: 14px;
        font-weight: 400;
        color: #000000;
        /*width: 28px;*/
        height: 14px;
        font-family: Microsoft YaHei;
    }
</style>