<template>
    <div class="all">
    	<div class="container">
    		<!-- 内容顶部链接 -->
    		<div class="top">
    			<img src="@/assets/img/common/user_background.png" class="top-backgroud">
    			<!-- 用户信息 -->
    			<div class="top-userinfo">
	    			<img :src="require('@/assets/img/common/'+userInfo.headPortrait+'.png')" class="top-headPortrait">
	    			<!-- 用户名 -->
	    			<div class="userinfo-name-div">
		    			<span class="userinfo-name">用户{{userInfo.email}}</span>
		    			<img src="@/assets/img/common/edit_icon.png">
	    			</div>
	    			<!-- 关注和私信按钮 -->
	    			<div class="userinfo-btn">
	    				<button class="btn-focus-on">关注</button>
	    				<button class="btn-private-msg">私信</button>
	    			</div>
    			</div>
    			<!-- end of 用户信息 -->

    			<!-- 链接 -->
    			<div class="top-nav">
    				<div class="nav-content">
    					<div class="nav-link-div">
	    					<router-link to="my" class="nav-link">
	    						<span>主页</span>
	    					</router-link>
	    				</div>
	    				<div class="nav-link-div">
	    					<router-link to="my" class="nav-link">
	    						<span>收藏</span>
	    					</router-link>
	    				</div>
	    				<div class="nav-link-div">
	    					<router-link to="my" class="nav-link">
	    						<span>圈子</span>
	    					</router-link>
	    				</div>
    				</div>
    			</div>
    			<!-- end of 链接 -->
    		</div>
    		<!-- end of 内容顶部链接 -->

    		<!-- 中部内容 -->
    		<div class="mid">
	    		<!-- 我的文章区域 -->
	    		<div class="left">
	    			<!-- 文章区域标题 -->
	    			<div class="left-tilte">
	    				<span>我的文章</span>
	    				<div class="title-sort">
	    					<span>按时间排序</span>
	    					<img src="@/assets/img/common/sort_icon.png">
	    				</div>
	    			</div>
	    			<!-- end of 文章区域标题 -->

	    			<!-- 文章内容 -->
	    			<div class="null-article-content">
	    				<div class="article-content-div">
		    				<img src="@/assets/img/common/edit_article.png">
		    				<span>还没有文章，开始<span style="color: #1296DB; cursor: pointer;">写第一篇文章</span></span>
	    				</div>
	    			</div>
	    			<!-- end of 文章内容 -->
	    		</div>
	    		<!-- end of 我的文章区域 -->

	    		<!-- 我的信息区域 -->
	    		<div class="right">
	    			<!-- 用户功能 -->
	    			<div class="user-function">
	    				<div class="function-item">
	    					<span class="function-item-num">{{userInfo.attentionNum}}</span>
	    					<span class="function-item-font">关注</span>
	    				</div>
	    				<div class="function-item"
	    				style="border-left: 1px solid #D7D7D7; border-right: 1px solid #D7D7D7;">
	    					<span>{{userInfo.myFan}}</span>
	    					<span class="function-item-font">粉丝</span>
	    				</div>
	    				<div class="function-item">
	    					<span>{{userInfo.postNum}}</span>
	    					<span class="function-item-font">帖子</span>
	    				</div>
	    			</div>
	    			<!-- end of 用户功能 -->

	    			<div class="userinfo-edit">
	    				<div class="edit-top">
	    					<button>点击认证</button>
	    				</div>
	    				<div class="edit-mid">
	    					<div class="mid-font-div">
		    					<span class="mid-font">个人资料完成度 <span class="complete-degree">0%</span></span>
	    					</div>
	    					<!-- 进度条 -->
	    					<div class="progress-bar"></div>
	    					<!-- end of 进度条 -->
	    				</div>
	    				<div class="edit-bottom">
	    					<div class="bottom-item">
								<span>编辑个人信息</span>
								<img src="@/assets/img/common/edit_userinfo.png">
	    					</div>
	    				</div>
	    			</div>

	    			<div>
	    				
	    			</div>
	    		</div>
	    		<!-- end of 我的信息区域 -->
    		</div>
    		<!-- end of 中部内容 -->
    	</div>
    </div>
</template>

<script>
    export default {
        name: "My",
        data(){
        	return {
        		// 后台获取的网站信息
        		websiteInfo: {
        			tel: '123456789',			// 网站联系电话
        			email: '123456789@qq.com'	// 网站联系邮箱
        		},
        		// 后台获取的用户数据
        		userInfo: {
        			email: '123456789@qq.com',
        			headPortrait: "user_head1",
        			collectionNum: 1,			// 我的收藏
        			historyNum: 10,				// 浏览历史
        			attentionNum: 2,			// 我的关注
        			circleNum: 0,				// 我的圈子
        			postNum: 0,					// 我的帖子
        			draftNum: 0,				// 草稿箱
        			myFan: 0					// 我的粉丝
        		}
        	}
        }
    }
</script>

<style scoped>
.all{
	min-height: 100%;
	min-width: 100%;
	position: absolute;
	background: #F9F9F9;
}
.container{
	width: 920px;
	height: 1911.11px;
	margin: 2px auto;
	display: flex;					/*弹性盒子布局*/
	flex-direction: column;
}
.top{
	width: 920px;
	height: 300px;
	background: #dee1e6;
	position: relative;						/*父级相对定位,子元素绝对定位,清除子元素空白*/
}
.top-backgroud{
	z-index: -1;
}
.top-userinfo{
	z-index: 10;
	position: absolute;						/*子元素绝对定位*/
	bottom: 57px;
	left: 321px;
	width: 276px;
	height: 190px;
	margin: 0px auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: Microsoft YaHei;
	color: #FFFFFF;
	font-weight: 400;
}
.top-headPortrait{
	z-index: 2;
	width: 101px;
	height: 101px;
}
.userinfo-name-div{
	width: 110%;
	height: 25px;
	margin: 13px 0px 15px 8%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.userinfo-name-div img{
	width: 18px;
	height: 18px;
}
.userinfo-name{
	font-size: 22px;
	width: 274px;
	height: 25px;
}
.userinfo-btn{
	width: 100%;
	height: 35px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.userinfo-btn button{
	width: 131px;
	height: 35px;
	color: #FFFFFF;
	font-size: 14px;
	font-weight: 400;
	font-family: Microsoft YaHei;
}
.userinfo-btn button:hover{
	opacity: 0.9;
	cursor: pointer;
}
.btn-focus-on{
	background: #FE7735;
	border: 2px solid #FE7735;
}
.btn-private-msg{
	background: #6A6E7A;
	border: 2px solid #6A6E7A;
}
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
	width: 41px;
	height: 42px;
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
	width: 28px;
	height: 14px;
	font-family: Microsoft YaHei;
}
.mid{
	display: flex;
	flex-direction: row;
}
.left{
	width: 601px;
	height: 304px;
	margin-top: 53px;
	background: #FFFFFF;
	border: 1px solid #E4E4E4;
}
.left-tilte{
	width: 571px;
	height: 52px;
	margin: 0px auto;
	border-bottom: 2px solid #EEEEEE;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.left-tilte span{
	font-size: 14px;
	font-weight: 400;
	font-family: Microsoft YaHei;
	color: #000000;
	margin-left: 8px;
	margin-right: 9px;
}
.title-sort{
	width: 110px;
	height: 12px;
	margin-right: 11px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
}
.title-sort span{
	color: #8C8D87;
}
.null-article-content{
	width: 571px;
	height: 248px;
	margin: 0px auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.article-content-div{
	width: 168px;
	height: 117px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.article-content-div span{
	margin-top: 37px;
	font-size: 12px;
	font-weight: 400;
	color: #676666;
	font-family: Microsoft YaHei;
}
.right{
	width: 301px;
	height: 304px;
	margin-top: 53px;
	margin-left: 18px;
}
.user-function{
	background: #FFFFFF;
	width: 100%;
	height: 60px;
	border: 1px solid #E4E4E4;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.function-item{
	width: 98px;
	height: 37px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.function-item span{
	font-size: 14px;
	font-weight: 400;
	font-family: Microsoft YaHei;
}
.function-item-num{
	color: #000000;
}
.function-item-font{
	color: #8C8D87;
	width: 28px;
	height: 16px;
	margin-top: 5px;
}
.userinfo-edit{
	width: 100%;
	height: 234px;
	background: #FFFFFF;
	border: 1px solid #E4E4E4;
	margin-top: 8px;
}
.edit-top{
	width: 272px;
	height: 75px;
	margin: 0px auto;
	border-bottom: 2px solid #EEEEEE;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.edit-top button{
	width: 86px;
	height: 28px;
	background: #6A6E7A;
	border-radius: 14px;
	border: 2px solid #6A6E7A;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: 400;
	font-family: Microsoft YaHei;
}
.edit-top button:hover{
	cursor: pointer;
	opacity: 0.9;
}
.edit-mid{
	width: 272px;
	height: 110px;
	margin: 0px auto;
	border-bottom: 2px solid #EEEEEE;
}
.mid-font-div{
	padding: 18px 0px 28px 14px;
}
.mid-font-div span{
	font-family: Microsoft YaHei;
	font-weight: 400;
}
.mid-font{
	font-size: 12px;
	color: #000000;
}
.complete-degree{
	color: #FE7735;
	font-size: 16px;
}
.progress-bar{
	width: 100%;
	height: 7px;
	background: #BFBFBF;
	border-radius: 4px;
}
.edit-bottom{
	width: 272px;
	height: 45px;
	margin: 0px auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	font-weight: 400;
	font-family: Microsoft YaHei;
}
.bottom-item{
	width: 88px;
	height: 16px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
.bottom-item span{
	padding-right: 10px;
}
.bottom-item img{
	width: 6px;
	height: 12px;
}
</style>