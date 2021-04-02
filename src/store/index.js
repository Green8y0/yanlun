import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexLocal = new VuexPersist({
    storage: window.localStorage //可选，sessionStorage/indexDB
});

const store = createStore({
    state:{
        isLogin:false,
        register:{
            email:'',
            password:'',
            mySchool:'',
            targetSchool:'',
            masterOption:''
        },
        myEmail:'',
        clickCircleId:'',
        clickSchool:'',
        clickSchoolImg:'',
        clickSchoolIntroduce:'',
        clickEmail:''

    },
    //方法
    mutations: {
        changeLogin(){
            this.state.isLogin=true;
        },
        setMySchool(state,mySchool){
            this.state.register.mySchool=mySchool;
        },
        setDreamSchool(state,dreamSchool){
            this.state.register.targetSchool=dreamSchool;
        },
        setMasterOption(state,masterOption){
            this.state.register.masterOption=masterOption;
        },
        setEmail(state,email){
            this.state.register.email=email;
        },
        setPassword(state,password){
            this.state.register.password=password;
        },
        setMyEmail(state,email){
            this.state.myEmail=email;
        },
        setClickSchool(state,clickSchool){
            this.state.clickSchool=clickSchool;
        },
        setClickSchoolImg(state,clickSchoolImg){
            this.state.clickSchoolImg=clickSchoolImg;
        },
        setClickSchoolIntroduce(state,clickSchoolIntroduce){
            this.state.clickSchoolIntroduce=clickSchoolIntroduce;
        },
        setClickCircleId(state,clickCircleId){
            this.state.clickCircleId=clickCircleId;
        }


    },
    plugins: [vuexLocal.plugin]
})
export default store