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
                        <span class="userinfo-name">{{userInfo.baseInfo.nickName}}</span>
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
                <UserPageNav></UserPageNav>
                <!-- end of 链接 -->
            </div>
            <!-- end of 内容顶部链接 -->

            <!-- 中部内容 -->
            <div class="mid">
                <!-- 我的文章区域 -->
                <div :class="posts.length===0?'null-article-left':'article-left'">
                    <!-- 文章区域标题 -->
                    <div class="left-tilte">
                        <span>我的文章</span>
                        <div class="title-sort">
                            <span>按时间排序</span>
                            <img src="@/assets/img/common/sort_icon.png">
                        </div>
                    </div>
                    <!-- end of 文章区域标题 -->

                    <!-- 文章内容(无帖子) -->
                    <div class="null-article-content" v-if="posts.length===0">
                        <div class="article-content-div">
                            <img src="@/assets/img/common/edit_article.png">
                            <span>还没有文章，开始<span style="color: #1296DB; cursor: pointer;">写第一篇文章</span></span>
                        </div>
                    </div>
                    <!-- end of 文章内容(无帖子) -->

                    <!-- 文章内容(有帖子) -->
                    <div class="article-content" v-else>
                        <div class="post-line" v-for="(post,index) in posts" :key="index">
                            <div class="article-content-top">
                                <img :src="require('@/assets/img/common/'+userInfo.headPortrait+'.png')">
                                <div class="content-top-right">
                                    <span class="content-top-username">用户{{userInfo.email}}</span>
                                    <span class="content-top-identity">
			    						{{userInfo.school}} &nbsp;&nbsp;{{userInfo.identity}}
			    					</span>
                                </div>
                            </div>
                            <span class="post-title">{{post.title}}</span>

                            <div class="post-content">
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

                            <!-- 底部功能栏 -->
                            <div class="post-bottom">
                                <!-- 左侧功能 -->
                                <div class="bottom-left">
                                    <!-- 作者名 -->
                                    <div class="author-name">
                                        <span v-if="post.reprintedPlace==null">原创</span>
                                        <span v-else>转载&nbsp;
			    							<span style="color: #1296DB;">{{post.reprintedPlace}}</span>
			    						</span>

                                    </div>
                                    <!-- 赞 -->
                                    <div class="praise-div">
                                        <!-- 已点赞图标 -->
                                        <img src="@/assets/img/common/praise_active.png"
                                        v-if="post.options.isPraise">
                                        <img src="../../assets/img/common/praise.png" v-else>
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
                                        <img src="../../assets/img/common/collection.png" v-else>
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
                    </div>
                    <!-- end of 文章内容(有帖子) -->
                </div>
                <!-- end of 我的文章区域 -->

                <!-- 我的信息区域 -->
                <div class="right">
                    <!-- 用户功能 -->
                    <div class="user-function">
                        <div class="function-item" @click="changeShowFocusList">
                            <span class="function-item-num">{{userInfo.attentionNum}}</span>
                            <span class="function-item-font" :style="showFocusList?'color: #1296DB;':''">
                                关注
                            </span>
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

                    <!-- 关注列表区域 -->
                    <div class="userinfo-edit" v-if="showFocusList">
                        <div class="user-focuslist">
                            <!-- 关注列表标题区域 -->
                            <div class="focuslist-title">
                                <span class="focuslist-title-font">关注列表</span>
                                <!-- 收起按钮区域 -->
                                <div class="focuslist-title-packup" @click="changeShowFocusList">
                                    <img src="@/assets/img/common/packup_icon.png">
                                    <span>收回</span>
                                </div>
                            </div>

                            <div class="focuslist-content">
                                <div class="focuslist-content-row"
                                v-for="(person,index) in userInfo.focusList" :key="index">
                                    <img :src="require('@/assets/img/common/'+person.headPortrait+'.png')">
                                    <div class="focuslist-row-right">
                                        <span style="color: #1296DB;">{{person.name}}</span>
                                        <span>{{person.introduction}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
    import VDistpicker from 'v-distpicker'
    import Copyright from '@/component/Copyright'
    import UserPageNav from '@/component/UserPageNav'
    export default {
        name: "Your",
        components: {
            Copyright,
            UserPageNav
        },
        data(){
            return {
                currentRouter: null,
                completeDegree: 0,                          // 基本信息完成度
                showFocusList: false,                       // 显示关注列表
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
                        targetSchool: "华中科技大学",			// 目标院校
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
                posts: [{
                    title: "2022年考研大三寒假可以做什么准备？",
                    content: "看完后按照说的四个步骤实施，如果不上岸，或者成绩不理想，请你回来喷我！言简意赅，通俗易懂，看完你就知道怎么做了。第一步，考研择校，考研择校，是考研中最重要的事情，如果......",
                    author: "林月半",
                    headPortrait: "head_portrait1",			// 头像
                    praiseCount: 40,						// 点赞量
                    talkCount: 2,							// 评论量
                    postImg: null,							// 附图
                    options: {
                        isPraise: true,
                        isTrample: false,
                        isCollect: true,
                        isShare: true,
                        isTalk: true
                    },
                    reprintedPlace: null,					// 转载地址
                    createTime: "2021/01/18"
                },{
                    title: "新手小白如何着手考研？",
                    content: "考研的胖友们速速集合，这篇文章可以解决你备考全程绝大部分问题，从考研择校、考研核心信息、英语、政治、数学、专业课超强可落地复习经验，具体到英语单词怎么背、怎么整理笔记、专业课怎么复习、复试如何脱颖而出等......",
                    author: "林月半",
                    headPortrait: "head_portrait1",			// 头像
                    praiseCount: 57,						// 点赞量
                    talkCount: 10,							// 评论量
                    postImg: "post_img1",					// 附图
                    options: {
                        isPraise: false,
                        isTrample: false,
                        isCollect: false,
                        isShare: false,
                        isTalk: false
                    },
                    reprintedPlace: "知乎",					// 转载地址
                    createTime: "2021/01/14"
                }]
            }
        },
        methods:{
            changeShowFocusList() {
                this.showFocusList = !this.showFocusList
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
            }
        },
        mounted(){
            // 暂时等于，userInfo的信息从后端传入，与后端连接上时，782行删除
            this.userInfo.postNum = this.posts.length
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
    }
    .post-content{
        display: flex;
        flex-direction: row;
        margin-top: 13px;
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
        width: 82px;
        border-right: 1px solid #D2D2D2;
        padding-right: 22px;
        height: 22px;
        display: flex;
        flex-direction: row;
        justify-content: center;
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
    .user-focuslist{
        width: 272px;
        margin: 0px auto;
    }
    .focuslist-title{
        width: 100%;
        height: 47px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        color: #8B8B8B;
    }
    .focuslist-title-font{
        color: #000000;
        margin-left: 14px;
    }
    .focuslist-title-packup{
        cursor: pointer;
    }
    .focuslist-title-packup img{
        padding-right: 7px;
    }
    .focuslist-content-row{
        width: 100%;
        height: 55px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-top: 2px solid #EEEEEE;
    }
    .focuslist-content-row img{
        width: 34px;
        height: 34px;
        margin-right: 12px;
    }
    .focuslist-row-right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size: 12px;
        color: #8B8B8B;
    }
    .focuslist-row-right span{
        line-height: 18px;
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