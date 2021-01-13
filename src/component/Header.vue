<template>
    <div id="header" class="header">
        <div class="header-container">
            <ul class="navbar-nav-left">
                <li>
                    <a href="/" >
                        <img src="../assets/img/common/yanlun.png">
                    </a>
                </li>
                <li><router-link to="schools" class="nav-link"><span>院校</span></router-link></li>
                <li><router-link to="tribune" class="nav-link"><span>论坛</span></router-link></li>
                <li><router-link to="tribune" class="nav-link"><span>关于我们</span></router-link></li>
            </ul>

            <ul class="navbar-nav-right">
                <li v-if="!show"><router-link to="my" class="nav-link"><span>我的</span></router-link></li>
                <li><router-link to="login" class="nav-link"><span>登录</span></router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                show:true,
            }
        }
    }
</script>

<style scoped>
    .header{
        position: relative;
        list-style: none;
        width: 100%;
        height: 180px;
        background: #414868;
        text-align: center;
    }
    .header .header-container{
        position: absolute;
        bottom: 20px;
        left: 230px;
        width: 60%;
    }
    .header ul li a{
        float: left;
    }

    .header ul li span{
        display: inline-block;
        font-size: 18px;
        color: #fff;
        padding-top: 13px;
    }

    .header .navbar-nav-left a{
        margin-left: 22px;
    }

    .header .navbar-nav-right a {
        float: right;
        margin-right: 65px;
    }

    .header ul a:hover span{
        border-bottom: 2px solid #FFDA1F ;
    }
</style>