<template>
  <div id="app" class="all">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <div class="background">
      <img src="./assets/img/common/background.png" class="background-img">
      <!-- 登录区域 -->
      <div class="login-div">
        <!-- 登录区域上部分图片与提示部分 -->
        <div class="login-top">
          <div class="login-top-imgdiv">
            <img src="./assets/img/common/user.png" class="login-top-img">
          </div>
          <div class="login-top-textdiv">
            <p class="login-top-text">请使用研论账号进行登录</p>
          </div>
        </div>
        <!-- input区域 -->
        <div class="login-mid">
          <!-- 账号区域 -->
          <p class="login-mid-user">账号</p>
          <div class="login-mid-inputdiv">
            <input type="text" name="user" class="login-mid-input" />
          </div>
          <div class="login-mid-pwddiv">
            <p class="login-mid-pwd">密码</p>
            <p class="login-mid-forgetpwd">忘记密码?</p>
          </div>
          <div class="login-mid-inputdiv">
            <input type="password" name="password" class="login-mid-input"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  // import MainTabBar from "components/content/mainTabBar/MainTabBar.vue"

  export default {
    name: 'App',
    components :{
      // MainTabBar
    }

  }
</script>

<style>
  @import "assets/css/base.css";
</style>
