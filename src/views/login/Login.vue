<template>
    <div class="background">
        <img src="@/assets/img/common/background.png" class="background-img">

        <!-- 登录区域 -->
        <div class="login-div">

            <!-- 登录区域上部分图片与提示部分 -->
            <div class="login-top">
                <div class="login-top-imgdiv">
                    <img src="@/assets/img/common/user.png" class="login-top-img">
                </div>
                <div class="login-top-textdiv">
                    <p class="login-top-text">请使用研论账号进行登录</p>
                </div>
            </div>

            <!-- input区域 -->
            <div class="login-mid">
                <!-- 账号区域 -->
                <p class="login-mid-user">邮箱号</p>
                <div class="login-mid-inputdiv">
                    <input type="email" name="user" class="login-mid-input" v-model="email"/>
                </div>

                <!-- 密码区域 -->
                <div class="login-mid-pwddiv">
                    <p class="login-mid-pwd">密码</p>
                    <p class="login-mid-forgetpwd" @click="goForget">忘记密码?</p>
                </div>
                <div class="login-mid-inputdiv">
                    <input type="password" name="password" class="login-mid-input" v-model="password"/>
                </div>

                <!-- 登录按钮区域 -->
                <div class="login-mid-btn_submit">
                    <button class="btn_submit" @click="Login">登&nbsp;&nbsp;&nbsp;录</button>
                </div>
            </div><!-- end of input区域-->

            <!-- 注册跳转链接区域 -->
            <div class="login-footer">
                <div class="register-div">
                    <span style="padding-left: 45px;">无账号?</span>
<!--                    <a href="register" style="display: inline; color: #2A74D6;">立即注册</a>-->
                    <router-link to="/register" style="display: inline; color: #2A74D6;">立即注册</router-link>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    import {login} from "@/network/login";

    export default {
        name: "Login",
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods:{
            Login(){
                login(this.email,this.password).then(res=>{
                    if(res.statu==1){
                        this.$store.commit("changeLogin");
                        this.$store.commit("setMyEmail",this.email);
                        this.$router.push('/schools');
                    }else{
                        alert("账号或者密码错误");
                    }
                })
            },
            goForget(){
                this.$router.push('/forget')
            }
        }
    }
</script>

<style scoped>
    .background{
        width: 1000px;
        height: 700px;
        margin: 10px auto;
        /*border: 1px solid #000;*/
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .background-img{
        width: 453px;
        height: 406px;
        z-index: -1;
    }
    .login-div{
        width: 304px;
        height: 415px;
        position: relative;
        left: -100px;
        top: -10px;
        border-radius: 5px;
        border: 2px solid #e0e4e7;
        background-color: #ffffff;
        opacity:0.9;
    }
    .login-top{
        width: 250px;
        height: 125px;
        border-bottom: 2px solid #e4e8eb;
        margin: 0px auto;
    }
    .login-top-imgdiv{
        width: 80px;
        height: 80px;
        border: 2px solid #f9f9f9;
        border-radius: 50px;
        margin: 20px auto;
    }
    .login-top-img{
        margin: 15px 15px;
    }
    .login-top-textdiv{
        z-index: 2;
        width: 250px;
        height: 20px;
        position: relative;
        top: -10px;
    }
    .login-top-text{
        color: #999999;
        font-size: 16px;
        text-align: center;
    }
    .login-mid{
        width: 250px;
        height: 100px;
        font-size: 14px;
        margin: 0px auto;
    }
    .login-mid-user{
        padding: 30px 0px 5px 0px;
        color: #000000;
    }
    .login-mid-pwddiv{
        /*display: inline;*/
    }
    .login-mid-pwd{
        padding: 20px 0px 5px 0px;
        color: #000000;
        float: left;
    }
    .login-mid-forgetpwd{
        padding: 20px 0px 5px 0px;
        color: #2a74d6;
        float: right;
    }
    .login-mid-inputdiv{
        /*width: 250px;
        height: 20px;*/
    }
    .login-mid-input{
        width: 250px;
        height: 30px;
        border: 2px solid #e7e8ea;
        border-radius: 6px;
    }
    .login-mid-btn_submit{
        margin-top: 20px;
        background: #FFFFFF;
        opacity: 0.9;
        border-radius: 6px;
        line-height: 60px;
    }
    .btn_submit{
        border: 1px solid #96C5A3;
        width: 250px;
        height: 35px;
        background: #96C5A3;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
    }
    .login-footer{
        border-radius: 6px;
        width: 304px;
        height: 40px;
        position: relative;
        left: -2px;
        top: 180px;
        border: 2px solid #e7e8ea;
        font-size: 14px;
    }
    .register-div{
        line-height: 45px;
        margin: 0px auto;
        text-align: center;
    }
</style>