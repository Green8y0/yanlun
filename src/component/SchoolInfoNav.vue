<template>
	<div class="nav">
        <div class="nav-left">
            <router-link to="schoolInfo" class="nav-link"
            :class="currentRouter === 'schoolInfo'?'nav-link-active':''">
                <span>学校概况</span>
            </router-link>
            <router-link to="schooldata" class="nav-link"
            :class="currentRouter === 'schooldata'?'nav-link-active':''">
                <span>相关数据图表</span>
            </router-link>
        </div>

        <router-link to="schools" class="nav-right">
            <img src="@/assets/img/common/schools_return.png">
            <span>返回</span>
        </router-link>
    </div>
</template>

<script>
    import {getUrlInfo} from '@/util.js'
	export default{
		name: "SchoolInfoNav",
		data() {
			return{
				currentRouter: null,
			}
		},
		methods: {
			checkCurrentRouter(){
                let urlInfo = getUrlInfo()
                this.currentRouter = urlInfo.currentRouter
                console.log('currentRouter=',this.currentRouter)
            }
		},
        mounted(){
            // 设置当前页面的CSS
            this.checkCurrentRouter()
        }
	}
</script>

<style scoped>
    .nav{
        width: 100%;
        height: 58px;
        background: #EEEEEE;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .nav-left{
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .nav-link{
        width: 272px;
        height: 57px;
        background: #EEEEEE;
        font-size: 16px;
        color: #676666;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .nav-link-active{
        background: #1296DB;
        color: #FFFFFF;
    }
    .nav-right{
        width: 60px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;
        color: #676666;
        margin-right: 28px;
    }
    .nav-right span{
        margin-left: 8px;
    }
</style>