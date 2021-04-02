<template>
    <div class="all">
    	<!-- 中部内容区域 -->
    	<div class="container">
    		<!-- 左侧内容区域 -->
    		<div class="left">
    			<div class="left-content">
    				<!-- 左侧导航栏 -->
    				<div class="left-nav">
    					<div :class="currentRouter === 'schools'?'left-a-active':'left-a-inactive'">
    						<a href="schools" class="left-a">高校信息区</a>
    					</div>
    				</div>

    				<!-- 区域划分高校（华北高校） -->
    				<div class="left-title-div" @mouseover="mouseOver(0)" @mouseleave="mouseLeave(0)">
    					<div class="school-title">
    						<img :src="require('@/assets/img/common/'+schoolIconSrc[0]+'.png')" class="school-icon">
    						<span class="school-font">华北高校 （天津 北京 河北 山东 山西 内蒙古）</span>
    					</div>
    				</div>
    				<!-- 具体学校 -->
    				<div class="left-school-div" style="height: 150px;">
    					<!-- 1 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('中国科学院')">中国科学院</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('清华大学')">清华大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('北京大学')">北京大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('北京航空航天大学')">北京航空航天大学</div>
    					</div>
    					<!-- 2 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('北京邮电大学')">北京邮电大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('北京理工大学')">北京理工大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('山东大学')">山东大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('天津大学')">天津大学</div>
    					</div>
    					<!-- 3 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('南开大学')">南开大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('北京工业大学')">北京工业大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('北京科技大学')">北京科技大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('北京交通大学')">北京交通大学</div>
    					</div>
    					<!-- 4 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('中国人民大学')">中国人民大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('北京师范大学')">北京师范大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('中国地质大学')">中国地质大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('中国石油大学')">中国石油大学</div>
    					</div>
    					<!-- 5 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('中国海洋大学')">中国海洋大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('河北工业大学')">河北工业大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('内蒙古大学')">内蒙古大学</div>
    					</div>
    				</div>
    				<!-- end of 华北高校 -->

    				<!-- 区域划分高校（东北高校） -->
    				<div class="left-title-div" @mouseover="mouseOver(1)" @mouseleave="mouseLeave(1)">
    					<div class="school-title">
    						<img :src="require('@/assets/img/common/'+schoolIconSrc[1]+'.png')" class="school-icon">
    						<span class="school-font">东北高校 （黑龙江 吉林 辽宁）</span>
    					</div>
    				</div>
    				<!-- 具体学校 -->
    				<div class="left-school-div" style="height: 90px;">
    					<!-- 1 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('哈尔滨工业大学')">哈尔滨工业大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('吉林大学')">吉林大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('东北大学')">东北大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('大连理工大学')">大连理工大学</div>
    					</div>
    					<!-- 2 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('哈尔滨工程大学')">哈尔滨工程大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('辽宁大学')">辽宁大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('大连海事大学')">大连海事大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('东北师范大学')">东北师范大学</div>
    					</div>
    					<!-- 3 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('东北林业大学')">东北林业大学</div>
    					</div>
    				</div>
    				<!-- end of 东北高校 -->

    				<!-- 区域划分高校（华东高校） -->
    				<div class="left-title-div" @mouseover="mouseOver(2)" @mouseleave="mouseLeave(2)">
    					<div class="school-title">
    						<img :src="require('@/assets/img/common/'+schoolIconSrc[2]+'.png')" class="school-icon">
    						<span class="school-font">华东高校 （上海 江苏 浙江 福建 安徽 江西）</span>
    					</div>
    				</div>
    				<!-- 具体学校 -->
    				<div class="left-school-div" style="height: 210px;">
    					<!-- 1 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('上海交通大学')">上海交通大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('复旦大学')">复旦大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('同济大学')">同济大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('浙江大学')">浙江大学</div>
    					</div>
    					<!-- 2 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('中国科学技术大学')">中国科学技术大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('东南大学')">东南大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('南京大学')">南京大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('华东师范大学')">华东师范大学</div>
    					</div>
    					<!-- 3 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('华东理工大学')">华东理工大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('东华大学')">东华大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('厦门大学')">厦门大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('上海大学')">上海大学</div>
    					</div>
    					<!-- 4 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('福州大学')">福州大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('南京理工大学')">南京理工大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('南京航空航天大学')">南京航空航天大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('苏州大学')">苏州大学</div>
    					</div>
    					<!-- 5 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('河南大学')">河南大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('南京师范大学')">南京师范大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('南京农业大学')">南京农业大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('南京邮电大学')">南京邮电大学</div>
    					</div>
    					<!-- 6 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('合肥工业大学')">合肥工业大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('安徽大学')">安徽大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('杭州电子科技大学')">杭州电子科技大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('浙江邮电大学')">浙江邮电大学</div>
    					</div>
    					<!-- 7 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('南昌大学')">南昌大学</div>

    					</div>
    				</div>
    				<!-- end of 华东高校 -->

    				<!-- 区域划分高校（华中 华南高校） -->
    				<div class="left-title-div" @mouseover="mouseOver(3)" @mouseleave="mouseLeave(3)">
    					<div class="school-title">
    						<img :src="require('@/assets/img/common/'+schoolIconSrc[3]+'.png')" class="school-icon">
    						<span class="school-font">华中 华南高校 （河北 湖北 湖南 广西 广东 海南）</span>
    					</div>
    				</div>
    				<!-- 具体学校 -->
    				<div class="left-school-div" style="height: 150px;">
    					<!-- 1 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('华中科技大学')">华中科技大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('武汉大学')">武汉大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('中南民族大学')">中南民族大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('湖南大学')">湖南大学</div>
    					</div>
    					<!-- 2 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('中山大学')">中山大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('华南理工大学')">华南理工大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('国防科技大学')">国防科技大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('武汉理工大学')">武汉理工大学</div>
    					</div>
    					<!-- 3 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('华中师范大学')">华中师范大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('华中农业大学')">华中农业大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('华南师范大学')">华南师范大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('暨南大学')">暨南大学</div>
    					</div>
    					<!-- 4 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('深圳大学')">深圳大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('广西大学')">广西大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('海南大学')">海南大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('郑州大学')">郑州大学</div>
    					</div>
    				</div>
    				<!-- end of 华中 华南高校 -->

    				<!-- 区域划分高校（西北 西南高校） -->
    				<div class="left-title-div" @mouseover="mouseOver(4)" @mouseleave="mouseLeave(4)">
    					<div class="school-title">
    						<img :src="require('@/assets/img/common/'+schoolIconSrc[4]+'.png')" class="school-icon">
    						<span class="school-font">西北 西南高校 （陕西 甘肃 四川 重庆 云南 贵州）</span>
    					</div>
    				</div>
    				<!-- 具体学校 -->
    				<div class="left-school-div" style="height: 120px; border: none;">
    					<!-- 1 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('西安交通大学')">西安交通大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('电子科技大学')">电子科技大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('西安电子科技大学')">西安电子科技大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('西北工业大学')">西北工业大学</div>
    					</div>
    					<!-- 2 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('四川大学')">四川大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('重庆大学')">重庆大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('兰州大学')">兰州大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('西北农林科技大学')">西北农林科技大学</div>
    					</div>
    					<!-- 3 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('长安大学')">长安大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('西南大学')">西南大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('西南交通大学')">西南交通大学</div>
    						<div class="dot"></div>
    						<div class="school-text" @click="submitSchool('云南大学')">云南大学</div>
    					</div>
    					<!-- 4 -->
    					<div class="school-line">
    						<div class="dot"></div>
    						<div class="school-text">西北大学</div>
    						<div class="dot"></div>
    						<div class="school-text">贵州大学</div>
    					</div>
    				</div>
    				<!-- end of 西北 西南高校 -->
    			</div>
    		</div>
    		<!-- end of 左侧内容区域 -->

    		<!-- 右侧内容区域 -->
    		<div class="right">
    			<!-- 导航栏区域 -->
    			<div class="right-nav">
    				<!-- 我的收藏 -->
    				<div class="nav-line" @click="goCollection">
    					<img src="@/assets/img/common/collection_icon.png" class="collection-icon">
    					<span class="line-title">我的收藏</span>
    					<div class="line-num">
    						<span>{{userInfo.collectionNum}}</span>
    					</div>
    				</div>
    				<!-- 浏览历史 -->
    				<div class="nav-line">
    					<img src="@/assets/img/common/history_icon.png" class="collection-icon">
    					<span class="line-title">浏览历史</span>
    					<div class="line-num">
    						<span>{{userInfo.historyNum}}</span>
    					</div>
    				</div>
    				<!-- 我的关注 -->
    				<div class="nav-line">
    					<img src="@/assets/img/common/attention_icon.png" class="collection-icon">
    					<span class="line-title">我的关注</span>
    					<div class="line-num">
    						<span>{{userInfo.attentionNum}}</span>
    					</div>
    				</div>
    				<!-- 我的圈子 -->
    				<div class="nav-line"  @click="goCircle">
    					<img src="@/assets/img/common/circle_icon.png" class="collection-icon">
    					<span class="line-title">我的圈子</span>
    					<div class="line-num">
    						<span>{{userInfo.circleNum}}</span>
    					</div>
    				</div>
    			</div>
    			<!-- end of 右侧导航栏区域 -->

    			<!-- 轮播图区域 -->
    			<div class="right-carousel">
    				<transition-group name="image" tag="ul" class="carousel-img">
    					<li v-for="(list, index) in carouselImgSrc" :key="index" v-show="index===currentIndex"
    					@mouseenter="stop" @mouseleave="move">
		    				<img :src="require('@/assets/img/common/'+list+'.png')">
    					</li>
    				</transition-group>
    				<div class="carousel-btn-div">
    					<span v-for="(list, index) in carouselImgSrc.length" :key="index"
    					:class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    				</div>
    			</div>
    			<!-- end of 右侧轮播图区域 -->

    			<!-- 网站版权信息区域 -->
                <Copyright></Copyright>
    			<!-- end of 网站版权信息区域 -->
    		</div>
    		<!-- end of 右侧内容区域 -->
    	</div>
    	<!-- end of 中部内容区域 -->

		<button  @click="test3()">跳转到游客的访问我的</button>
    </div>
</template>

<script>
    import {getUrlInfo} from '@/util.js'
    import Copyright from '@/component/Copyright'
    export default {
        name: "Schools",
        components: {
            Copyright
        },
        data(){
        	return {
        		// 各区域高校标题icon路径
        		schoolIconSrc: ['school_icon','school_icon','school_icon','school_icon','school_icon'],
        		// 后台获取的网站信息
        		websiteInfo: {
        			tel: '123456789',			// 网站联系电话
        			email: '123456789@qq.com'	// 网站联系邮箱
        		},
        		// 后台获取的用户数据
        		userInfo: {
        			collectionNum: 1,			// 我的收藏
        			historyNum: 10,				// 浏览历史
        			attentionNum: 4,			// 我的关注
        			circleNum: 0				// 我的圈子
        		},
        		carouselImgSrc: ['carousel1','carousel2','carousel3','carousel4','carousel5'],
        		currentIndex: 0,
        		timer: '',
                currentRouter: null
        	}
        },
        methods:{
        	mouseOver(e){
        		// 区域高校标题鼠标悬停div事件
        		this.schoolIconSrc[e] = "school_icon_active"
        	},
        	mouseLeave(e){
        		// 区域高校标题鼠标离开div事件
        		this.schoolIconSrc[e] = "school_icon"
        	},
        	autoPlay() {
        		this.currentIndex++;
        		if (this.currentIndex > this.carouselImgSrc.length - 1) {
        			// 遍历到最后一张图片时置零
        			this.currentIndex = 0
        		}
        	},
        	move() {
        		console.log('轮播图继续')
        		this.timer = setInterval(() => {
        			this.autoPlay()
        		},2000)
        	},
        	stop(){
        		console.log('轮播图暂停')
	        	clearInterval(this.timer)
	        	this.timer = null
        	},
        	change(index){
        		this.currentIndex = index
        	},
            checkCurrentRouter(){
                let urlInfo = getUrlInfo()
                this.currentRouter = urlInfo.currentRouter
                console.log('currentRouter=',this.currentRouter)
            },
			goCollection(){
				this.$router.push("/Collection")
			},
			goCircle(){
				this.$router.push("/circle");
			},
			test1(){
				this.$router.push('/passage')
			},
			test3(){
				this.$router.push('/your')
			},
			submitSchool(schoolname){
				this.$store.commit('setClickSchool',schoolname);
				this.$router.push('/schoolInfo')
			}
        },
        mounted(){
            // 设置当前页面的CSS
            this.checkCurrentRouter()
        },
        created() {
        	this.$nextTick(() => {
        		// 设置定时器，每隔2s this.currentIndex+1
	           	this.timer = setInterval(() => {
	            	this.autoPlay()
	           	}, 2000)
        	})
        }
    }
</script>

<style scoped>
.all{
	min-height: 100%;
	min-width: 100%;
	position: absolute;
	background: #F9F9F9;
}
.container{
	width: 1103px;
	height: 1015px;
	margin: 16px auto;
	display: flex;					/*弹性盒子布局*/
}
.left{
	width: 659.9px;
	background: #FFFFFF;
}
.left-content{
	width: 584px;
	height: 90%;
	margin: 0px auto;
}
.left-nav{
	width: 100%;
	height: 59px;
	border-bottom: 2px solid #EEEEEE;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.left-a-active{
	width: 110px;
	height: 31px;
	background: #4497F2;
	border-radius: 10px;
	margin-right: 30px;
	display: flex;							/*弹性盒子布局*/
	align-items: center;					/*盒子内容物纵轴居中*/
	justify-content: center;				/*盒子内容物横轴居中*/
}
.left-a-inactive{
	width: 110px;
	height: 31px;
	border-radius: 10px;
	color: #676666;
	display: flex;							/*弹性盒子布局*/
	align-items: center;					/*盒子内容物纵轴居中*/
	justify-content: center;				/*盒子内容物横轴居中*/
}
.left-a{
	color: #FFFFFF;
}
.left-title-div{
	/*margin-top: 5px;*/
	margin: 5px auto 0px;
	width: 100%;
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.left-title-div:hover{
	background: #88CAED;
	opacity: 0.7;
	cursor: pointer;
}
.school-title{
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.school-icon{
	margin-right: 12px;
	margin-left: 15px;
}
.school-font{
	font-size: 16px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #010101;
	line-height: 60px;
}
.left-school-div{
	width: 100%;
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	border-bottom: 2px solid #EEEEEE;
}
.school-line{
	width: 570px;
	height: 30px;
	display: flex;
	margin: 0px auto;
}
.dot{
	margin-left: 15px;
	width: 6px;
	height: 6px;
	background: #000000;
	border-radius: 50%;
	position: relative;
	top: 8px;
	margin-right: 18px;
}
.school-text{
	width: 98px;
	height: 100%;
	font-size: 12px;
	font-weight: 400;
	color: #000000;
	line-height: 25px;
    cursor: pointer;
}
.school-text-other{
	width: 120px;
	height: 100%;
	font-size: 12px;
	font-weight: 400;
	color: #676666;
	line-height: 25px;
    cursor: pointer;
}
.right{
	width: 431px;
	margin-left: 13px;
}
.right-nav{
	background: #FFFFFF;
	width: 100%;
	height: 210px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}
.nav-line{
	width: 100%;
	height: 39px;
	margin-top: 11px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-family: MicrosoftYaHei;
	font-weight: 400;
	font-size: 16px;
	color: #676666;
}
/*父类nav-line*/
.nav-line:hover{
	background: #EEEEEE;
	cursor: pointer;
}
/*父类nav-line联动子类line-num*/
.nav-line:hover .line-num{
	background: #FFFFFF;
}
.collection-icon{
	margin-left: 26px;
	margin-right: 13px;
	width: 16px;
	height: 16px;
}
.line-title{
	width: 320px;
}
.line-num{
	width: 29px;
	height: 29px;
	background: #EEEEEE;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	font-size: 14px;
	color: #676666;
	font-weight: 400;
}
.right-carousel{
	width: 100%;
	height: 184px;
	margin-top: 16px;
	overflow: hidden;						/*超出当前区域隐藏*/
	cursor: pointer;						/*鼠标悬停时光标形状*/
}
.carousel-img{
	width: 430px;
	height: 100%;
}
.carousel-btn-div{
	width: 106px;
	height: 20px;
	background: #a9a9a9;
	z-index: 10;
	position: relative;
	bottom: 11%;
	left: 75%;
	opacity: 0.8;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.carousel-btn-div span{
	height: 6px;
	width: 6px;
	border-radius: 50%;
	background: #d2d2d2;
	z-index: 20;
}
.carousel-btn-div .active{
	background: #ffffff !important;
}
/*轮播图动画未完成
.image-enter{
	transform: translateX(100%);
}
.image-enter-active{
	transform: translateX(0);
	transition: all 1.5s ease;
}
.image-leave{
	transform: translateX(0);
}
.image-leave-active{
	transform: translateX(-100%);
	transition: all 1.5s ease;
}*/
</style>