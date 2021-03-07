<template>
	<div>
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
    </div>
</template>

<script>
	export default{
		name: "FocusList",
		props: ['userInfo'],
		data() {
			return{
				showFocusList: false                        // 显示关注列表
			}
		},
		methods: {
			changeShowFocusList() {
                this.showFocusList = !this.showFocusList
            }
		}
	}
</script>

<style scoped>
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
</style>