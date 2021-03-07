<template>
    <!-- 注册区域 -->
    <div class="register-div">
        <!-- 返回按钮与注册title区域 -->
        <div class="top-div">
            <div class="top-left">
                <img src="../../../assets/img/common/img_return.png" class="top-img">
                <div class="top-rtn">
                    <span>上一步</span>
                </div>
            </div>
            <div class="top-right">
                <span class="top-title">注册</span>
            </div>
        </div>

        <!-- input表单区域 -->
        <div class="mid-div">
            <div>
                <p class="mid-p">目标院校</p>
                <select class="mid-select" name="tagetShool" @change="setSchoolsName">
                    <option>清华大学</option>
                    <option>北京大学</option>
                    <option>武汉大学</option>
                    <option>华中科技大学</option>
                </select>
            </div>
            <div>
                <p class="mid-p">本科院校</p>
                <input type="text" name="undergraduate" class="mid-input" required="required"
                       placeholder="请填写本科院校全名">
            </div>
            <div>
                <p class="mid-p">
                    您是想<span class="mid-tip">（三选一）</span>：
                </p>
                <input type="radio" name="learnType" value="zhuanShuo"><span class="radio-tip">专硕</span>
                <input type="radio" name="learnType" value="xueShuo"><span class="radio-tip">学硕</span>
                <input type="radio" name="learnType" value="other"><span class="radio-tip">其他</span>
            </div>
        </div>

        <!-- 下一步/上一步区域 -->
        <div class="bottom-div">
            <button class="btn">完成注册</button>
            <span class="bottom-tip">注册即表示同意平台
					<span style="color: #2A74D6;">《隐私政策》</span>和
					<span style="color: #2A74D6;">《用户协议》</span>
				</span>
        </div>
    </div>
</template>

<script>
    import {getSchoolsName} from "@/network/register.js"
    export default {
        name: "RegisterSecond",
        data(){
            return{
                mySchool:'',
                dreamSchool:'',
                masterOption:'',
                allSchoolName:'',
                result:''
            }
        },
        mounted(){
            this.getSchoolsName;
        },
        methods:{
            getSchoolsName(){
                getSchoolsName().then(res=>{
                    this.SchoolName=res;
                })
            },
            setSchoolsName(){
                if(this.allSchoolName.length>0){

                }
            },
        }
    }
</script>

<style scoped>

    .register-div{
        width: 450px;
        height: 520px;
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
        width: 100px;
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
        width: 100px;
        height: 31px;
        position: relative;						/*修改字体相对位置*/
        top: -9px;
        font-size: 16px;
        font-weight: 400;
        color: #999999;
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
        height: 290px;
        margin: 0px auto;
        font-family: Microsoft YaHei;
        color: #000000;
    }
    .mid-p{
        font-size: 18px;
        margin: 25px 0px 8px 0px;
        color: #000000;
    }
    .mid-select{
        width: 100%;
        height: 2.5em;
        border: 2px solid #E4E8EB;
        border-radius: 8px;
    }
    .mid-input{
        width: 98%;
        height: 2em;
        border: 2px solid #E4E8EB;
        border-radius: 8px;
    }
    .mid-tip{
        font-size: 16px;
        color: #999999;
    }
    .radio-tip{
        margin-right: 30px;
    }
    .bottom-div{
        align-items: center;
        justify-content: center;
        width: 374px;
        height: 45px;
        margin: 0px auto;
        position: relative;
        left: 2px;
        font-family: Microsoft YaHei;
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
    .bottom-tip{
        color: #999999;
        font-size: 14px;
        font-weight: 400;
        position: relative;
        bottom: -25px;
        left: 30px;
    }

</style>