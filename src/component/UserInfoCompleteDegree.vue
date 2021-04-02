<template>
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
</template>

<script>
	import {getUrlInfo} from '@/util.js'
	export default{
		name: "UserInfoCompleteDegree",
        props: [
            'userInfo','completeDegree'
        ],
		data() {
			return {

			}
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>

<style scoped>
	.edit-mid{
        width: 272px;
        min-height: 110px;
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
</style>