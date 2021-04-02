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
                <div :class="posts.length===0?'null-article-left':'article-left'">
                    <!-- 文章区域标题 -->
                    <div class="left-tilte">
                        <span>
                        	她的收藏
                        	<span style="color: #004198;">{{userInfo.collectionNum}}
                        		<span style="color: #676666; margin: 0px;">篇</span>
                        	</span>
                        </span>
                        <div class="title-sort">
                            <span>按时间排序</span>
                            <img src="@/assets/img/common/sort_icon.png">
                        </div>
                    </div>
                    <!-- end of 文章区域标题 -->



                    <!-- 文章内容(无帖子) -->
                    <div class="null-article-content" v-if="posts.length===0">
                        <div class="article-content-div">
                            <img src="@/assets/img/common/null_collect.png">
                            <span>
                                还没有收藏任何文章，去
                                <router-link to="tribune" class="article-link">论坛-推荐</router-link>
                                逛逛
                            </span>
                        </div>
                    </div>
                    <!-- end of 文章内容(无帖子) -->

                    <!-- 文章内容(有帖子) -->
                    <div class="article-content" v-else>
                        <div class="post-line" v-for="(post,index) in posts" :key="index">
                            <!-- 帖子标题 -->
                            <div class="post-title">
                                <a class="post-a">{{post.title}}</a>
                            </div>
                            <!-- end of 帖子标题 -->

                            <!-- 帖子内容 -->
                            <div class="post-content" @click="goPassage">
                                <div class="post-img" v-if="post.postImg!=null">
                                    <!-- <img :src="post.postImg" class="post-img"> -->
                                    <img :src="require('@/assets/img/common/'+post.postImg+'.png')"
                                         class="post-img">
                                </div>
                                <div :class="post.postImg!=null?'post-text':'post-text-nullImg'">
		    						<span>
		    							{{post.author}}：{{post.content}}
		    							<span class="post-more">了解详情</span>
		    							<img src="@/assets/img/common/more_icon.png" class="more-icon">
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
                                        <img src="@/assets/img/common/trample.png">
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
                    </div>
                    <!-- end of 文章内容(有帖子) -->
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
        name: "Collection",
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
                        realName: "张三",						// 真实姓名
                        location: "",                       // 所在地
                        sex: "男",							// 性别
                        birthday: "",						// 生日
                        targetSchool: "华中科技大学",					// 目标院校
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
                    title: "新手小白如何着手考研？",
                    content: "考研的胖友们速速集合，这篇文章可以解决你备考全程绝大部分问题，从考研择校、考研核心信息、英语、政治、数学、专业课超强可落地复习经验，具体到英语单词怎么背、怎么整理笔记、专业课怎么复习、复试如何脱颖而出等......",
                    author: "林月半",
                    email: "123456789@qq.com",
                    headPortrait: "head_portrait1",			// 头像
                    praiseCount: 24000,						// 点赞量
                    talkCount: 1125,						// 评论量
                    postImg: "post_img1",					// 附图
                    options: {								// 是否赞/踩/收藏/分享/评论
                        isPraise: true,
                        isTrample: false,
                        isCollect: true,
                        isShare: true,
                        isTalk: true
                    },
                    reprintedPlace: null,                   // 转载地址
                    createTime: "2021/01/14"
                },
                    {
                        title: "考研真的比高考简单吗？",
                        content: "高考我们只负责学就行了，参考书目、考试重点、备考方案、甚至什么时候学什么科目，做什么试题，老师都给我们规划好了。（无脑学就行了）而面对考研，我们却始终手足无措......",
                        author: "Nancy",
                        email: "123456789@qq.com",
                        headPortrait: "head_portrait2",
                        praiseCount: 10000,
                        talkCount: 937,
                        postImg: null,
                        options: {
                            isPraise: false,
                            isTrample: false,
                            isCollect: true,
                            isShare: false,
                            isTalk: false
                        },
                        reprintedPlace: null,
                        createTime: "2020/01/01"
                    },
                    {
                        title: "现在普通二本考研有多难？",
                        content: "真的很难，考研给我的感觉就是过五关斩六将。 本科是一所非常普通的二本，现在已经上岸某211院校。 难在择校。二本考研第一步就是难在择校上，我很想往高处考......",
                        author: "无忧小新",
                        email: "123456789@qq.com",
                        headPortrait: "head_portrait3",
                        praiseCount: 1025,
                        talkCount: 286,
                        postImg: null,
                        options: {
                            isPraise: false,
                            isTrample: false,
                            isCollect: true,
                            isShare: false,
                            isTalk: false
                        },
                        reprintedPlace: null,
                        createTime: "2020/01/14"
                    },
                    {
                        title: "考研有必要买平板吗？",
                        content: "还有3个多星期就要考试了，现在买是有点晚了，还没有过新鲜劲儿就该考试了。对于下一年备考乃至刚上大学的同学，生活在后信息时代，不夸张的说iPad已经和手机、电脑并列为大学生三件套了，可以考虑。电脑和平板二者体验差别很大，答主说自己......",
                        author: "怪兽小天",
                        email: "123456789@qq.com",
                        headPortrait: "head_portrait4",
                        praiseCount: 1025,
                        talkCount: 286,
                        postImg: "post_img4",
                        options: {
                            isPraise: false,
                            isTrample: false,
                            isCollect: true,
                            isShare: false,
                            isTalk: false
                        },
                        reprintedPlace: null,
                        createTime: "2020/01/14"
                    }]
            }
        },
        methods:{
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
            goPassage(){
                this.$router.push("/passage");
            }
        },
        mounted(){
            // 暂时等于，userInfo的信息从后端传入，与后端连接上时，782行删除
            this.userInfo.collectionNum = this.posts.length
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