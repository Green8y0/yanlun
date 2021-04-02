<template>
    <!-- 注册区域 -->
    <div class="register-div">
        <!-- 注册成功背景图 -->
        <div class="top-div">
            <img src="../../../assets/img/common/registerSuccess.png" class="top-img">
        </div>

        <!-- 中间提示区域 -->
        <div class="mid-div">
            <h3>注册成功!</h3>
            <span class="mid-tip">您已完成注册，请跳转登录界面，立即加入研论</span>
        </div>

        <!-- 登录按钮区域 -->
        <div class="bottom-div">
            <button class="btn" @click="goLogin">登&nbsp;&nbsp;&nbsp;录</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegisterSuccess",
        methods:{
            goLogin(){
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>

    .register-div{
        width: 450px;
        height: 600px;
        margin: 5% auto;
        opacity: 0.9;
        display: flex;							/*弹性盒子*/
        justify-content: center;				/*横轴居中*/
        align-items: stretch;					/*纵轴延展占满*/
        flex-direction: column;					/*子元素纵向排列*/
        background: #FFFFFF;
    }
    .top-div{
        align-items: flex-start;				/*纵轴上对齐*/
        flex-direction: row;					/*子元素行排列*/
        flex-wrap: wrap;						/*width不够时换行*/
        width: 410px;
        height: 385px;
        margin: 0px auto;
        font-family: Microsoft YaHei;
    }
    .top-img{
        width: 407px;
        height: 381px;
    }
    .mid-div{
        align-items: center;
        width: 370px;
        height: 120px;
        margin: 0px auto;
        font-family: Microsoft YaHei;
        text-align: center;
        color: #000000;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .mid-tip{
        font-size: 17px;
        font-weight: 400;
        padding-top: 30px;
    }
    .bottom-div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 370px;
        height: 100px;
        margin: 0px auto;
    }
    .btn{
        width: 320px;
        height: 35px;
        background: #2EA44E;
        border-radius: 8px;
        color: white;
        border: none;
        font-size: 16px;
        font-weight: 400;
    }
    .btn:hover{
        opacity: 0.9;
    }
</style>