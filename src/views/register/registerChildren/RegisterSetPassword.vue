<template>
    <div class="all">
        <!-- 注册区域 -->
        <div class="register-div">
            <!-- 返回按钮与注册title区域 -->
            <div class="top-div">
                <div class="top-left">
                    <img src="../../../assets/img/common/img_return.png" class="top-img">
                    <div class="top-rtn">
                        <span>返回</span>
                    </div>
                </div>
                <div class="top-right">
                    <span class="top-title">注册</span>
                </div>
            </div>

            <!-- input表单区域 -->
            <div class="mid-div">
                <div>
                    <p class="mid-p">输入邮箱</p>
                    <input type="email" name="userEmail" class="mid-input" @change="checkEmail()" v-model="email" >
                </div>
                <div v-if="!show">
                    <p class="mid-p">设置密码</p>
                    <input type="password" name="password" class="mid-input" @change="checkPassword()" v-model="password">
                    <span class="mid-tip">密码要求6-16位，至少包含数字、字母、符号两种元素</span>
                </div>

                <div v-else>
                    <p class="mid-p">设置密码</p>
                    <input type="text" name="password" class="mid-input" @change="checkPassword()" v-model="password">
                    <span class="mid-tip">密码要求6-16位，至少包含数字、字母、符号两种元素</span>
                </div>
            </div>

            <!-- 下一步/上一步区域 -->
            <div class="bottom-div">
                <button class="btn" @click="btnNext()">下一步</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {checkEmail} from "@/network/register.js"
    export default {
        name: "RegisterFirst",
        data(){
            return{
                email:'',
                password:'',
                isEmail:false,
                isPassword:false,
                EmailUnRegister:true,
                show:false
            }
        },
        methods:{
            btnNext(){
                if (this.EmailUnRegister&&this.isEmail&&this.isPassword){
                    this.$router.push({
                        path:"/setDreamSchool",
                        query:{
                            user:{
                                email:this.email,
                                password:this.password
                            }
                        }
                    })
                }else{
                    alert("两个都是需按照要求填写");
                }
            },
            checkEmail(){
                checkEmail(this.email).then(res=>{
                    if(res.status==1){
                        this.EmailUnRegister=true;
                    }
                    alert("此账号已经被注册，请更换邮箱账号");
                })
                let email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
                if (!email.test(this.email)) {
                    //弹出警示框
                    alert("不符合邮箱")
                }else{
                    this.isEmail=true;
                }
            },
            checkPassword(){
                let passwordreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~@#$%\*-\+=:,\\?\[\]\{}]).{6,16}$/;
                if(!passwordreg.test(this.password)){
                    //弹出警示框
                    alert("不符合密码要求")
                }else {
                    this.isPassword=true;
                }
                console.log(this.password);
            }
        }
    }
</script>

<style scoped>
    .register-div{
        width: 450px;
        height: 500px;
        margin: 8% auto;
        opacity: 0.9;
        display: flex;							/*弹性盒子*/
        justify-content: center;				/*横轴居中*/
        align-items: stretch;					/*纵轴延展占满*/
        flex-direction: column;					/*子元素纵向排列*/
        background: #FFFFFF;
        box-shadow: 2px 2px 10px #909090;		/*设置阴影*/
    }
    .top-div{
        align-items: center;					/*纵轴居中对齐*/
        flex-direction: row;					/*子元素行排列*/
        flex-wrap: wrap;						/*width不够时换行*/
        width: 405px;
        height: 90px;
        margin: 0px auto;
        border-bottom: 2px solid #E4E8EB;
        font-family: Microsoft YaHei;
    }
    .top-left{
        width: 70px;
        height: 50px;
        flex-direction: row;
        justify-content: flex-start;			/*横轴左对齐*/
        align-items: center;
        position: relative;						/*修改返回区域相对位置*/
        top: 33px;
    }
    .top-img{
        width: 32px;
        height: 32px;
    }
    .top-rtn{
        display: inline;
        width: 35px;
        height: 31px;
        position: relative;						/*修改字体相对位置*/
        top: -9px;
        font-size: 16px;
        font-weight: 400;
        color: #999999;
        cursor: pointer;
    }
    .top-title{
        display: flex;
        justify-content: center;
        line-height: 0px;
        font-weight: 400;
        font-size: 22px;
        color: #000000;
    }
    .mid-div{
        align-items: center;
        width: 370px;
        height: 240px;
        margin: 0px auto;
        font-family: Microsoft YaHei;
    }
    .mid-p{
        font-size: 18px;
        margin: 25px 0px 8px 0px;
        color: #000000;
    }
    .mid-input{
        width: 100%;
        height: 2em;
        border: 2px solid #E4E8EB;
        border-radius: 8px;
    }
    .mid-tip{
        font-size: 14px;
        color: #999999;
    }
    .bottom-div{
        align-items: center;
        justify-content: center;
        width: 374px;
        height: 100px;
        margin: 0px auto;
        position: relative;
        left: 2px;
    }
    .btn{
        width: 100%;
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