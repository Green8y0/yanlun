<template>
    <div class="all">
    	<!-- 标题 -->
    	<div class="title-div">
    		<div class="title">
    			<span>{{post.title}}</span>
    			<div class="title-button-div">
    				<button class="title-button-active" v-if="post.options.isCollect">已收藏</button>
    				<button class="title-button" v-else>收藏</button>

    				<button class="title-button-active" v-if="post.userInfo.isFucos">已关注</button>
    				<button class="title-button" v-else>关注ta</button>

    				<button class="title-button">写评论</button>
    			</div>
    		</div>
    	</div>
    	<!-- end of 标题 -->

    	<div class="container">
    		<!-- 左侧内容 -->
    		<div class="content-left">
    			<!-- 帖子内容 -->
    			<div class="post-content-div">
    				<div class="post-content">
		    			<span class="content-subtitle">{{post.subTitle}}</span>
		    			<!-- 帖子附图 -->
		    			<img class="post-content-title-img" v-if="post.postImg"
		    			:src="require('@/assets/img/common/'+post.postImg+'.png')">

		    			<div class="post-content-detail" v-for="(row,index) in post.contents" :key="index">
		    				<span class="detail-font">{{row}}</span>
		    			</div>
    				</div>
    			</div>
    			<!-- end of 帖子内容 -->

    			<!-- 评论区域 -->
    			<div class="talk-div">
    				<span>
    					查看全部 {{post.talkCount}} 条评论
    				</span>
    			</div>
    			<!-- end of 评论区域 -->
    		</div>
    		<!-- end of 左侧内容 -->

    		<!-- 右侧内容 -->
    		<div class="content-right">
    			<!-- 作者名片 -->
    			<div class="businessCard-div">
    				<div class="businessCard-content">
    					<span class="businessCard-title">作者名片</span>
    					<!-- 头像、作者、简介 -->
    					<div class="businessCard-userInfo-div">
    						<img :src="require('@/assets/img/common/'+post.userInfo.headPortrait+'.png')">
    						<div class="author-introduce">
    							<span class="author">{{post.userInfo.author}}</span>
    							<span>{{post.userInfo.authorIntroduce}}</span>
    						</div>
    					</div>

    					<!-- 大学、专业 -->
    					<div class="university-major">
    						<img src="@/assets/img/common/certification_icon.png">
    						<span>{{post.userInfo.authorUniversity}}&nbsp;</span>
    						<span>{{post.userInfo.authorMajor}}硕士</span>
    					</div>

    					<!-- 作者数据 -->
    					<div class="author-data">
    						<div class="author-data-item">
    							<span class="author-data-title">收藏</span>
    							<span>{{post.userInfo.collectionNum}}</span>
    						</div>
    						<div class="author-data-item">
    							<span class="author-data-title">文章</span>
    							<span>{{post.userInfo.postNum}}</span>
    						</div>
    						<div class="author-data-item">
    							<span class="author-data-title">粉丝</span>
    							<span>{{post.userInfo.myFan}}</span>
    						</div>
    					</div>

    					<div class="author-page">
    						<span @click="goYour()">去Ta的主页逛逛</span>
    						<img src="@/assets/img/common/edit_userinfo.png">
    					</div>
    				</div>
    			</div>
    			<!-- end of 作者名片 -->

    			<!-- 相关推荐 -->
    			<div class="recommend-div">
    				<!-- 相关推荐标题 -->
    				<div class="recommend-title">
    					<span class="recommend-title-left">相关推荐</span>
    					<div class="recommend-title-right">
    						<img src="@/assets/img/common/refresh_icon.png">
    						<span>换一换</span>
    					</div>
    				</div>

    				<div class="recommend-content">
    					<div class="recommend-content-row" v-for="(recommend,index) in recommends" :key="index">
    						<span class="serial-number">{{recommend.id}}</span>
    						<span class="recommend-content-font">{{recommend.title}}</span>
    					</div>
    				</div>
    			</div>
    			<!-- end of 相关推荐 -->

    			<!-- 网站版权信息区域 -->
                <Copyright></Copyright>
    			<!-- end of 网站版权信息区域 -->
    		</div>
    		<!-- end of 右侧内容 -->
    	</div>
    </div>
</template>

<script>
	import Copyright from '@/component/Copyright'
    export default {
        name: "passage",
        components: {
            Copyright
        },
        data() {
        	return{
        		// 后台获取的网站信息
        		websiteInfo: {
        			tel: '123456789',			// 网站联系电话
        			email: '123456789@qq.com'	// 网站联系邮箱
        		},
        		post: {
        			title: "新手小白如何着手考研？",
        			subTitle: "高能干货预警！22考研看这一篇就够了，妥妥的不看后悔系列！",		// 副标题(加粗)
        			userInfo: {													// 作者信息
	        			author: "林月半",										// 作者
	        			authorIntroduce: "一个努力上进、很好相处的...",			// 作者简介
	        			authorUniversity: "南京大学",							// 所在大学
	        			authorMajor: "新闻与传播学",								// 所修专业
	        			headPortrait: "passage_head",							// 头像
	        			collectionNum: 102,										// 我的收藏
	        			postNum: 27,											// 我的帖子
	        			myFan: 16102,											// 我的粉丝
	        			isFucos: false											// 是否关注
        			},
        			praiseCount: 24000,											// 点赞量
        			talkCount: 1125,											// 评论量
        			postImg: "post_img1",										// 附图
        			options: {													// 是否赞/踩/收藏/分享/评论
        				isPraise: true,
        				isTrample: false,
        				isCollect: true,
        				isShare: true,
        				isTalk: true
        			},
        			contents: [
        				"考研的胖友们速速集合，这篇文章可以解决你备考全程绝大部分问题，从考研择校、考研核心信息、英语、政治、数学、专业课超强可落地复习经验，具体到英语单词怎么背、怎么整理笔记、专业课怎么复习、复习如何脱颖而出等......",
        				"学姐二本上岸南京大学，本文总结了我考研期间亲身实践后对我最有效的方法，对于考研来说，我们应该争取用最少的实践获得最高的分数。所以在写这篇文章时，我遵循的原则时：实践最少，分数最大化的复习方法，保证这篇文章中的方法可执行、可落地。相看英语、政治、数学、专业课复习规划及技巧的同学直接下拉！",
        				"本文的目标就是让本科跟我一样非211、985的同学，可以在考研道路上找到复习快车道，少踩坑，实现弯道超车，获得相对较高的投资回报率。本文目前共3w+字，想看保姆级择校教程、领课程看这里。",
        				"【完结版】考研的具体流程是什么样的？",
        				"考研胖友可以看看学姐@林月半其他文章哦，有惊喜",
        				"前言；",
        				"在看任何经验贴时，都需要了解作者的背景，包括他的基础、本科学校、上岸学校、复习时间和考研动机等。现在网上太多四个月逆袭，30天政治75分+，七天背完考研单词的宣传了，说实话，可能有这种人，但跟我没关系，也跟大部分人没关系，我只相信考研成功和3个因素有关：投入的时间、运用的方法和个人的悟性。",
        				"所以在文章开头，我先做一个自我介绍：",
        				"我本科就读于某8线城市的二本，本人曾被迫参加过各类比赛，成功拿到了参与奖（尴尬）。大学期间，英语挂科总计2次，专业课挂科一次，补考均顺利通过（鼓掌）。由于我经常逃课，专业课挂科后，老师通知我去她办公室，我居然不知道老师是哪位（尴尬），曾有休学打算，遭到父母一致反对故继续念书。后机缘巧合听了一次考研分享（恰好那天没逃课），内心充满崇拜之情，随机备战南大，一战上岸。",
        				"顺带也介绍一下本文数学经验的主笔（虽然他还没写完，但怕其不高兴，也勉强介绍下）：学长本科就读于211高校，一志愿报考某top5高校(没考上），调剂至985高校（厉害）。",
        				"如果你决定了考研，或者有考研的想法，但是对于一些基本流程不是很了解。除了看我写给大家的一些文章之外，还可以听一下【免费的】考研择校&规划课程。系统了解整体规划，对理解考研比较有帮助。"
        			],
        			createTime: "2021/01/14"
        		},
        		recommends: [{
        			id: 1,
        			title: "考研小白，如何备战？"
        		},
        		{
        			id: 2,
        			title: "对于不了解考研的「萌新」来说，想..."
        		},
        		{
        			id: 3,
        			title: "新手小白如何着手准备考研？"
        		},
        		{
        			id: 4,
        			title: "有哪些是你考研后才明白的事？"
        		},
        		{
        			id: 5,
        			title: "考研的基本常识，小白必看。"
        		},
        		{
        			id: 6,
        			title: "考研如何准备，流程是怎样的？一点..."
        		},
        		{
        			id: 7,
        			title: "考研应该从大三开始就准备吗？"
        		},
        		{
        			id: 8,
        			title: "新手小白如何着手准备考研？手把手..."
        		},
        		{
        			id: 9,
        			title: "零基础考研怎么准备？"
        		},
        		{
        			id: 10,
        			title: "考研如何稳健的拿到400+？"
        		}]
        	}
        },
        methods: {
        	goYour() {
        		this.$router.push('/your')
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
	/*标题CSS*/
	.title-div{
		width: 100%;
		height: 53px;
		background: #FFFFFF;
		margin-top: 4px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.title{
		width: 981px;
		font-size: 22px;
		color: #000000;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.title-button-div button{
		width: 96px;
		height: 34px;
		border: 1px solid #1296DB;
		font-size: 15px;
		border-radius: 2px;
		margin: 0px 8px;
	}
	.title-button{
		background: #FFFFFF;
		color: #1296DB;
	}
	.title-button:hover{
		background: #1296DB;
		color: #FFFFFF;
		cursor: pointer;
	}
	.title-button-active{
		background: #1296DB;
		color: #FFFFFF;
		cursor: pointer;
	}
	/*end of 标题CSS*/

	/*内容CSS*/
	.container{
		width: 991px;
		/*height: 1015px;*/
		margin: 7px auto;
		display: flex;					/*弹性盒子布局*/
		flex-direction: row;
	}

	/*左侧内容*/
	.content-left{
		width: 694px;
	}
	.post-content-div{
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.post-content{
		width: 645px;
		margin: 0px auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.content-subtitle{
		font-size: 18px;
		color: #000000;
		font-weight: bold;
		padding-top: 28px;
		padding-bottom: 34px;
	}
	.post-content-title-img{
		margin: 0px auto;
		padding-bottom: 17px;
	}
	.post-content-detail{
		width: 100%;
		font-size: 15px;
		color: #000000;
		padding: 17px 0px;
	}
	.detail-font{
		line-height: 20px;
	}
	.talk-div{
		width: 100%;
		height: 76px;
		background: #FFFFFF;
		margin-top: 5px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 16px;
	}
	.talk-div span{
		cursor: pointer;
	}
	/*end of 左侧内容*/

	/*右侧内容*/
	.content-right{
		width: 297px;
		margin-left: 10px;
	}
	/*作者名片CSS*/
	.businessCard-div{
		width: 100%;
		height: 332px;
		background: #FFFFFF;
	}
	.businessCard-content{
		width: 259px;
		height: 100%;
		margin: 0px auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.businessCard-title{
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		font-size: 14px;
		color: #000000;
		border-bottom: 1px solid #EEEEEE;
	}
	.businessCard-userInfo-div{
		width: 100%;
		height: 91px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid #EEEEEE;
	}
	.businessCard-userInfo-div img{
		width: 60px;
		height: 60px;
	}
	.author-introduce{
		width: 180px;
		height: 60px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		margin-left: 12px;
		font-size: 14px;
	}
	.author{
		font-size: 20px;
		color: #000000;
	}
	.university-major{
		width: 100%;
		height: 56px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid #EEEEEE;
		font-size: 14px;
	}
	.university-major img{
		margin: 0px 6px 0px 3px;
	}
	.author-data{
		width: 216px;
		height: 80px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0px auto;
	}
	.author-data-item{
		height: 40px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.author-data-title{
		font-size: 14px;
		margin-bottom: 6px;
	}
	.author-page{
		width: 100%;
		height: 48px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 14px;
	}
	.author-page span{
		cursor: pointer;
	}
	.author-page img{
		width: 7px;
		height: 13px;
		margin-left: 10px;
	}
	/*end of 作者名片CSS*/
	/*相关推荐CSS*/
	.recommend-div{
		width: 297px;
		background: #FFFFFF;
		margin-top: 17px;
	}
	.recommend-title{
		width: 259px;
		height: 40px;
		border-bottom: 1px solid #EEEEEE;
		margin: 0px auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.recommend-title-left{
		font-size: 14px;
		color: #000000;
	}
	.recommend-title-right{
		width: 58px;
		height: 14px;
		font-size: 12px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}
	.recommend-content{
		width: 100%;
	}
	.recommend-content-row{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		font-size: 14px;
		padding: 6px 0px 12px;
	}
	.serial-number{
		width: 25px;
		margin-right: 13px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
	.recommend-content-font{
		color: #3B54C2;
	}
	/*end of 相关推荐CSS*/
	/*end of 右侧内容*/
	/*end of 内容CSS*/
</style>