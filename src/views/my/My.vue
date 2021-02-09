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
    			<div class="top-nav">
    				<div class="nav-content">
    					<div :class="currentRouter === 'my'?'nav-link-div-active':'nav-link-div'">
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
	    		<div :class="posts.length===0?'null-article-left':'article-left'">
	    			<!-- 文章区域标题 -->
	    			<div class="left-tilte" v-if="!editTag">
	    				<span>我的文章</span>
	    				<div class="title-sort">
	    					<span>按时间排序</span>
	    					<img src="@/assets/img/common/sort_icon.png">
	    				</div>
	    			</div>
	    			<!-- end of 文章区域标题 -->

	    			<!-- 编辑个人信息区域 -->
	    			<div class="edit-content" v-if="editTag">
	    				<!-- 基本信息 -->
	    				<div class="base-info">
	    					<!-- 基本信息标题 -->
	    					<div class="base-title">
	    						<span class="base-title-font">基本信息</span>
	    						<div class="base-divider"></div>
	    						<span class="edit-save" v-if="!baseInfoEdit" @click="changeBaseInfoEdit('edit')">
	    							编辑
	    						</span>
	    						<span class="edit-save" v-else @click="changeBaseInfoEdit('save')">保存</span>
	    					</div>

	    					<!-- 基本信息内容 -->
	    					<div class="base-info-content">
	    						<!-- 登录名 -->
	    						<div class="info-line" style="margin-top: 24px;">
	    							<div class="info-line-left">
		    							<span class="base-info-th">登录名</span>
	    							</div>
	    							<span class="base-info-td">
	    								{{userInfo.baseInfo.loginName}}
	    								<span class="base-info-tip">修改密码</span>
	    							</span>
	    						</div>

	    						<!-- 昵称 -->
	    						<div class="info-line">
	    							<div class="info-line-left">
		    							<span class="base-info-th">昵&nbsp;&nbsp;称</span>
	    							</div>
	    							<!-- 昵称输入框 -->
	    							<input v-if="baseEditTags.editNickName"
	    							type="text" name="weixin" class="info-line-text" 
	    							v-model="userInfo.baseInfo.nickName" placeholder="请输入昵称">

	    							<span class="base-info-td" v-else>{{userInfo.baseInfo.nickName}}</span>
	    						</div>

	    						<!-- 真实姓名 -->
	    						<div class="info-line">
	    							<div class="info-line-left">
		    							<span class="base-info-th">真实姓名</span>
	    							</div>

	    							<!-- 真实姓名输入框 -->
	    							<input v-if="baseEditTags.editRealName"
	    							type="text" name="weixin" class="info-line-text" 
	    							v-model="userInfo.baseInfo.realName" placeholder="请输入真实姓名">

	    							<!-- 可见度 -->
	    							<select v-if="baseEditTags.editRealName"
	    							name="realNameVisibility" class="info-line-select">
	    								<option name="allVisible">所有人可见</option>
	    								<option name="onlyFocusVisible">我关注的人可见</option>
	    								<option name="onlyMyselfVisible">仅自己可见</option>
	    							</select>

	    							<span class="base-info-td" v-else>{{userInfo.baseInfo.realName}}</span>
	    						</div>

	    						<!-- 所在地 -->
	    						<div class="info-line">
	    							<div class="info-line-left">
		    							<span class="base-info-th">所在地</span>
	    							</div>

	    							<span class="base-info-td">{{userInfo.baseInfo.location}}</span>
	    						</div>

	    						<!-- 性别 -->
	    						<div class="info-line">
	    							<div class="info-line-left">
		    							<span class="base-info-th">性&nbsp;&nbsp;别</span>
	    							</div>

	    							<!-- 编辑性别 -->
	    							<div v-if="baseEditTags.editSex">
		    							<input class="base-info-radio" type="radio" name="sex" value="男"
		    							v-model="userInfo.baseInfo.sex">
		    							<span class="base-info-radio-font">男</span>
										<input class="base-info-radio" type="radio" name="sex" value="女"
										v-model="userInfo.baseInfo.sex">
										<span class="base-info-radio-font">女</span>
	    							</div>

	    							<!-- 显示性别 -->
	    							<span class="base-info-td" v-else>{{userInfo.baseInfo.sex}}</span>
	    						</div>

	    						<!-- 生日 -->
	    						<div class="info-line">
	    							<div class="info-line-left">
		    							<span class="base-info-th">生日</span>
	    							</div>

	    							<div v-if="baseEditTags.editBirthday">
	    								<input type="date" name="birthday" class="base-info-date" 
	    								v-model="userInfo.baseInfo.birthday">
	    							</div>
	    							<span class="base-info-td" v-else>{{userInfo.baseInfo.birthday}}</span>
	    						</div>

	    						<!-- 目标院校 -->
	    						<div class="info-line">
	    							<div class="info-line-left">
		    							<span class="base-info-th">目标院校</span>
	    							</div>

	    							<!-- 目标院校输入框 -->
	    							<input v-if="baseEditTags.editTargetSchool"
	    							type="text" name="weixin" class="info-line-text" 
	    							v-model="userInfo.baseInfo.targetSchool" placeholder="请输入正确的考研院校名称">

	    							<!-- 可见度 -->
	    							<select v-if="baseEditTags.editTargetSchool"
	    							name="realNameVisibility" class="info-line-select">
	    								<option name="allVisible">所有人可见</option>
	    								<option name="onlyFocusVisible">我关注的人可见</option>
	    								<option name="onlyMyselfVisible">仅自己可见</option>
	    							</select>

	    							<!-- 目标院校已填写 -->
	    							<span class="base-info-td" v-else-if="userInfo.baseInfo.targetSchool.length>0">
	    								{{userInfo.baseInfo.targetSchool}}
	    							</span>

	    							<!-- 目标院校未填写 -->
	    							<div v-else>
		    							<img src="@/assets/img/common/fill_in_icon.png">
		    							<span class="base-info-tip" @click="onlyChangeTargetSchool">
		    								马上填写
		    								<span class="base-info-td">考研目标院校，让更多的同学认识你</span>
		    							</span>
	    							</div>
	    						</div>

	    						<!-- 考研习题册 -->
	    						<div class="info-line">
	    							<div class="info-line-left">
		    							<span class="base-info-th">考研习题册</span>
	    							</div>
	    							<span class="base-info-td"
	    							v-if="userInfo.baseInfo.postGraduateExercises.length>0">
	    								{{userInfo.baseInfo.postGraduateExercises}}
	    							</span>
	    							<div v-else>
		    							<img src="@/assets/img/common/add_icon.png">
		    							<span class="base-info-tip">
		    								马上选择
		    								<span class="base-info-td">习题类型，可在这个位置看到收藏的习题</span>
		    							</span>
	    							</div>
	    						</div>

	    						<!-- 注册时间 -->
	    						<div class="info-line">
	    							<div class="info-line-left">
		    							<span class="base-info-th">注册时间</span>
	    							</div>
	    							<span class="base-info-td">{{userInfo.baseInfo.registerTime}}</span>
	    						</div>

	    						<!-- 教育经历 -->
	    						<div :class="baseEditTags.editEducationExperience?'info-line-edit':'info-line'">
	    							<div class="info-line-left">
		    							<span class="base-info-th">教育经历</span>
	    							</div>

	    							<!-- 教育经历编辑框 -->
	    							<textarea class="base-info-textarea" placeholder="请输入个人教育经历"
	    							rows="4" cols="30" 
	    							v-if="baseEditTags.editEducationExperience"
	    							v-model="userInfo.baseInfo.educationExperience">
	    							</textarea>

	    							<!-- 可见度 -->
	    							<select v-if="baseEditTags.editEducationExperience"
	    							name="realNameVisibility" class="info-line-select">
	    								<option name="allVisible">所有人可见</option>
	    								<option name="onlyFocusVisible">我关注的人可见</option>
	    								<option name="onlyMyselfVisible">仅自己可见</option>
	    							</select>

	    							<!-- 已填写教育经历 -->
	    							<span class="base-info-td"
	    							v-else-if="userInfo.baseInfo.educationExperience.length>0">
	    								{{userInfo.baseInfo.educationExperience}}
	    							</span>

	    							<!-- 无教育经历 -->
	    							<div v-else>
		    							<img src="@/assets/img/common/fill_in_icon.png">
		    							<span class="base-info-tip" @click="onlyChangeEducationExperience">
		    								马上填写
		    								<span class="base-info-td">自己的教育信息，让更多的同学认识你</span>
		    							</span>
	    							</div>
	    						</div>

	    						<!-- 简介 -->
	    						<div :class="baseEditTags.editIntroduction?'info-line-edit':'info-line'">
	    							<div class="info-line-left">
		    							<span class="base-info-th">简&nbsp;&nbsp;介</span>
	    							</div>

	    							<!-- 简介编辑框 -->
	    							<textarea class="base-info-textarea" placeholder="请输入个人简介"
	    							rows="4" cols="30" 
	    							v-if="baseEditTags.editIntroduction"
	    							v-model="userInfo.baseInfo.introduction">
	    							</textarea>

	    							<!-- 已填写简介 -->
	    							<span class="base-info-td" v-else-if="userInfo.baseInfo.introduction.length>0">
	    								{{userInfo.baseInfo.introduction}}
	    							</span>

	    							<!-- 无简介 -->
	    							<div v-else>
		    							<img src="@/assets/img/common/fill_in_icon.png">
		    							<span class="base-info-tip" @click="onlyChaneIntroduction">
		    								马上填写
		    								<span class="base-info-td">自己的个人介绍，让更多人了解真实的你</span>
		    							</span>
	    							</div>
	    						</div>
	    					</div>
	    				</div>
	    				<!-- end of 基本信息 -->

	    				<!-- 联系信息 -->
	    				<div class="base-info">
	    					<!-- 联系信息标题 -->
	    					<div class="contact-title">
	    						<span class="base-title-font">联系信息</span>
	    						<div class="base-divider"></div>
	    						<span class="edit-save" v-if="!contactInfoEdit"
	    						@click="changeContactInfoEdit('edit')">
	    							编辑
	    						</span>
	    						<span class="edit-save" v-else @click="changeContactInfoEdit('save')">保存</span>
	    					</div>

	    					<!-- 联系信息内容 -->
	    					<div class="contact-info-content">
	    						<!-- 微信 -->
	    						<div class="info-line" style="margin-top: 24px;">
	    							<div class="info-line-left">
		    							<span class="base-info-th">微信</span>
	    							</div>

	    							<!-- 微信号输入框 -->
	    							<input v-if="contactEditTags.editWeixin"
	    							type="text" name="weixin" class="info-line-text" 
	    							v-model="userInfo.contactInfo.weixinName" placeholder="请输入正确的微信号">

	    							<!-- 微信号已填写 -->
	    							<span class="base-info-td" v-else-if="userInfo.contactInfo.weixinName.length>0">
	    								{{userInfo.contactInfo.weixinName}}
	    							</span>

	    							<!-- 微信号未填写 -->
	    							<div v-else>
		    							<img src="@/assets/img/common/fill_in_icon.png">
		    							<span class="base-info-tip" @click="changeWeixinTag">
		    								马上填写
		    								<span class="contact-info-td">你的微信信息</span>
		    							</span>
	    							</div>
	    						</div>

	    						<!-- qq -->
	    						<div class="info-line">
	    							<div class="info-line-left">
		    							<span class="base-info-th">QQ</span>
	    							</div>

	    							<input v-if="contactEditTags.editQQ"
	    							type="text" name="weixin" class="info-line-text" 
	    							v-model="userInfo.contactInfo.qqName" placeholder="请输入正确的QQ号">

	    							<span class="base-info-td" v-else-if="userInfo.contactInfo.qqName.length>0">
	    								{{userInfo.contactInfo.qqName}}
	    							</span>
	    							<div v-else>
		    							<img src="@/assets/img/common/fill_in_icon.png">
		    							<span class="base-info-tip" @click="changeQQTag">
		    								马上填写
		    								<span class="contact-info-td">QQ信息</span>
		    							</span>
	    							</div>
	    						</div>
	    					</div>
	    					<!-- end of 联系信息内容 -->
	    				</div>
	    				<!-- end of 联系信息 -->
	    			</div>
	    			<!-- end of 编辑个人信息区域 -->

	    			<!-- 文章内容(无帖子) -->
	    			<div class="null-article-content" v-else-if="posts.length===0">
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
		    							<img src="../../assets/img/common/praise.png">
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
		    						<div class="post-function">
		    							<img src="../../assets/img/common/collection.png">
		    							<span>收藏</span>
		    						</div>
		    						<div class="post-function">
		    							<img src="../../assets/img/common/share.png">
		    							<span>分享</span>
		    						</div>
		    						<div class="post-function" style="width: 90px;">
		    							<img src="../../assets/img/common/talk.png">
		    							<span v-if="post.talkCount<10000">{{post.talkCount}}条评论</span>
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
	    					<div class="bottom-item" @click="changeEditTag">
								<span>编辑个人信息</span>
								<img src="@/assets/img/common/edit_userinfo.png">
	    					</div>
	    				</div>
	    			</div>

	    			<!-- 网站版权信息区域 -->
	    			<div class="copyright-div">
	    				<div class="copyright-line">
	    					<span class="copyright-font">研论指南 • 研论协议 • 研论隐私保护指引</span>
	    				</div>
	    				<div class="copyright-line">
	    					<span class="copyright-font">应用 • 工作 • 申请开通研论机构号</span>
	    				</div>
	    				<div class="copyright-line">
	    					<span class="copyright-font">侵权举报 • 网上有害信息举报专区</span>
	    				</div>
	    				<div class="copyright-line">
	    					<span class="copyright-font">违法和不良信息举报：{{websiteInfo.tel}}</span>
	    				</div>
	    				<div class="copyright-line">
	    					<span class="copyright-font">联系我们：{{websiteInfo.email}}</span>
	    				</div>
	    			</div>
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
    export default {
        name: "My",
        data(){
        	return {
        		// 后台获取的网站信息
        		websiteInfo: {
        			tel: '123456789',						// 网站联系电话
        			email: '123456789@qq.com'				// 网站联系邮箱
        		},
        		currentRouter: null,
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
	        			realName: null,						// 真实姓名
	        			location: "其他",					// 所在地
	        			sex: "男",							// 性别
	        			birthday: "",						// 生日
	        			targetSchool: "",					// 目标院校
	        			postGraduateExercises: "",			// 考研习题册
	        			registerTime: "2021-01-21",			// 注册时间
	        			educationExperience: "",			// 教育经历
	        			introduction: ""					// 简介
        			},
        			contactInfo:{
        				weixinName: "",						// 微信名
        				qqName: ""							// qq号
        			},
        			collectionNum: 1,						// 我的收藏
        			historyNum: 10,							// 浏览历史
        			attentionNum: 2,						// 我的关注
        			circleNum: 0,							// 我的圈子
        			postNum: 0,								// 我的帖子
        			draftNum: 0,							// 草稿箱
        			myFan: 0								// 我的粉丝
        		},
        		editTag: false,								// 编辑个人信息标志
        		baseInfoEdit: false,						// 编辑所有基本信息标志 或 保存基本信息标志
        		baseEditTags: {
        			editNickName: false,					// 编辑昵称标志
        			editRealName: false,					// 编辑真实姓名标志
        			editLocation: false,					// 编辑所在地标志
        			editSex: false,							// 编辑性别标志
        			editBirthday: false,					// 编辑生日标志
        			editTargetSchool: false,				// 编辑目标院校标志
        			editEducationExperience: false,			// 编辑教育经历标志
        			editIntroduction: false					// 编辑简介标志
        		},
        		contactInfoEdit: false,						// 编辑所有联系信息标志 或 保存联系信息标志
        		contactEditTags: {
        			editWeixin: false,
        			editQQ: false
        		},
        		posts: [{
        			title: "2022年考研大三寒假可以做什么准备？",
        			content: "看完后按照说的四个步骤实施，如果不上岸，或者成绩不理想，请你回来喷我！言简意赅，通俗易懂，看完你就知道怎么做了。第一步，考研择校，考研择校，是考研中最重要的事情，如果......",
        			author: "林月半",
        			headPortrait: "head_portrait1",			// 头像
        			praiseCount: 40,						// 点赞量
        			talkCount: 2,							// 评论量
        			postImg: null,							// 附图
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
        			reprintedPlace: "知乎",					// 转载地址
        			createTime: "2021/01/14"
        		}]
        	}
        },
        methods:{
        	changeEditTag(){
        		// 编辑个人信息
        		this.editTag = !this.editTag
        		console.log("editTag=",this.editTag)
        	},
        	setNickName(){
        		// 修改昵称
        		this.baseEditTags.editNickName = !this.baseEditTags.editNickName
        		console.log("editNickName=",this.baseEditTags.editNickName)
        	},
        	changeNickName(){
        		// 单独修改昵称，且'编辑'按钮修改成'保存'按钮
        		this.changeBaseInfoEdit()
        		this.setNickName()
        	},
        	setRealName(){
        		// 修改真实姓名
        		this.baseEditTags.editRealName = !this.baseEditTags.editRealName
        		console.log("editRealName=",this.baseEditTags.editRealName)
        	},
        	changeRealName(){
        		// 单独修改真实姓名，且'编辑'按钮修改成'保存'按钮
        		this.changeBaseInfoEdit()
        		this.setRealName()
        	},
        	changeSex(){
        		this.baseEditTags.editSex = !this.baseEditTags.editSex
        		console.log("editSex=",this.baseEditTags.editSex)
        	},
        	changeBirthday(){
        		this.baseEditTags.editBirthday = !this.baseEditTags.editBirthday
        		console.log("editBirthday=",this.baseEditTags.editBirthday)
        	},
        	setTargetSchool(){
        		// 修改目标院校
        		this.baseEditTags.editTargetSchool = !this.baseEditTags.editTargetSchool
        		console.log("editTargetSchool=",this.baseEditTags.editTargetSchool)
        	},
        	onlyChangeTargetSchool(){
        		// 单独修改目标院校，且'编辑'按钮修改成'保存'按钮
        		this.changeBaseInfoEdit()
        		this.setTargetSchool()
        	},
        	setEducationExperience(){
        		// 修改教育经历
        		this.baseEditTags.editEducationExperience = !this.baseEditTags.editEducationExperience
        		console.log("editEducationExperience=",this.baseEditTags.editEducationExperience)
        	},
        	onlyChangeEducationExperience(){
        		// 单独修改教育经历，且'编辑'按钮修改成'保存'按钮
        		this.changeBaseInfoEdit()
        		this.setEducationExperience()
        	},
        	setIntroduction(){
        		// 修改简介
        		this.baseEditTags.editIntroduction = !this.baseEditTags.editIntroduction
        		console.log("editIntroduction=",this.baseEditTags.editIntroduction)
        	},
        	onlyChaneIntroduction(){
        		// 单独修改简介，且'编辑'按钮修改成'保存'按钮
        		this.changeBaseInfoEdit()
        		this.setIntroduction()
        	},
        	changeBaseInfoEdit(e){
        		// 基本信息整体编辑
        		if (e === 'edit') {
        			// 编辑
        			// 修改昵称
	        		this.setNickName()
	        		// 修改真实姓名
	        		this.setRealName()
	        		// 修改性别
	        		this.changeSex()
	        		// 修改生日
	        		this.changeBirthday()
	        		// 修改目标院校
	        		this.setTargetSchool()
	        		// 修改教育经历
	        		this.setEducationExperience()
	        		// 修改简介
	        		this.setIntroduction()
        		}else if (e === 'save') {
        			// 保存
        			if (this.baseEditTags.editNickName === this.baseEditTags.editRealName &&
        				this.baseEditTags.editRealName === this.baseEditTags.editTargetSchool &&
        				this.baseEditTags.editTargetSchool === this.baseEditTags.editSex &&
        				this.baseEditTags.editSex === this.baseEditTags.editEducationExperience &&
        				this.baseEditTags.editEducationExperience === this.baseEditTags.editIntroduction) {
        				// 全部保存
        				this.setNickName()
        				this.setRealName()
        				this.changeSex()
        				this.changeBirthday()
        				this.setTargetSchool()
        				this.setEducationExperience()
        				this.setIntroduction()
        			}else if (this.baseEditTags.editTargetSchool) {
        				// 保存目标院校
        				this.setTargetSchool()
        			}else if (this.baseEditTags.editEducationExperience) {
        				// 保存教育经历
        				this.setEducationExperience()
        			}else if (this.baseEditTags.editIntroduction) {
        				// 保存简介
        				this.setIntroduction()
        			}
        		}
        		
        		this.baseInfoEdit = !this.baseInfoEdit
        		console.log("baseInfoEdit=",this.baseInfoEdit)
        	},
        	setWeixin(){
        		// 修改微信号
        		this.contactEditTags.editWeixin = !this.contactEditTags.editWeixin
        		console.log("editWeixin=",this.contactEditTags.editWeixin)
        	},
        	setQQ(){
        		// 修改QQ号
        		this.contactEditTags.editQQ = !this.contactEditTags.editQQ
        		console.log("editQQ=",this.contactEditTags.editQQ)
        	},
        	changeWeixinTag(){
        		// 单独修改'编辑微信号'标志
        		// 编辑保存按钮
        		this.changeContactInfoEdit()
        		this.setWeixin()
        	},
        	changeQQTag(){
        		// 单独修改'编辑QQ号'标志
        		// 编辑保存按钮
        		this.changeContactInfoEdit()
        		this.setQQ()
        	},
        	changeContactInfoEdit(e){
        		console.log("e=",e)
        		// 联系信息整体编辑
        		if (e === 'edit') {
        			// 编辑
        			this.setWeixin()
        			this.setQQ()
        		}else if (e === 'save') {
        			// 保存
        			if (this.contactEditTags.editWeixin === this.contactEditTags.editQQ) {
        				// 保存微信和QQ
        				this.setWeixin()
        				this.setQQ()
        			}else if (this.contactEditTags.editWeixin === true) {
        				// 保存微信
        				this.setWeixin()
        			}else if (this.contactEditTags.editQQ === true) {
        				// 保存QQ
        				this.setQQ()
        			}
        		}
        		this.contactInfoEdit = !this.contactInfoEdit
        		console.log("contactInfoEdit=",this.contactInfoEdit)
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
.nav-link-div-active{
	width: 41px;
	height: 42px;
	border-bottom: 2px solid #FFDA1F;
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
	min-height: 35%;
	max-height: 100%;
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
	/*height: 304px;*/
	min-height: 35%;
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
	margin-left: 140px;
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
	margin: 10px 0px 0px 0px;
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
	width: 46px;
	height: 100%;
	font-size: 12px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #676666;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-left: 25px;
	cursor: pointer;
}
.post-function img{
	margin-right: 8px;
}
.post-function span{
	min-width: 24px;
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
	height: 488px;
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
.copyright-div{
	width: 100%;
	height: 184px;
	margin-top: 16px;
}
.copyright-line{
	width: 100%;
	height: 30px;
	background: #F9F9F9;
	display: flex;
	justify-content: flex-start;					/*横轴左对齐*/
	align-items: center;							/*纵轴居中对齐*/
}
.copyright-font{
	color: #8A8A8A;
	font-family: MicrosoftYaHei;
	font-size: 12px;
	font-weight: 400;
	padding-left: 16px;
}
</style>