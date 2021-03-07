<template>
	<!-- 右侧导航栏区域 -->
    <div class="right-nav">
    	<!-- 我的收藏 -->
    	<div class="nav-line" @click="goCollection">
    		<img src="@/assets/img/common/collection_icon.png" class="collection-icon">
    		<span class="line-title">我的收藏</span>
    		<div class="line-num">
    			<span>{{userInfo.collectionNum}}</span>
    		</div>
    	</div>
    	<!-- 浏览历史 -->
    	<div class="nav-line">
    		<img src="@/assets/img/common/history_icon.png" class="collection-icon">
    		<span class="line-title">浏览历史</span>
    		<div class="line-num">
    			<span>{{userInfo.historyNum}}</span>
    		</div>
    	</div>
    	<!-- 我的关注 -->
    	<div class="nav-line">
    		<img src="@/assets/img/common/attention_icon.png" class="collection-icon">
    		<span class="line-title">我的关注</span>
    		<div class="line-num">
    			<span>{{userInfo.attentionNum}}</span>
    		</div>
    	</div>
    	<!-- 我的圈子 -->
    	<div class="nav-line" @click="goCircle">
    		<img src="@/assets/img/common/circle_icon.png" class="collection-icon">
    		<span class="line-title">我的圈子</span>
    		<div class="line-num">
    			<span>{{userInfo.circleNum}}</span>
    		</div>
    	</div>
    </div>
    <!-- end of 右侧导航栏区域 -->
</template>

<script>
	export default{
		name: "UserOptionsNav",
		props: ['userInfo'],
		data() {
			return{
				
			}
		},
		methods: {
			goCollection(){
                // 去我的收藏页
				this.$router.push("/Collection")
			},
			goCircle(){
				this.$router.push("/circle");
			}
		}
	}
</script>

<style scoped>
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
    	width: 320px;
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