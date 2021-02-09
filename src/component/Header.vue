<template>
    <div id="header" class="header">
        <div class="header-container">
            <!-- 左侧导航栏区域 -->
            <ul class="navbar-nav-left">
                <li style="margin-right: 50px;">
                    <a href="/" >
                        <img src="../assets/img/common/yanlun.png">
                    </a>
                </li>
                <li class="nav-li">
                    <router-link to="schools" @click="checkCurrentRouter"
                    :class="currentRouter === 'schools'?'nav-link-active':'nav-link'">
                        <span>院校</span>
                    </router-link>
                </li>
                <li class="nav-li">
                    <router-link to="tribune" @click="checkCurrentRouter"
                    :class="currentRouter === 'tribune'?'nav-link-active':'nav-link'">
                        <span>论坛</span>
                    </router-link>
                </li>
                <li class="nav-li" style="width: 110px;">
                    <router-link to="" class="nav-link" style="width: 110px;">
                        <span>关于我们</span>
                    </router-link>
                </li>
            </ul>
            <!-- end of 左侧导航栏区域 -->

            <!-- 搜索框区域 -->
            <ul class="navbar-nav-mid">
                <div class="search">
                    <input type="text" name="searchContent" placeholder="搜索">
                    <img src="../assets/img/common/search_icon.png" class="search-icon">
                </div>
            </ul>
            <!-- end of 搜索框区域 -->

            <!-- 右侧登录区域 -->
            <ul class="navbar-nav-right">
                <li v-if="!show" class="nav-li">
                    <router-link to="my" @click="checkCurrentRouter"
                    :class="currentRouter === 'my'?'nav-link-active':'nav-link'">
                        <span>我的</span>
                    </router-link>
                </li>
                <li v-else class="nav-li">
                    <router-link to="login" class="nav-link">
                        <span>登录</span>
                    </router-link>
                </li>
            </ul>
            <!-- end of 右侧登录区域 -->
        </div>
    </div>
</template>

<script>
    import {getUrlInfo} from '@/util.js'
    export default {
        name: "Header",
        data(){
            return{
                show:false,
                currentRouter: null
            }
        },
        methods:{
            checkCurrentRouter(){
                let urlInfo = getUrlInfo()
                this.currentRouter = urlInfo.currentRouter
                console.log('currentRouter=',this.currentRouter)
            }
        },
        mounted(){
            // 设置当前页面的CSS
            this.checkCurrentRouter()
        }
    }
</script>

<style scoped>
    .header{
        list-style: none;
        min-width: 100%;
        min-height: 180px;
        background: #414868;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
    }
    .header-container{
        width: 80%;
        height: 46px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;/*居中对齐*/
    }
    .navbar-nav-left{
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;/*横轴左对齐*/
    }
    .nav-li{
        width: 60px;
        height: 24px;
        margin: 12px 12px 0px;
    }
    .nav-link{
        color: #FFFFFF;
        font-size: 18px;
        font-family: MicrosoftYaHei;
        height: 20px;
        width: 60px;
        text-align: center;
        padding-bottom: 3px;
    }
    .nav-link-active{
        color: #FFFFFF;
        font-size: 18px;
        font-family: MicrosoftYaHei;
        height: 20px;
        width: 60px;
        text-align: center;
        padding-bottom: 3px;
        border-bottom: 2px solid #FFDA1F;
    }
    .nav-link:hover{
        border-bottom: 2px solid #FFDA1F;
    }
    .navbar-nav-mid{
        height: 100%;
        width: 30%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .search{
        width: 291px;
        height: 40px;
        border: 1px solid #EEEEEE;
        border-radius: 10px;
        display: flex;                              /*弹性盒子*/
        flex-direction: row;                        /*行排列*/
        justify-content: flex-start;
        align-items: center;
        color: #F7F7F7;
        margin-left: 30%;
    }
    .search input{
        margin-left: 8%;
        background: #414868;
        border: none;
        color: #FFFFFF;
        width: 78%;
    }
    /*各版本浏览器的placeholder字体颜色*/
    ::-webkit-input-placeholder{
        /*webkit内核浏览器placeholder字体颜色*/
        color: #FFFFFF;
    }
    :-moz-placeholder{
        /*Firefox 18-*/
        color: #FFFFFF; 
    }
    ::-moz-placeholder{
        /*Firefox 19+*/
        color: #FFFFFF; 
    }
    :-ms-input-placeholder{
        color: #FFFFFF;
    }
    .search-icon{
        width: 18px;
        height: 18px;
    }
    .search-icon{
        cursor: pointer;
    }
    .navbar-nav-right{
        width: 20%;
    }
</style>