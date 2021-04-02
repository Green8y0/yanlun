<template>
    <div class="all">
        <div class="container">
            <!-- 内容顶部链接 -->
            <div class="top">
                <img src="@/assets/img/common/user_background.png" class="top-backgroud">
                <!-- 用户信息 -->
                <div class="top-userinfo">
                    <img :src="this.imgBaseUrl+this.$store.state.clickSchoolImg"
                         class="top-headPortrait">
                    <!-- 用户名 -->
                    <div class="userinfo-name-div">
                        <span class="userinfo-name">{{circleInfo.introduction}}</span>
                    </div>
                    <!-- 关注和私信按钮 -->
                    <div class="userinfo-btn">
                        <button class="btn-focus-on">加入</button>
                        <button class="btn-private-msg">私信</button>
                    </div>
                </div>
                <!-- end of 用户信息 -->

                <!-- 链接 -->
                <CircleDetailNav></CircleDetailNav>
                <!-- end of 链接 -->
            </div>
            <!-- end of 内容顶部链接 -->

            <!-- 中部内容 -->
            <div class="mid">
                <!-- 圈子详情 -->
                <div class="article-left">
                    <!-- 圈子详情导航 -->
                    <div class="left-nav">
                        <router-link to="circledetail" class="left-nav-link"
                                     style="border-right: 2px solid #D7D7D7;">
                            <span>最新动态</span>
                        </router-link>
                        <router-link to="circle" class="left-nav-link">
                            <span>圈子热门</span>
                        </router-link>
                    </div>
                    <!-- end of 圈子详情导航 -->

                    <div class="post-content-div" v-for="(post,index) in posts" :key="index">
                        <div class="post-content">
                            <img :src="imgBaseUrl1+post.headPortrait">
                            <div class="post-content-font">
                                <span>{{post.author}}：</span>
                                <span>{{post.content}}</span>
                            </div>
                        </div>

                        <div class="post-options-div">
                            <!-- 收藏 -->
                            <div class="post-options-item">
                                <img src="@/assets/img/common/collected.png" v-if="post.option.collect">
                                <img src="@/assets/img/common/collection.png" v-else>
                                <span v-if="post.option.collect">已收藏</span>
                                <span v-else>收藏</span>
                            </div>

                            <!-- 收藏 -->
                            <div class="post-options-item">
                                <img src="@/assets/img/common/talked.png" v-if="post.option.talk">
                                <img src="@/assets/img/common/talk.png" v-else>
                                <span v-if="post.talkCount<10000">{{post.talkCount}}条</span>
                                <span v-else>{{post.talkCount/10000}}万条评论</span>
                            </div>
                            <!-- 点赞 -->
                            <div class="post-options-item">
                                <img src="@/assets/img/common/praise_active.png" v-if="post.option.praise">
                                <img src="@/assets/img/common/praise.png" v-else>
                                <span v-if="post.praiseCount<10000">{{post.praiseCount}}</span>
                                <span v-else>{{post.praiseCount/10000}}万</span>
                            </div>
                            <span>{{post.createTime}}</span>
                        </div>
                    </div>
                </div>



                <!-- end of 圈子详情 -->

                <!-- 我的信息区域 -->
                <div class="right">
                    <!-- 关注列表区域 -->
                    <FocusList :userInfo="userInfo"></FocusList>
                    <!-- end of 关注列表区域 -->

                    <PostOptionsNav :userInfo="userInfo"></PostOptionsNav>

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
    import {getCircleComment} from '@/network/circle.js'

    import Copyright from '@/component/Copyright'
    import CircleDetailNav from '@/component/CircleDetailNav'
    import FocusList from '@/component/FocusList'
    import PostOptionsNav from '@/component/PostOptionsNav'
    export default {
        name: "CircleDetail",
        components: {
            Copyright,
            CircleDetailNav,
            FocusList,
            PostOptionsNav
        },
        data(){
            return {
                currentRouter: null,
                completeDegree: 0,                          // 基本信息完成度
                isTourist: false,                           // 是否是游客
                circleInfo: {
                    circleImg: "scuec_university_logo",		// 圈子照片
                    introduction:this.$store.state.clickSchoolIntroduce			// 圈子简介
                },
                imgBaseUrl:'http://47.96.234.106:8080/images/school/',
                imgBaseUrl1:'http://47.96.234.106:8080/images/',
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
                    focusList: [{
                        name: "林月半",
                        headPortrait: "head_portrait1",
                        introduction: "一个努力上进、很好相处的学长！"
                    }, {
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
                posts: []
            }
        },
        methods:{
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
            },
            getCircleComment(){
                getCircleComment(this.$store.state.clickCircleId).then(res=>{
                    this.posts=res.comment;
                })
            }
        },
        mounted(){
            // 暂时等于，userInfo的信息从后端传入，与后端连接上时，782行删除
            // 格式化登录名
            this.getLoginName()
            // 格式化昵称
            this.getNickName()
            // 设置当前页面的CSS
            this.checkCurrentRouter()
            //获取评论
            this.getCircleComment();
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
        width: 126px;
        height: 126px;
    }
    .userinfo-name-div{
        width: 100%;
        height: 25px;
        margin: 13px 0px 15px 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
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
    }
    .article-left{
        width: 601px;
        max-height: 100%;
        margin-top: 53px;
    }
    .left-nav{
        width: 100%;
        height: 62px;
        background: #FFFFFF;
        border: 1px solid #E4E4E4;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 14px;
    }
    .left-nav-link{
        width: 291px;
        height: 37px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .router-link-active{
        color: #50B1DB;
    }
    /*end of 圈子详情导航栏*/
    .post-content-div{
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #E4E4E4;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
    }
    .post-content{
        width: 100%;
        margin-left: 15px;
        margin-top: 14px;
        font-size: 16px;
        color: #000000;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .post-content img{
        width: 50px;
        height: 50px;
    }
    .post-content-font{
        width: 488px;
        margin-left: 17px;
        line-height: 25px;
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .post-options-div{
        width: 549px;
        height: 44px;
        border-top: 2px solid #E4E4E4;
        margin-top: 26px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
    }
    .post-options-item{
        width: 70px;
        height: 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .post-options-item span{
        margin-left: 3px;
    }
    /*end of 左侧内容*/
    /*右侧内容*/
    .right{
        width: 301px;
        min-height: 488px;
        margin-top: 53px;
        margin-left: 18px;
    }
    /*父组件修改子组件的样式
	.当前包裹子组件的类名 /deep/ .子组件中要修改样式的类名
    */
    .right /deep/ .right-post{
        border: 1px solid #E4E4E4;
    }
    .right /deep/ .line-title{
        width: 67%;
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