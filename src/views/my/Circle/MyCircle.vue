<template>
    <div class="all">
        <div class="container">
            <!-- 内容顶部链接 -->
            <div class="top">
                <img src="@/assets/img/common/user_background.png" class="top-backgroud">
                <!-- 用户信息 -->
                <div class="top-userinfo">
                    <img :src="require('@/assets/img/common/'+userInfo.headPortrait+'.png')"
                    class="top-headPortrait">
                    <!-- 用户名 -->
                    <div class="userinfo-name-div">
                        <span class="userinfo-name">{{userInfo.baseInfo.nickName}}</span>
                        <img src="@/assets/img/common/edit_icon.png">
                    </div>
                    <!-- 关注和私信按钮 -->
                    <div class="userinfo-btn" v-if="isTourist">
                        <button class="btn-focus-on">关注</button>
                        <button class="btn-private-msg">私信</button>
                    </div>
                </div>
                <!-- end of 用户信息 -->

                <!-- 链接 -->
                <UserPageNav></UserPageNav>
                <!-- end of 链接 -->
            </div>
            <!-- end of 内容顶部链接 -->

            <!-- 中部内容 -->
            <div class="mid">
                <!-- 我的文章区域 -->
                <div :class="circles.length===0?'null-article-left':'article-left'">
                    <!-- 文章区域标题 -->
                    <div class="left-tilte">
                        <span>
                        	她的圈子
                        	<span style="color: #004198;">{{userInfo.circleNum}}
                        		<span style="color: #676666; margin: 0px;">个</span>
                        	</span>
                        </span>
                        <div class="title-sort">
                            <span>按时间排序</span>
                            <img src="@/assets/img/common/sort_icon.png">
                        </div>
                    </div>
                    <!-- end of 文章区域标题 -->

                    <!-- 文章内容(无帖子) -->
                    <div class="null-article-content" v-if="circles.length===0">
                        <div class="article-content-div">
                            <img src="@/assets/img/common/null_circle.png">
                            <span>
                                还没有加入任何圈子，去
                                <router-link to="circle" class="article-link">论坛-圈子</router-link>
                                逛逛
                            </span>
                        </div>
                    </div>
                    <!-- end of 文章内容(无帖子) -->

                    <!-- 圈子行显示 -->
	        		<div :class="index%2===0?'circle-line-div':'circle-line-div-reverse'"
	        		v-for="(circle,index) in circles" :key="index" v-else>
	        			<!-- 圈子介绍 -->
	        			<div class="circle-line-left">
	        				<!-- 校徽、圈名、创建时间、加入人数 -->
	        				<div class="circle-title-div">
	        					<div class="circle-title-left">
		        					<img :src="require('@/assets/img/common/'+circle.circleHead+'.png')">

		        					<!-- title中部 -->
		        					<div class="circle-title-font">
		        						<span>{{circle.circleName}}</span>
		        						<span>{{circle.createTime}}</span>
		        					</div>
	        					</div>

	        					<div class="circle-title-official" v-show="circle.isOfficial">官方</div>
	        					<div class="circle-title-members">{{circle.members/1000}}K</div>
	        				</div>

	        				<button class="circle-button-inactive">
	        					退出圈子
	        				</button>
	        				<div>
	        					<span class="seniors-span">
	        						今日更新&nbsp;
	        						<span class="seniors-name" v-if="circle.todayUpdata>=99">99 +</span>
	        						<span class="seniors-name" v-else>{{circle.todayUpdata}}</span>
	        						&nbsp;篇文章，快来看看吧
	        					</span>
	        				</div>
	        			</div>
	        			<!-- end of 圈子介绍 -->

	        			<!-- 圈子图片 -->
	        			<div class="circle-line-right" @click="goCircleDetail"
	        			@mouseenter="changeshowMask(index)" @mouseleave="changeshowMask(index)">
	        				<img :src="require('@/assets/img/common/'+circle.circleImg+'.png')">

	        				<!-- 圈子遮罩层 -->
	        				<div class="circle-img-mask" v-show="circle.showMask">
	        					<!-- 圈子简介 -->
	        					<span v-for="(row,index) in circle.introduction" :key="index">
	        						{{row}}
	        						<div class="more-details-div"
		        						v-show="circle.introduction.length > 0 &&
		        						index === circle.introduction.length-1">
		        						<span style="color: #50B1DB;">了解详情</span>
		        						<img src="@/assets/img/common/more_icon2.png">
		        					</div>
	        					</span>

	        				</div>
	        			</div>
	        			<!-- end of 圈子图片 -->
	        		</div>
	        		<!-- end of 圈子行显示 -->
                </div>
                <!-- end of 我的文章区域 -->

                <!-- 我的信息区域 -->
                <div class="right">
                    <!-- 关注列表区域 -->
                    <FocusList :userInfo="userInfo"></FocusList>
                    <!-- end of 关注列表区域 -->

                    <div class="userinfo-edit">
                        <div class="edit-top">
                            <button>点击认证</button>
                        </div>
                        <div class="edit-mid">
                            <div class="mid-font-div">
                                <span class="mid-font">个人资料完成度 
                                    <span class="complete-degree">{{completeDegree}}</span>
                                </span>
                            </div>
                            <!-- 进度条 -->
                            <div class="progress-bar"></div>
                            <!-- end of 进度条 -->

                            <div class="progress-bar-completed" :style="{width:completeDegree}"></div>

                            <!-- 个人信息显示区域 -->
                            <!-- 真实姓名显示 -->
                            <div v-if="userInfo.baseInfo.realName.length>0"
                            class="show-personalInfo-line" style="border: none;">
                                <img src="@/assets/img/common/realName_icon.png" class="show-personalInfo-img">
                                <span class="show-personalInfo-font">{{userInfo.baseInfo.realName}}</span>
                            </div>

                            <!-- 所在地显示 -->
                            <div class="show-personalInfo-line" v-if="userInfo.baseInfo.location.length>0">
                                <img src="@/assets/img/common/location_icon.png" class="show-personalInfo-img">
                                <span class="show-personalInfo-font">{{userInfo.baseInfo.location}}</span>
                            </div>

                            <!-- 生日显示 -->
                            <div class="show-personalInfo-line" v-if="userInfo.baseInfo.birthday.length>0">
                                <img src="@/assets/img/common/birthday_icon.png" class="show-personalInfo-img">
                                <span class="show-personalInfo-font">{{userInfo.baseInfo.birthday}}</span>
                            </div>

                            <!-- 本科院校显示 -->
                            <div class="show-personalInfo-line"
                            v-if="userInfo.baseInfo.underGraduateSchool.length>0">
                                <img src="@/assets/img/common/underGraduateSchool_icon.png"
                                class="show-personalInfo-img">
                                <span class="show-personalInfo-font">
                                    本科院校&nbsp;&nbsp;&nbsp;{{userInfo.baseInfo.underGraduateSchool}}
                                </span>
                            </div>

                            <!-- 目标院校显示 -->
                            <div class="show-personalInfo-line"
                            v-if="userInfo.baseInfo.targetSchool.length>0">
                                <img src="@/assets/img/common/targetSchool_icon.png"
                                class="show-personalInfo-img">
                                <span class="show-personalInfo-font">
                                    目标院校&nbsp;&nbsp;&nbsp;{{userInfo.baseInfo.targetSchool}}
                                </span>
                            </div>

                            <!-- 考研目标显示 -->
                            <div class="show-personalInfo-line"
                            v-if="userInfo.baseInfo.postGraduateGoal.length>0">
                                <img src="@/assets/img/common/postGraduateGoal_icon.png"
                                class="show-personalInfo-img" style="margin-left: 0px;">
                                <span class="show-personalInfo-font">
                                    考研目标&nbsp;&nbsp;&nbsp;{{userInfo.baseInfo.postGraduateGoal}}
                                </span>
                            </div>
                            
                            <!-- 简介显示 -->
                            <div class="show-personalInfo-textarea"
                            v-if="userInfo.baseInfo.introduction.length>0">
                                <img src="@/assets/img/common/introduction_icon.png"
                                class="show-personalInfo-img">
                                <span class="show-personalInfo-font">
                                    {{userInfo.baseInfo.introduction}}
                                </span>
                            </div>
                            <!-- end of 个人信息显示区域 -->
                        </div>
                    </div>

                    <!-- 网站版权信息区域 -->
                    <Copyright></Copyright>
                    <!-- end of 网站版权信息区域 -->
                </div>
                <!-- end of 我的信息区域 -->
            </div>
            <!-- end of 中部内容 -->
        </div>
    </div>
</template>

<script>
	import {getUrlInfo} from '@/util.js'
    import Copyright from '@/component/Copyright'
    import UserPageNav from '@/component/UserPageNav'
    import FocusList from '@/component/FocusList'
    export default {
        name: "MyCircle",
        components: {
            Copyright,
            UserPageNav,
            FocusList
        },
        data(){
            return {
                currentRouter: null,
                completeDegree: 0,                          // 基本信息完成度
                isTourist: false,                           // 是否是游客
                // 后台获取的用户数据
                userInfo: {
                    email: '1234567890@qq.com',
                    school: "中南民族大学",
                    identity: "学生",
                    headPortrait: "user_head1",
                    // 用户数据的基本信息
                    baseInfo: {
                        loginName: "",						// 登录名
                        nickName: "",						// 昵称
                        realName: "",						// 真实姓名
                        location: "",                       // 所在地
                        sex: "男",							// 性别
                        birthday: "",						// 生日
                        targetSchool: "",					// 目标院校
                        postGraduateGoal: "",			    // 考研目标(专硕/学硕)
                        registerTime: "2021-01-21",			// 注册时间
                        underGraduateSchool: "",			// 本科院校
                        introduction: ""					// 简介
                    },
                    contactInfo:{
                        weixinName: "",						// 微信名
                        qqName: ""							// qq号
                    },
                    focusList: [{
                        name: "林月半",
                        headPortrait: "head_portrait1",
                        introduction: "一个努力上进、很好相处的学长！"
                    },
                    {
                        name: "怪兽小天",
                        headPortrait: "head_portrait4",
                        introduction: "一个喜欢交流的人，希望在这里找到志同..."
                    }],
                    collectionNum: 1,						// 我的收藏
                    historyNum: 10,							// 浏览历史
                    attentionNum: 2,						// 我的关注
                    circleNum: 0,							// 我的圈子
                    postNum: 0,								// 我的帖子
                    draftNum: 0,							// 草稿箱
                    myFan: 0								// 我的粉丝
                },
                circles: [{
                	circleName: "武汉大学研友圈",						// 圈名
                	members: "10000",								// 加入人数
                	seniors: ["林一凡","茂子凯"],						// 前辈真实姓名
                	circleHead: "wuhan_university_logo",			// 学校logo
                	circleImg: "wuhan_university_img1",				// 学校展示图片
                	isOfficial: false,								// 官方标志
                	isJoin: true,									// 是否加入
                	showMask: false,								// 是否显示遮罩层
                	todayUpdata: 78,								// 今日跟新帖子数
                	introduction: [
                		"我愿意做一只小狐狸",
                		"守着我的山，守着我的树",
                		"守着我的湖泊和城堡",
                		"守着云起云落间，远行的少年"],					// 简介
                	createTime: "2021/01/25"						// 创建时间
                },
                {
                	circleName: "武汉大学",
                	members: "22000",
                	seniors: ["凯伊一","吴泽言"],
                	circleHead: "wuhan_university_logo",
                	circleImg: "wuhan_university_img2",
                	isOfficial: true,
                	isJoin: false,
                	showMask: false,
                	todayUpdata: 100,
                	introduction: [],
                	createTime: "2021/01/27"
                },
                {
                	circleName: "清华大学",
                	members: "26000",
                	seniors: ["江楚楚","莫小晴"],
                	circleHead: "qinghua_university_logo",
                	circleImg: "qinghua_university_img",
                	isOfficial: true,
                	isJoin: false,
                	showMask: false,
                	todayUpdata: 98,
                	introduction: [],
                	createTime: "2021/01/21"
                }]
            }
        },
        methods:{
        	changeshowMask(e) {
        		this.circles[e].showMask = !this.circles[e].showMask
        	},
            calculateCompleteDegree(){
                // 计算基本信息填写完成度
                // 注册时间不需要计入完成度
                var count = -1;
                for (let key in this.userInfo.baseInfo) {
                    if (this.userInfo.baseInfo[key].length > 0) {
                        count++
                    }
                }
                this.completeDegree = count*100/10 + '%'
                console.log("基本信息填写完成度=",this.completeDegree)
            },
            getLoginName(){
                // 获取登录名
                this.userInfo.baseInfo.loginName = this.userInfo.email.slice(0,-7)
                // 格式化登录名
                this.userInfo.baseInfo.loginName = this.userInfo.baseInfo.loginName.substr(0,3) +
                    "*****" + this.userInfo.baseInfo.loginName.substr(this.userInfo.baseInfo.loginName.length-2)
                console.log("登录名=",this.userInfo.baseInfo.loginName)
            },
            getNickName(){
                // 格式化昵称
                this.userInfo.baseInfo.nickName = "用户" + this.userInfo.email
            },
            checkCurrentRouter(){
                let urlInfo = getUrlInfo()
                this.currentRouter = urlInfo.currentRouter
                console.log('currentRouter=',this.currentRouter)
            },
			goCircleDetail(){
        		this.$router.push('/circledetail')
			}
        },
        mounted(){
            // 暂时等于，userInfo的信息从后端传入，与后端连接上时，782行删除
            this.userInfo.circleNum = this.circles.length
            // 格式化登录名
            this.getLoginName()
            // 格式化昵称
            this.getNickName()
            // 设置当前页面的CSS
            this.checkCurrentRouter()
            // 计算基本信息完成度
            this.calculateCompleteDegree()
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
        /*height: 1000px;*/
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
    .mid{
        min-height: 35%;
        max-height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
    .null-article-left{
        width: 601px;
        height: 304px;
        margin-top: 53px;
        background: #FFFFFF;
        border: 1px solid #E4E4E4;
    }
    .article-left{
        width: 601px;
        max-height: 100%;
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
    .article-link{
        color: #1296DB;
        cursor: pointer;
        display: inline;
    }
    .circle-line-div{
		width: 573px;
		height: 138px;
		margin: 22px auto;
		border: 1px solid #EEEEEE;
		border-radius: 6px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.circle-line-div-reverse{
		width: 573px;
		height: 138px;
		margin: 22px auto;
		border: 1px solid #EEEEEE;
		border-radius: 6px;
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-start;
		align-items: center;
	}
	.circle-line-left{
		width: 50%;
		height: 100%;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.circle-title-div{
		width: 219px;
		height: 35px;
		margin: 15px auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #000000;
		line-height: 15px;
	}
	.circle-title-div img{
		margin-right: 9px;
	}
	.circle-title-left{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.circle-title-official{
		width: 35px;
		height: 26px;
		background: #FFAA23;
		border: 1px solid #FFAA23;
		color: #FFFFFF;
		font-size: 12px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.circle-title-members{
		width: 33px;
		height: 26px;
		border: 1px solid #DCDCDC;
		font-size: 12px;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #676666;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-left: 7px;
	}
	.circle-title-font{
		width: 90px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.circle-button-inactive{
		width: 220px;
		height: 30px;
		margin-bottom: 10px;
		background: #FFFFFF;
		border: 2px solid #EEEEEE;
		border-radius: 2px;
		color: #676666;
		font-size: 12px;
		cursor: pointer;
	}
	.circle-button-inactive:hover{
		width: 220px;
		height: 30px;
		margin-bottom: 10px;
		background: #EEEEEE;
		border: 2px solid #EEEEEE;
		border-radius: 2px;
		color: #000000;
		font-size: 12px;
	}
	.seniors-name{
		font-size: 10px;
		color: #1296DB;
	}
	.seniors-span{
		font-size: 10px;
	}
	.circle-line-right{
    	width: 50%;
    	height: 100%;
    	cursor: pointer;
    }
    .circle-img-mask{
    	width: 97%;
    	height: 100%;
    	background: #353535;
    	border: 1px solid #353535;
    	opacity: 0.7;
    	position: relative;
    	bottom: 103%;
    	font-size: 12px;
    	color: #FFFFFF;
    	line-height: 20px;
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    	align-items: flex-start;
    	padding-left: 8px;
    }
    .circle-img-mask span{
    	display: flex;
    	flex-direction: row;
    	justify-content: flex-start;
    	align-items: center;
    }
    .more-details-div{
    	margin-left: 5px;
    	cursor: pointer;
    	display: flex;
    	flex-direction: row;
    	justify-content: flex-start;
    	align-items: flex-start;
    }
    .more-details-div img{
    	width: 13px;
    	height: 13px;
    	margin-left: 4px;
    	position: relative;
    	top: 3px;
    }
    .article-content{
        width: 571px;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .edit-content{
        width: 571px;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .base-info{
        width: 546px;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .base-title{
        width: 100%;
        height: 47px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #000000;
    }
    .base-title-font{
        font-size: 14px;
    }
    .base-divider{
        width: 455px;
        height: 7px;
        border-top: 1px solid #E7E7E7;
    }
    .edit-save{
        font-size: 12px;
        cursor: pointer;
    }
    .base-info-content{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .info-line{
        width: 100%;
        height: 14px;
        margin: 11px 0px 11px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 12px;
        font-weight: 400;
        font-family: Microsoft YaHei;
        position: relative;
        right: 8px;
    }
    .info-line-edit{
        width: 100%;
        margin: 11px 0px 11px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 12px;
        font-weight: 400;
        font-family: Microsoft YaHei;
        position: relative;
        right: 8px;
    }
    .info-line-left{
        width: 60px;
        height: 13px;
        margin-right: 28px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-start;
    }
    .base-info-th{
        color: #8B8B8B;
    }
    .base-info-td{
        color: #010101;
    }
    .base-info-radio{
        width: 12px;
        height: 13px;
        -webkit-appearance: normal;
    }
    .base-info-radio-font{
        width: 11px;
        height: 11px;
        margin: 0px 11px 0px 4px;
        position: relative;
        bottom: 2px;
    }
    .base-info-date{
        border: 1px solid #CCCCCC;
    }
    .base-info-textarea{
        border: 1px solid #CCCCCC;
        resize: none;
    }
    .introduction-div{
        width: 419px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .introduction-div img{
        width: 12px;
        height: 12px;
        margin-right: 5px;
        cursor: pointer;
    }
    .base-info-tip{
        color: #1296DB;
        cursor: pointer;
    }
    .contact-title{
        width: 100%;
        height: 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #000000;
    }
    .contact-info-content{
        width: 100%;
        min-height: 95px;
        max-height: 115px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .contact-info-td{
        color: #8B8B8B;
    }
    .info-line-text{
        width: 199px;
        height: 30px;
        border: 1px solid #CCCCCC;
        padding-left: 3px;
    }
    .info-line-select{
        height: 22px;
        border: 1px solid #CCCCCC;
        margin-left: 130px;
        padding-left: 10px;
    }
    .post-line{
        width: 100%;
    }
    .post-title{
        font-size: 16px;
        font-weight: 400;
        font-family: Microsoft YaHei;
        color: #000000;
        margin: 16px 0px 13px;
    }
    .post-a{
    	font-size: 16px;
    	color: #000000;
    }
    .post-content{
        display: flex;
        flex-direction: row;
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
        height: 40px;
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
    .author-name{
        width: 68px;
        border-right: 1px solid #D2D2D2;
        padding-left: 10px;
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
    .article-content-top{
        width: 100%;
        height: 60px;
        margin-top: 12px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        font-family: Microsoft YaHei;
        font-weight: 400;
        font-size: 14px;
    }
    .article-content-top img{
        width: 50px;
        height: 50px;
    }
    .content-top-right{
        height: 100%;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .content-top-username{
        height: 15px;
        color: #000000;
        margin: 6px 0px 8px;
    }
    .content-top-identity{
        color: #676666;
    }
    .right{
        width: 301px;
        min-height: 488px;
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
        cursor: pointer;
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
        min-height: 110px;
        margin: 0px auto;
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
    .progress-bar-completed{
        width: 20%;
        height: 7px;
        background: #FE7735;
        border-radius: 4px;
        position: relative;
        bottom: 7px;
        margin-bottom: 8px;
    }
    .show-personalInfo-line{
        width: 100%;
        height: 35px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-top: 2px solid #EEEEEE;
    }
    .show-personalInfo-img{
        margin-left: 3px;
    }
    .show-personalInfo-font{
        margin-left: 12px;
        font-size: 12px;
        color: #676666;
        position: relative;
        top: 2px;
    }
    .show-personalInfo-textarea{
        width: 100%;
        min-height: 68px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        border-top: 2px solid #EEEEEE;
        padding-top: 12px;
    }
    .show-personalInfo-textarea img{
        position: relative;
        top: 4px;
    }
    .show-personalInfo-textarea span{
        line-height: 18px;
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