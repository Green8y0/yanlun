<template>
	<!-- 右侧帖子区域 -->
    <div class="right-post">
        <!-- 发帖子 -->
        <div class="nav-line" @click="goEditor">
            <img src="@/assets/img/common/new_post.png" class="collection-icon">
            <span class="line-title">发帖子</span>
        </div>
        <!-- 我的帖子 -->
        <div class="nav-line">
            <img src="@/assets/img/common/my_post.png" class="collection-icon">
            <span class="line-title">我的帖子</span>
            <div class="line-num">
                <span>{{userInfo.postNum}}</span>
            </div>
        </div>
        <!-- 草稿箱 -->
        <div class="nav-line">
            <img src="@/assets/img/common/draft_box.png" class="collection-icon">
            <span class="line-title">草稿箱</span>
            <div class="line-num">
                <span>{{userInfo.draftNum}}</span>
            </div>
        </div>
    </div>
    <!-- end of 右侧帖子区域 -->
</template>

<script>
	export default{
		name: "PostOptionsNav",
		props: ['userInfo'],
		data() {
			return{
				
			}
		},
		methods: {
			goEditor(){
                this.$router.push('/putPassage')
            }
		}
	}
</script>

<style scoped>
    .right-post{
        background: #FFFFFF;
        width: 100%;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 16px;
    }
	.right-nav{
    	background: #FFFFFF;
    	width: 100%;
    	height: 210px;
    	display: flex;
    	flex-direction: column;
    	justify-content: flex-start;
    }
    .nav-line{
    	width: 100%;
    	height: 39px;
    	margin-top: 11px;
    	display: flex;
    	justify-content: flex-start;
    	align-items: center;
    	font-family: MicrosoftYaHei;
    	font-weight: 400;
    	font-size: 16px;
    	color: #676666;
        cursor: pointer;
    }
    /*父类nav-line*/
    .nav-line:hover{
    	background: #EEEEEE;
    	cursor: pointer;
    }
    /*父类nav-line联动子类line-num*/
    .nav-line:hover .line-num{
    	background: #FFFFFF;
    }
    .collection-icon{
    	margin-left: 26px;
    	margin-right: 13px;
    	width: 16px;
    	height: 16px;
    }
    .line-title{
    	width: 74%;
    }
    .line-num{
    	width: 29px;
    	height: 29px;
    	background: #EEEEEE;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	border-radius: 8px;
    	font-size: 14px;
    	color: #676666;
    	font-weight: 400;
    }
</style>