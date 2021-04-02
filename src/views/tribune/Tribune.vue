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
	    							{{post.authorName}}：{{post.content}}
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
	    						:src="this.imgBaseUrl+post.authorHeadPortrait">
	    						<!-- 作者名 -->
	    						<div class="author-name">
		    						<span>{{post.authorName}}</span>
	    						</div>
	    						<!-- 赞 -->
	    						<div class="praise-div">
	    							<!-- 已点赞图标 -->
                                    <img src="@/assets/img/common/praise_active.png"
                                    v-if="post.option.praise">
                                    <!-- 未点赞图标 -->
                                    <img src="@/assets/img/common/praise.png" v-else>
	    							<span v-if="post.praiseCount<10000">{{post.praiseCount}}</span>
	    							<span v-else>{{post.praiseCount/10000}}万</span>
	    						</div>
	    					</div>
	    					<!-- end of 左侧功能 -->

	    					<!-- 右侧功能 -->
	    					<div class="bottom-right">
	    						<div class="post-function" style="margin-left: 25px;">
	    							<!-- 已收藏图标 -->
                                    <img src="@/assets/img/common/collected.png"
                                    v-if="post.option.collect">
                                    <!-- 未收藏图标 -->
                                    <img src="@/assets/img/common/collection.png" v-else>
                                    <span v-if="post.option.collect">已收藏</span>
                                    <span v-else>收藏</span>
	    						</div>

	    						<div class="post-function" style="width: 90px;">
	    							<img src="@/assets/img/common/talked.png"
                                    v-if="post.option.talk">
                                    <img src="@/assets/img/common/talk.png" v-else>
	    							<span v-if="post.option.talk">已评论</span>
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
    			<!-- 导航栏区域 -->
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
    				<div class="nav-line" @click="goMyCircle">
    					<img src="@/assets/img/common/circle_icon.png" class="collection-icon">
    					<span class="line-title">我的圈子</span>
    					<div class="line-num">
    						<span>{{userInfo.circleNum}}</span>
    					</div>
    				</div>
    			</div>
    			<!-- end of 右侧导航栏区域 -->

    			<!-- 轮播图区域 -->
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

    			<!-- 帖子区域 -->
    			<div class="right-post">
    				<!-- 发帖子 -->
    				<div class="nav-line" @click="goEditor">
    					<img src="@/assets/img/common/new_post.png" class="collection-icon">
    					<span class="line-title" >发帖子</span>
    				</div>
    				<!-- 我的帖子 -->
    				<div class="nav-line">
    					<img src="@/assets/img/common/my_post.png" class="collection-icon">
    					<span class="line-title">我的帖子</span>
    					<div class="line-num">
    						<span>{{userInfo.postNum}}</span>
    					</div>
    				</div>
    			</div>
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
	import {getPosts} from '@/network/Tribune.js'
    import Copyright from '@/component/Copyright'
    export default {
        name: "Tribune",
        components: {
            Copyright
        },
        data(){
        	return {
        		// 后台获取的网站信息
        		websiteInfo: {
        			tel: '123456789',			// 网站联系电话
        			email: '123456789@qq.com'	// 网站联系邮箱
        		},
				//分页信息
				start:0,
				length:10,
				//照片信息地址
				imgBaseUrl:'http://47.96.234.106:8080/images/',
        		// 后台获取的用户数据
        		userInfo: {
        			collectionNum: 1,			// 我的收藏
        			historyNum: 10,				// 浏览历史
        			attentionNum: 4,			// 我的关注
        			circleNum: 0,				// 我的圈子
        			postNum: 0,					// 我的帖子
        			draftNum: 0,				// 草稿箱
        			myFan: 0					// 我的粉丝
        		},
        		carouselImgSrc: ['carousel1','carousel2','carousel3','carousel4','carousel5'],
        		currentIndex: 0,
        		timer: '',
                currentRouter: null,
        		posts: []
        	}
        },
        methods:{
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
        	},
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
			goCollection(){
                // 去我的收藏页
				this.$router.push("/Collection")
			},
			goMyCircle(){
                // 去圈子页
				this.$router.push("/mycircle");
			},
			goCircle(){
				this.$router.push("/circle");
			}
			,
            goPassage(){
                // 去文章详情页
                this.$router.push('/passage')
            },
			goEditor(){
				this.$router.push('/putPassage')
			},
			getPosts(){
				getPosts(this.start,this.length).then(res=>{
					console.log(this.posts)
					this.posts=res.posts;
				})
			}
        },
        mounted(){
        	this.showAuthor()
            // 设置当前页面的CSS
            this.checkCurrentRouter()
			//取得信息列表
			this.getPosts();
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
    .right-carousel{
    	width: 100%;
    	height: 184px;
    	margin-top: 16px;
    	overflow: hidden;						/*超出当前区域隐藏*/
    	cursor: pointer;						/*鼠标悬停时光标形状*/
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