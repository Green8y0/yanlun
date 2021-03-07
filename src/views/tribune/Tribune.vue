<template>
    <div class="all">
    	<!-- 中部内容区域 -->
        <div class="container">
        	<div class="left">
        		<div class="left-content">
        			<!-- 左侧导航栏 -->
    				<div class="left-nav">
    					<div :class="currentRouter === 'tribune'?'left-a-active':'left-a-inactive'">
    						<router-link to="tribune" class="left-a">
                                <span>推荐</span>
                            </router-link>
    					</div>
    					<div :class="currentRouter === 'circle'?'left-a-active':'left-a-inactive'">
    						<router-link to="circle">
                                <span>圈子</span>
                            </router-link>
    					</div>
    				</div>
    				<!-- end of 左侧导航栏 -->

    				<!-- 帖子区域 -->
    				<div v-for="(post,index) in posts" :key="index">
    					<!-- 帖子标题 -->
	    				<div class="post-title">
	    					<a class="post-a">{{post.title}}</a>
	    				</div>
	    				<!-- end of 帖子标题 -->
	    				
	    				<!-- 帖子内容 -->
	    				<div class="post-content" @click="goPassage()">
	    					<div class="post-img" v-if="post.postImg!=null">
	    						<!-- <img :src="post.postImg" class="post-img"> -->
	    						<img :src="require('@/assets/img/common/'+post.postImg+'.png')"
	    						class="post-img">
	    					</div>
	    					<div :class="post.postImg!=null?'post-text':'post-text-nullImg'">
	    						<span>
	    							{{post.author}}：{{post.content}}
	    							<span class="post-more">了解详情</span>
	    							<img src="../../assets/img/common/more_icon.png" class="more-icon">
	    						</span>
	    					</div>
	    				</div>
	    				<!-- end of 帖子内容 -->

	    				<!-- 底部功能栏 -->
	    				<div class="post-bottom">
	    					<!-- 左侧功能 -->
	    					<div class="bottom-left">
	    						<!-- 作者头像 -->
	    						<img class="head-portrait"
	    						:src="require('@/assets/img/common/'+post.headPortrait+'.png')">
	    						<!-- 作者名 -->
	    						<div class="author-name">
		    						<span>{{post.author}}</span>
	    						</div>
	    						<!-- 赞 -->
	    						<div class="praise-div">
	    							<!-- 已点赞图标 -->
                                    <img src="@/assets/img/common/praise_active.png"
                                    v-if="post.options.isPraise">
                                    <!-- 未点赞图标 -->
                                    <img src="@/assets/img/common/praise.png" v-else>
	    							<span v-if="post.praiseCount<10000">{{post.praiseCount}}</span>
	    							<span v-else>{{post.praiseCount/10000}}万</span>
	    						</div>
	    						<!-- 踩 -->
	    						<div class="trample-div">
	    							<img src="../../assets/img/common/trample.png">
	    						</div>
	    					</div>
	    					<!-- end of 左侧功能 -->

	    					<!-- 右侧功能 -->
	    					<div class="bottom-right">
	    						<div class="post-function" style="margin-left: 25px;">
	    							<!-- 已收藏图标 -->
                                    <img src="@/assets/img/common/collected.png"
                                    v-if="post.options.isCollect">
                                    <!-- 未收藏图标 -->
                                    <img src="@/assets/img/common/collection.png" v-else>
                                    <span v-if="post.options.isCollect">已收藏</span>
                                    <span v-else>收藏</span>
	    						</div>
	    						<div class="post-function">
	    							<img src="@/assets/img/common/shared.png"
                                    v-if="post.options.isShare">
                                    <img src="@/assets/img/common/share.png" v-else>
                                    <span v-if="post.options.isShare">已分享</span>
                                    <span v-else>分享</span>
	    						</div>
	    						<div class="post-function" style="width: 90px;">
	    							<img src="@/assets/img/common/talked.png"
                                    v-if="post.options.isTalk">
                                    <img src="@/assets/img/common/talk.png" v-else>
	    							<span v-if="post.options.isTalk">已评论</span>
                                    <span v-else-if="post.talkCount<10000">{{post.talkCount}}条评论</span>
	    							<span v-else>{{post.talkCount/10000}}万条评论</span>
	    						</div>
	    						<div class="post-function">
	    							<span>{{post.createTime}}</span>
	    						</div>
	    					</div>
	    					<!-- end of 右侧功能 -->
	    				</div>
	    				<!-- end of 底部功能栏 -->
    				</div>
    				<!-- end of 帖子区域 -->
        		</div>
        	</div>

        	<!-- 右侧内容区域 -->
    		<div class="right">
    			<!-- 右侧导航栏区域 -->
                <UserOptionsNav :userInfo="userInfo"></UserOptionsNav>
    			<!-- end of 右侧导航栏区域 -->

    			<!-- 右侧轮播图区域 -->
    			<Carousel></Carousel>
    			<!-- end of 右侧轮播图区域 -->

    			<!-- 右侧帖子区域 -->
    			<PostOptionsNav :userInfo="userInfo"></PostOptionsNav>
    			<!-- end of 右侧帖子区域 -->

    			<!-- 网站版权信息区域 -->
                <Copyright></Copyright>
    			<!-- end of 网站版权信息区域 -->
    		</div>
    		<!-- end of 右侧内容区域 -->

        </div>
        <!-- end of 中部内容区域 -->
    </div>
</template>

<script>
    import {getUrlInfo} from '@/util.js'
    import Copyright from '@/component/Copyright'
    import Carousel from '@/component/Carousel'
    import UserOptionsNav from '@/component/UserOptionsNav'
    import PostOptionsNav from '@/component/PostOptionsNav'
    export default {
        name: "Tribune",
        components: {
            Copyright,
            Carousel,
            UserOptionsNav,
            PostOptionsNav
        },
        data(){
        	return {
        		// 后台获取的用户数据
        		userInfo: {
        			collectionNum: 1,			// 我的收藏
        			historyNum: 10,				// 浏览历史
        			attentionNum: 5,			// 我的关注
        			circleNum: 0,				// 我的圈子
        			postNum: 1,					// 我的帖子
        			draftNum: 0,				// 草稿箱
        			myFan: 0					// 我的粉丝
        		},
                currentRouter: null,
        		posts: [{
        			title: "新手小白如何着手考研？",
        			content: "考研的胖友们速速集合，这篇文章可以解决你备考全程绝大部分问题，从考研择校、考研核心信息、英语、政治、数学、专业课超强可落地复习经验，具体到英语单词怎么背、怎么整理笔记、专业课怎么复习、复试如何脱颖而出等......",
        			author: "林月半",
        			headPortrait: "head_portrait1",			// 头像
        			praiseCount: 24000,						// 点赞量
        			talkCount: 1125,						// 评论量
        			postImg: "post_img1",					// 附图
                    options: {                              // 是否赞/踩/收藏/分享/评论
                        isPraise: true,
                        isTrample: false,
                        isCollect: true,
                        isShare: true,
                        isTalk: true
                    },
        			createTime: "2021/01/14"
        		},
        		{
        			title: "考研真的比高考简单吗？",
        			content: "高考我们只负责学就行了，参考书目、考试重点、备考方案、甚至什么时候学什么科目，做什么试题，老师都给我们规划好了。（无脑学就行了）而面对考研，我们却始终手足无措......",
        			author: "Nancy",
        			headPortrait: "head_portrait2",
        			praiseCount: 10000,
        			talkCount: 937,
        			postImg: null,
                    options: {                              // 是否赞/踩/收藏/分享/评论
                        isPraise: true,
                        isTrample: false,
                        isCollect: true,
                        isShare: true,
                        isTalk: true
                    },
        			createTime: "2020/01/01"
        		},
        		{
        			title: "现在普通二本考研有多难？",
        			content: "真的很难，考研给我的感觉就是过五关斩六将。 本科是一所非常普通的二本，现在已经上岸某211院校。 难在择校。二本考研第一步就是难在择校上，我很想往高处考......",
        			author: "无忧小新",
        			headPortrait: "head_portrait3",
        			praiseCount: 1025,
        			talkCount: 286,
        			postImg: null,
                    options: {                              // 是否赞/踩/收藏/分享/评论
                        isPraise: true,
                        isTrample: false,
                        isCollect: true,
                        isShare: true,
                        isTalk: true
                    },
        			createTime: "2020/01/14"
        		},
        		{
        			title: "考研有必要买平板吗？",
        			content: "还有3个多星期就要考试了，现在买是有点晚了，还没有过新鲜劲儿就该考试了。对于下一年备考乃至刚上大学的同学，生活在后信息时代，不夸张的说iPad已经和手机、电脑并列为大学生三件套了，可以考虑。电脑和平板二者体验差别很大，答主说自己......",
        			author: "怪兽小天",
        			headPortrait: "head_portrait4",
        			praiseCount: 1025,
        			talkCount: 286,
        			postImg: "post_img4",
                    options: {                              // 是否赞/踩/收藏/分享/评论
                        isPraise: true,
                        isTrample: false,
                        isCollect: true,
                        isShare: true,
                        isTalk: true
                    },
        			createTime: "2020/01/14"
        		},
        		{
        			title: "为什么图书馆里很多同学都很努力复习考研，但大部分人却考不上呢？",
        			content: "2020考生，一战上岸。寝室五个同学准备考研，我们一起吃饭，一起占位，一起去图书馆学习，最后只有我一个上岸的。他们以及我自己身上存在的一些问题，也算是亲身经历过的，写出来，分享给大家。1.假努力。大家应......",
        			author: "西瓜皮爱学习",
        			headPortrait: "head_portrait4",
        			praiseCount: 204,
        			talkCount: 59,
        			postImg: "post_img5",
                    options: {                              // 是否赞/踩/收藏/分享/评论
                        isPraise: true,
                        isTrample: false,
                        isCollect: true,
                        isShare: true,
                        isTalk: true
                    },
        			createTime: "2020/01/14"
        		},
        		{
        			title: "考研失败是什么感觉？",
        			content: "耻辱。我第一次考研失败之后最大的感觉就是耻辱，而且是双重的。第一重耻辱是考本校的研究生没考上。对此，我找的借口是，我是跨专业的，所以失败情有可原。随后，我发现许多人都是跨专业的，人家考上了。借口破.......",
        			author: "苍老的小屁孩",
        			headPortrait: "head_portrait6",
        			praiseCount: 1849,
        			talkCount: 304,
        			postImg: "post_img6",
                    options: {                              // 是否赞/踩/收藏/分享/评论
                        isPraise: true,
                        isTrample: false,
                        isCollect: true,
                        isShare: true,
                        isTalk: true
                    },
        			createTime: "2020/01/05"
        		},
        		{
        			title: "你考研到底是为了什么？",
        			content: "考研前以为这个世界对我而言已经是灰色的了，未来混个毕业证，父母帮着点去央企混个搬砖工作，然后拉关系，站对队伍，考考证，这辈子也就这样糊弄过去了……，2015年4月1日前，2020年3月26日凌晨：，在深夜中还无法入......",
        			author: "匿名用户",
        			headPortrait: "head_portrait6",
        			praiseCount: 10000,
        			talkCount: 657,
        			postImg: "post_img7",
                    options: {                              // 是否赞/踩/收藏/分享/评论
                        isPraise: true,
                        isTrample: false,
                        isCollect: true,
                        isShare: true,
                        isTalk: true
                    },
        			createTime: "2020/03/26"
        		},
        		{
        			title: "如何看待大学生跟风似的考研？",
        			content: "知乎小透明，第一次过百赞，真的太感谢各位看官了。评论区中大多数人还是很正能量的，这很棒，当然，也有一些别的声音。我觉得我有必要解释一下。我想大部分能看到这个问题......",
        			author: "程天乐",
        			headPortrait: "head_portrait8",
        			praiseCount: 2303,
        			talkCount: 393,
        			postImg: null,
                    options: {                              // 是否赞/踩/收藏/分享/评论
                        isPraise: true,
                        isTrample: false,
                        isCollect: true,
                        isShare: true,
                        isTalk: true
                    },
        			createTime: "2020/11/01"
        		},
        		{
        			title: "考研不考双一流还不如不考吗？",
        			content: "题主注意辨别，回答里灌鸡汤，站着说话不腰疼的人太多了。我本科985，考研北大，二战两次都是北大，没考上。考研的时候觉得清北刚刚好，985看不上，看经验贴觉得考研还挺轻松，等真正自己考了，真的要哭。考研落榜的太......",
        			author: "卿卿",
        			headPortrait: "head_portrait8",
        			praiseCount: 5572,
        			talkCount: 986,
        			postImg: "post_img9",
                    options: {                              // 是否赞/踩/收藏/分享/评论
                        isPraise: true,
                        isTrample: false,
                        isCollect: true,
                        isShare: true,
                        isTalk: true
                    },
        			createTime: "2020/12/26"
        		}]
        	}
        },
        methods:{
        	showAuthor(){
        		// 修改作者的显示,length>4仅显示部分作者名
        		for (var i = 0; i < this.posts.length; i++) {
        			var post = this.posts[i]
        			if (post.author.length>4) {
        				this.posts[i].author = post.author.substr(0,3)+"..."
        				console.log(this.posts[i].author)
        			}
        		}
        	},
            checkCurrentRouter(){
                let urlInfo = getUrlInfo()
                this.currentRouter = urlInfo.currentRouter
                console.log('currentRouter=',this.currentRouter)
            },
			goMyCircle(){
                // 去圈子页
				this.$router.push("/mycircle");
			},
            goPassage(){
                // 去文章详情页
                this.$router.push('/passage')
            }
        },
        mounted(){
        	this.showAuthor()
            // 设置当前页面的CSS
            this.checkCurrentRouter()
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
    	width: 1103px;
    	/*height: 1911.11px;*/
    	margin: 16px auto;
    	display: flex;					/*弹性盒子布局*/
    }
    .left{
    	width: 659.9px;
    	background: #FFFFFF;
    }
    .left-content{
    	width: 584px;
    	height: 90%;
    	margin: 0px auto;
    }
    .left-nav{
    	width: 100%;
    	height: 59px;
    	border-bottom: 2px solid #EEEEEE;
    	display: flex;
    	flex-direction: row;
    	justify-content: flex-start;
    	align-items: center;
    }
    .left-a-active{
    	width: 62px;
    	height: 31px;
    	background: #4497F2;
    	border-radius: 10px;
    	margin-right: 30px;
    	display: flex;							/*弹性盒子布局*/
    	align-items: center;					/*盒子内容物纵轴居中*/
    	justify-content: center;				/*盒子内容物横轴居中*/
        
    }
    .left-a-inactive{
    	width: 62px;
    	height: 31px;
    	border-radius: 10px;
    	color: #676666;
    	margin-right: 20px;
    	display: flex;							/*弹性盒子布局*/
    	align-items: center;					/*盒子内容物纵轴居中*/
    	justify-content: center;				/*盒子内容物横轴居中*/
        color: #676666;
    }
    .left-a-active a{
    	color: #FFFFFF;
        font-size: 16px;
    }
    .left-a-inactive a{
        background: #FFFFFF;
        font-size: 16px;
    }
    .post-title{
    	margin: 5px auto 0px;
    	width: 100%;
    	height: 40px;
    	display: flex;
    	flex-direction: row;
    	justify-content: flex-start;
    	align-items: center;
    }
    .post-title:hover{
    	cursor: pointer;
    }
    .post-a{
    	font-size: 16px;
    	font-family: Microsoft YaHei;
    	font-weight: 400;
    	color: #000000;
    	/*line-height: 60px;*/
    }
    .post-content{
    	width: 100%;
    	display: flex;
    	flex-direction: row;
    	justify-content: flex-start;
        cursor: pointer;
    }
    .post-img{
    	width: 240px;
    	height: 120px;
    }
    .post-text{
    	width: 323px;
    	height: 93px;
    	margin: 14px 0px 15px 14px;
    	font-size: 12px;
    	font-weight: 400;
    	color: #000000;
    	font-family: Microsoft YaHei;
    	line-height: 20px;
    }
    .post-text-nullImg{
    	width: 564px;
    	height: 33px;
    	margin: 0px 0px 10px 0px;
    	font-size: 12px;
    	font-weight: 400;
    	color: #000000;
    	font-family: Microsoft YaHei;
    	line-height: 20px;
    }
    .post-more{
    	color: #1296DB;
    	cursor: pointer;
    }
    .more-icon{
    	width: 7px;
    	height: 12px;
    	cursor: pointer;
    	position: relative;
    	top: 2px;
    	left: 8px;
    }
    .post-bottom{
    	width: 100%;
    	height: 55px;
    	border-bottom: 2px solid #EEEEEE;
    	display: flex;
    	flex-direction: row;
    	justify-content: flex-start;
    	align-items: center;
    }
    .bottom-left{
    	width: 220px;
    	height: 30px;
    	border: 1px solid #D2D2D2;
    	border-radius: 13px 0px 0px 13px;
    	padding: 0px;
    	display: flex;
    	flex-direction: row;
    	justify-content: flex-start;
    	align-items: center;
    	font-size: 12px;
    	font-weight: 400;
    	color: #000000;
    	font-family: Microsoft YaHei;
    }
    .head-portrait{
    	width: 24px;
    	height: 24px;
    	margin-left: 8px;
    	margin-right: 10px;
    }
    .author-name{
    	border-right: 1px solid #D2D2D2;
    	padding-right: 22px;
    	height: 22px;
    	display: flex;
    	flex-direction: row;
    	justify-content: flex-start;
    	align-items: center;
    }
    .author-name span{
    	min-width: 48px;
    }
    .praise-div{
    	height: 22px;
    	width: 71px;
    	padding-left: 10px;
    	display: flex;
    	align-items: center;
    }
    .praise-div span{
    	width: 71px;
    	height: 20px;
    	padding: 0px 0px 0px 8px;
    	line-height: 20px;
    	color: #676666;
    	font-size: 12px;
    	font-weight: 400;
    	font-family: Microsoft YaHei;
    }
    .trample-div{
    	height: 22px;
    	display: flex;
    	justify-content: flex-start;
    	align-items: center;
    }
    .bottom-right{
    	height: 30px;
    	width: 362px;
    	display: flex;
    	flex-direction: row;
    	justify-content: flex-start;
    	align-items: center;
    }
    .post-function{
        height: 100%;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #676666;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-left: 14px;
        cursor: pointer;
    }
    .post-function img{
        margin-right: 8px;
    }
    .post-function span{
        min-width: 40px;
        min-height: 13px;
        max-width: 65px;
        max-height: 13px;
    }
    .right{
    	width: 431px;
    	margin-left: 13px;
    }
    .right-nav{
    	background: #FFFFFF;
    	width: 100%;
    	height: 210px;
    	display: flex;
    	flex-direction: column;
    	justify-content: flex-start;
    }
    .right-post{
    	background: #FFFFFF;
    	width: 100%;
    	height: 160px;
    	display: flex;
    	flex-direction: column;
    	justify-content: flex-start;
    	margin-top: 16px;
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