<template>
    <div class="all">
    	<!-- 中部内容区域 -->
        <div class="container">
        	<!-- 左侧区域 -->
        	<div class="left">
        		<!-- 圈子地域搜索框区域 -->
        		<div class="left-top-div">
        			<div class="left-top">
	        			<!-- 左侧导航栏 -->
	    				<div class="left-nav">
	    					<div :class="currentRouter === 'tribune'?'left-a-active':'left-a-inactive'">
	    						<router-link to="tribune" class="left-a">
	                                <span>推荐</span>
	                            </router-link>
	    					</div>
	    					<div :class="currentRouter === 'circle'?'left-a-active':'left-a-inactive'">
	    						<router-link to="circle">
	                                <span>圈子</span>
	                            </router-link>
	    					</div>

	    				</div>
	    				<!-- end of 左侧导航栏 -->

	    				<!-- 筛选搜索框 -->
	                    <div class="search-div">
	                    	<span>按省份选择：</span>
	                    	<!-- 省份选择框 -->
	                    	<div class="area-selection" @click="selectedProvince()">
	                    		<span v-show="selectedArea.province">{{selectedArea.province}}</span>
	                    		<span v-show="!selectedArea.province">省份</span>
	                    		<img src="@/assets/img/common/pulldown_icon.png">
	                    	</div>

	                    	<!-- 省份下拉选择区域 -->
	                    	<div class="area-option" v-show="showProvinceArea">
	                    		<span>省份</span>
	                    		<div class="provinces-list">
	                    			<!-- 1列 -->
	                    			<ul class="provinces-list-ul" style="margin-left: 15px;">
	                    				<li v-for="(area,index) in areas.slice(0,12)"
	                    				:key="index" @click="selectedProvince(area)">
	                    					{{area.province}}
	                    				</li>
	                    			</ul>

	                    			<!-- 2列 -->
	                    			<ul class="provinces-list-ul">
	                    				<li v-for="(area,index) in areas.slice(12,24)"
	                    				:key="index" @click="selectedProvince(area)">
	                    					{{area.province}}
	                    				</li>
	                    			</ul>

	                    			<!-- 3列 -->
	                    			<ul class="provinces-list-ul">
	                    				<li v-for="(area,index) in areas.slice(24)"
	                    				:key="index" @click="selectedProvince(area)">
	                    					{{area.province}}
	                    				</li>
	                    			</ul>
	                    		</div>
	                    	</div>
	                    	<!-- end of 省份下拉选择区域 -->

	                    	<!-- 城市选择框 -->
	                    	<div class="area-selection" @click="selectedCity()">
	                    		<span v-show="selectedArea.city">{{selectedArea.city}}</span>
	                    		<span v-show="!selectedArea.city">城市</span>
	                    		<img src="@/assets/img/common/pulldown_icon.png">
	                    	</div>

	                    	<!-- 城市下拉选择区域 -->
	                    	<div class="city-option" v-show="showCityArea">
	                    		<span>省份</span>
	                    		<div class="provinces-list">
	                    			<!-- 1列 -->
	                    			<ul class="provinces-list-ul" style="margin-left: 15px;">
	                    				<li v-for="(city,index) in cities.slice(0,12)"
	                    				:key="city" @click="selectedCity(city)">
	                    					{{city}}
	                    				</li>
	                    			</ul>

	                    			<!-- 2列 -->
	                    			<ul class="provinces-list-ul">
	                    				<li v-for="(city,index) in cities.slice(12,24)"
	                    				:key="city" @click="selectedCity(city)">
	                    					{{city}}
	                    				</li>
	                    			</ul>

	                    			<!-- 3列 -->
	                    			<ul class="provinces-list-ul">
	                    				<li v-for="(city,index) in cities.slice(24,36)"
	                    				:key="index" @click="selectedCity(city)">
	                    					{{city}}
	                    				</li>
	                    			</ul>

	                    			<!-- 4列 -->
	                    			<ul class="provinces-list-ul">
	                    				<li v-for="(city,index) in cities.slice(36)"
	                    				:key="index" @click="selectedCity(city)">
	                    					{{city}}
	                    				</li>
	                    			</ul>
	                    			
	                    		</div>
	                    	</div>
	                    	<!-- end of 城市下拉选择区域 -->
	                    </div>
	                    <!-- end of 筛选搜索框 -->

	                    <!-- 直接搜索框 -->
	                    <div class="search-div" style="border: none;">
	                    	<span>直接搜索：</span>
	                    	<input type="text" v-model="searchCity"
	                    	placeholder="请输入城市（学校）中文">
	                    	<button v-show="searchCity" @click="searchCircle">搜索</button>
	                    </div>
	                    <!-- end of 直接搜索框 -->
	        		</div>
        		</div>
	        	<!-- end of 圈子地域搜索框区域 -->

	        	<div class="left-bottom-div">
	        		<div class="left-bottom">
	        			<!-- 最新推荐、七日热门nav区域 -->
	        			<div class="left-bottom-nav" v-show="!showSearch">
	        				<router-link to="circle"
	        				:class="currentRouter === 'circle'?'school-cirle-link-active':'school-cirle-link'">
	        					<span>最新推荐</span>
	        				</router-link>
	        			</div>
	        			<!-- end of 最新推荐、七日热门nav区域 -->

	        			<!-- 筛选nav区域 -->
	        			<div class="left-bottom-nav" v-show="showSearch" style="justify-content: flex-end;">
	        				<span class="search-nav-font">
	        					已为您筛选出

	        					<!-- 筛选省份信息显示 -->
	        					<span class="search-nav-keywords"
	        					v-if="selectedArea.province.length>0">
	        						{{selectedArea.province}}-{{selectedArea.city}}
	        					</span>

	        					<!-- 直接搜索信息显示 -->
	        					<span class="search-nav-keywords" v-if="searchCity">{{searchCity}}</span>
	        					相关学校圈子
	        				</span>
	        				<div class="rescreen-div">
	        					<img src="@/assets/img/common/screen_icon.png">
	        					<span @click="cleanScreenContent">重新筛选</span>
	        				</div>
	        			</div>
	        			<!-- end of 筛选nav区域 -->

	        			<!-- 圈子行显示 -->
	        			<div :class="index%2===0?'circle-line-div':'circle-line-div-reverse'"
	        			v-for="(circle,index) in circles" :key="index">
	        				<!-- 圈子介绍 -->
	        				<div class="circle-line-left">
	        					<!-- 校徽、圈名、创建时间、加入人数 -->
	        					<div class="circle-title-div">
	        						<div class="circle-title-left">
		        						<img :src="this.imgBaseUrl+circle.circleHead">

		        						<!-- title中部 -->
		        						<div class="circle-title-font">
		        							<span>{{circle.circleName}}</span>
		        							<span>{{circle.createTime}}</span>
		        						</div>
	        						</div>

	        						<div class="circle-title-official" v-show="circle.isOfficial">官方</div>
	        						<div class="circle-title-members">{{circle.members/1000}}K</div>
	        					</div>

	        					<button :class="circle.isJoin?'circle-button-active':'circle-button-inactive'" @click="goCircleDetail">
	        						加入圈子
	        					</button>
	        					<div>
	        						<span class="seniors-name">{{circle.seniors[0]}}、{{circle.seniors[1]}}</span>
	        						<span class="seniors-span">等优秀学长学姐等你加入</span>
	        					</div>
	        				</div>
	        				<!-- end of 圈子介绍 -->

	        				<!-- 圈子图片 -->
	        				<div class="circle-line-right" @click="goCircleDetail(circle)"
	        				@mouseenter="changeshowMask(index)" @mouseleave="changeshowMask(index)">
	        					<img :src="this.imgBaseUrl+circle.circleImg">

	        					<!-- 圈子遮罩层 -->
	        					<div class="circle-img-mask" v-show="circle.showMask">
	        						<!-- 圈子简介 -->
	        						<span v-for="(row,index) in circle.introduction" :key="index">
	        							{{row}}
	        							<div class="more-details-div"
		        							v-show="circle.introduction.length > 0 &&
		        							index === circle.introduction.length-1">
		        							<span style="color: #50B1DB;">了解详情</span>
		        							<img src="@/assets/img/common/more_icon2.png">
		        						</div>
	        						</span>

	        					</div>
	        				</div>
	        				<!-- end of 圈子图片 -->
	        			</div>
	        			<!-- end of 圈子行显示 -->

	        			<!-- 翻页按钮区域 -->
	        			<div class="circle-page-div">
	        				<button @click="nextPage">下一页</button>
	        			</div>
	        			<!-- end of 翻页按钮区域 -->
	        		</div>
	        	</div>
        	</div>
        	<!-- end of 左侧区域 -->

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
    				<div class="nav-line" @click="goCircle">
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

    			<!-- 帖子区域 -->
    			<div class="right-post">
    				<!-- 发帖子 -->
    				<div class="nav-line">
    					<img src="@/assets/img/common/create_circle_icon.png" class="collection-icon">
    					<span class="line-title">创建圈子</span>
    				</div>
    				<!-- 我的帖子 -->
    				<div class="nav-line">
    					<img src="@/assets/img/common/my_post.png" class="collection-icon">
    					<span class="line-title">我的帖子</span>
    					<div class="line-num">
    						<span>{{userInfo.postNum}}</span>
    					</div>
    				</div>
    				<!-- 草稿箱 -->
    				<div class="nav-line">
    					<img src="@/assets/img/common/draft_box.png" class="collection-icon">
    					<span class="line-title">草稿箱</span>
    					<div class="line-num">
    						<span>{{userInfo.draftNum}}</span>
    					</div>
    				</div>
    			</div>
    			<!-- end of 右侧帖子区域 -->

    			<!-- 网站版权信息区域 -->
                <Copyright></Copyright>
    			<!-- end of 网站版权信息区域 -->
    		</div>
    		<!-- end of 右侧内容区域 -->
        </div>
        <!-- end of 中部内容区域 -->
    </div>
</template>

<script>
    import {getUrlInfo} from '@/util.js'
	import {getCircle} from '@/network/circle.js'
    import Copyright from '@/component/Copyright'
    export default {
        name: "Circle",
        components: {
            Copyright
        },
        data(){
        	return {
        		// 后台获取的网站信息
        		websiteInfo: {
        			tel: '123456789',			// 网站联系电话
        			email: '123456789@qq.com'	// 网站联系邮箱
        		},
				start:0,
				length:10,
				imgBaseUrl:'http://47.96.234.106:8080/images/school/',
        		// 后台获取的用户数据
        		userInfo: {
        			collectionNum: 1,			// 我的收藏
        			historyNum: 10,				// 浏览历史
        			attentionNum: 4,			// 我的关注
        			circleNum: 0,				// 我的圈子
        			postNum: 0,					// 我的帖子
        			draftNum: 0,				// 草稿箱
        			myFan: 0					// 我的粉丝
        		},
        		carouselImgSrc: ['carousel1','carousel2','carousel3','carousel4','carousel5'],
        		currentIndex: 0,
        		timer: '',
                currentRouter: null,			// 当前路由
                showProvinceArea: false,		// 省份筛选区域显示标志
                showCityArea: false,			// 城市筛选区域显示标志
                showSearch: false,				// 筛选nav显示标志
                selectedArea: {					// 筛选地区
                	province: "",				// 筛选省份
                	city: ""					// 筛选城市
                },
                searchCity: null,				// 直接搜索城市
                // 省份-城市筛选列表
                areas: [{
                	id: 0,
                	province: "安徽",
                	city :[]
                },
                {
                	id: 1,
                	province: "澳门",
                	city :["澳门"]
                },
                {
                	id: 2,
                	province: "北京",
                	city :["北京"]
                },
                {
                	id: 3,
                	province: "重庆",
                	city :["重庆"]
                },
                {
                	id: 4,
                	province: "福建",
                	city :[]
                },
                {
                	id: 5,
                	province: "甘肃",
                	city :[]
                },
                {
                	id: 6,
                	province: "广东",
                	city :[]
                },
                {
                	id: 7,
                	province: "广西",
                	city :[]
                },
                {
                	id: 8,
                	province: "贵州",
                	city :[]
                },
                {
                	id: 9,
                	province: "海南",
                	city :[]
                },
                {
                	id: 10,
                	province: "河北",
                	city :[]
                },
                {
                	id: 11,
                	province: "河南",
                	city :[]
                },
                {
                	id: 12,
                	province: "黑龙江",
                	city :[]
                },
                {
                	id: 13,
                	province: "湖北",
                	city: ["武汉","黄石","十堰","宜昌","襄阳","鄂州","荆门","孝感","荆州","黄冈","咸宁","随州",
                	"恩施","三峡","仙桃","武当天","神农架","当阳","枣阳","潜江","天门","大冶","钟祥","宜城",
                	"松滋","赤壁","枝江","利川","宜都","老河口","武穴","麻域","监利","公安","京山市","洪湖",
                	"浠水","新洲区","汉南区","嘉鱼县","大悟县","孝昌县","安陆市"]
                },
                {
                	id: 14,
                	province: "湖南",
                	city :[]
                },
                {
                	id: 15,
                	province: "江西",
                	city :[]
                },
                {
                	id: 16,
                	province: "吉林",
                	city :[]
                },
                {
                	id: 17,
                	province: "江苏",
                	city :[]
                },
                {
                	id: 18,
                	province: "辽宁",
                	city :[]
                },
                {
                	id: 19,
                	province: "内蒙古",
                	city :[]
                },
                {
                	id: 20,
                	province: "宁夏",
                	city :[]
                },
                {
                	id: 21,
                	province: "青海",
                	city :[]
                },
                {
                	id: 22,
                	province: "山西",
                	city :[]
                },
                {
                	id: 23,
                	province: "山东",
                	city :[]
                },
                {
                	id: 24,
                	province: "陕西",
                	city :[]
                },
                {
                	id: 25,
                	province: "上海",
                	city :["上海"]
                },
                {
                	id: 26,
                	province: "四川",
                	city :[]
                },
                {
                	id: 27,
                	province: "台湾",
                	city :[]
                },
                {
                	id: 28,
                	province: "天津",
                	city :["天津"]
                },
                {
                	id: 29,
                	province: "西藏",
                	city :[]
                },
                {
                	id: 30,
                	province: "香港",
                	city :["香港"]
                },
                {
                	id: 31,
                	province: "新疆",
                	city :[]
                },
                {
                	id: 32,
                	province: "云南",
                	city :[]
                },
                {
                	id: 33,
                	province: "浙江",
                	city :[]
                },],
                circles:[] ,
                cities: []
        	}
        },
        methods:{
        	autoPlay() {
        		this.currentIndex++;
        		if (this.currentIndex > this.carouselImgSrc.length - 1) {
        			// 遍历到最后一张图片时置零
        			this.currentIndex = 0
        		}
        	},
        	move() {
        		console.log('轮播图继续')
        		// console.log(this.posts[0].postImg)
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
        	changeshowMask(e) {
        		this.circles[e].showMask = !this.circles[e].showMask
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
			goCircleDetail(circle){
        		console.log(circle);
        		this.$store.commit("setClickSchool",circle.circleName);
				this.$store.commit("setClickSchoolImg",circle.circleImg);
				this.$store.commit("setClickSchoolIntroduce",circle.introduction[0]);
				this.$store.commit("setClickCircleId",circle.id);
        		this.$router.push('/circledetail')
			},
			searchCircle() {
				// 执行筛选功能，修改this.circles
				if (this.selectedArea.city.length > 0) {
					// 筛选城市已填写，请求后台API
				}else if (this.searchCity) {
					// 直接搜索城市已填写，请求后台API
				}
				// 筛选nav的显示
				this.showSearch = !this.showSearch
			},
			selectedProvince(e){
				// 选择省份进行筛选
				this.showProvinceArea = !this.showProvinceArea
				if (e) {
					console.log("选中的省份：",e.province)
					this.selectedArea.province = e.province
					// 获取对应省份的城市列表
					this.cities = this.areas[e.id].city
					// 四舍五入计算下拉列表有几列，12行1列
					console.log("ul长度=",Math.round(this.cities.length/12))
				}
			},
			selectedCity(e){
				// 选择城市进行筛选
				if (this.selectedArea.province.length>0) {
					// 已选择省份
					this.showCityArea = !this.showCityArea
				}else {
					// 未选择省份
					alert("未选择省份，请重试~")
				}
				if (e) {
					console.log("选中的城市：",e)
					this.selectedArea.city = e
				}
				if (this.selectedArea.province.length > 0 && this.selectedArea.city.length > 0) {
					// 筛选内容均已填写
					this.searchCircle()
				}
			},
			cleanScreenContent(){
				// 清除省份-城市筛选内容
				this.selectedArea.province = ""
				this.selectedArea.city = ""
				this.searchCity = null
				// 重新筛选
				this.searchCircle()
			},
			getCircle(){
				getCircle(this.$store.state.myEmail,this.start,this.length).then(res=>{
					this.circles=res.circles;
					console.log(this.circles)
				})
			},
			nextPage(){
        		this.start=this.start+1;
        		this.getCircle();
			}
        },
        mounted(){
            // 设置当前页面的CSS
            this.checkCurrentRouter()
            console.log("省份数目=",this.areas.length),
					this.getCircle();
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
	/*height: 1911.11px;*/
	margin: 16px auto;
	display: flex;					/*弹性盒子布局*/
}
.left{
	width: 659.9px;
	/*max-height: 100%;*/
}
.left-top-div{
	width: 100%;
	height: 235px;
	background: #FFFFFF;
}
.left-top{
	width: 584px;
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
	width: 62px;
	height: 31px;
	background: #4497F2;
	border-radius: 10px;
	margin-right: 30px;
	display: flex;							/*弹性盒子布局*/
	align-items: center;					/*盒子内容物纵轴居中*/
	justify-content: center;				/*盒子内容物横轴居中*/
}
.left-a-inactive{
	width: 62px;
	height: 31px;
	border-radius: 10px;
	color: #676666;
	margin-right: 20px;
	display: flex;							/*弹性盒子布局*/
	align-items: center;					/*盒子内容物纵轴居中*/
	justify-content: center;				/*盒子内容物横轴居中*/
}
.left-a-active a{
	color: #FFFFFF;
	font-size: 16px;
}
.left-a-inactive a{
	background: #FFFFFF;
	font-size: 16px;
}
.search-div{
	width: 100%;
	height: 85px;
	display: flex;							/*弹性盒子布局*/
	align-items: center;					/*盒子内容物纵轴居中*/
	justify-content: flex-start;			/*盒子内容物横轴左对齐*/
	border-bottom: 2px solid #EEEEEE;
	position: relative;
}
.search-div span{
	margin-right: 10px;
}
.search-div input{
	width: 220px;
	height: 41px;
	border: 1px solid #CCCCCC;
	border-radius: 2px;
	font-size: 14px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #8B8B8B;
	padding-left: 11px;
}
.search-div button{
	background: #FFFFFF;
	color: #4497F2;
	border: none;
	font-size: 14px;
	cursor: pointer;
	position: relative;
	right: 52px;
}
.area-selection{
	width: 150px;
	height: 41px;
	border: 1px solid #CCCCCC;
	border-radius: 4px;
	margin-right: 20px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding-left: 12px;
	font-size: 14px;
	color: #8B8B8B;
	cursor: pointer;
}
.area-selection img{
	width: 8px;
	height: 6px;
	margin-left: 92px;
}
.area-option{
	min-width: 264px;
	min-height: 100px;
	max-height: 376px;
	background: #FFFFFF;
	border: 1px solid #DCDCDC;
	border-radius: 4px;
	z-index: 10;
	position: absolute;						/*父级相对定位,子元素绝对定位,清除子元素空白*/
	top: 63px;
	left: 118px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}
.area-option span{
	width: 32px;
	height: 50px;
	font-size: 16px;
	color: #676666;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-left: 15px;
}
.city-option{
	min-width: 264px;
	max-width: 375px;
	min-height: 100px;
	max-height: 376px;
	background: #FFFFFF;
	border: 1px solid #DCDCDC;
	border-radius: 4px;
	z-index: 10;
	position: absolute;						/*父级相对定位,子元素绝对定位,清除子元素空白*/
	top: 63px;
	left: 302px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}
.city-option span{
	width: 32px;
	height: 50px;
	font-size: 16px;
	color: #676666;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-left: 15px;
}
.provinces-list{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
}
.provinces-list-ul{
	width: 40px;
	margin-right: 40px;
}
.provinces-list-ul li{
	width: 40px;
	height: 20px;
	margin-bottom: 5px;
	font-size: 12px;
	color: #676666;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.provinces-list-ul li:hover{
	background: #4497F2;
	color: #FFFFFF;
	border-radius: 10px;
}
.left-bottom-div{
	width: 100%;
	/*height: 660px;*/
	margin-top: 16px;
	background: #FFFFFF;
}
.left-bottom{
	width: 584px;
	margin: 0px auto;
}
.left-bottom-nav{
	width: 100%;
	height: 48px;
	border-bottom: 2px solid #EEEEEE;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 23px;
}
.school-cirle-link{
	width: 56px;
	height: 100%;
	font-size: 14px;
	font-weight: 400;
	color: #676666;
	font-family: Microsoft YaHei;
	margin: 0px 20px 0px 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.school-cirle-link-active{
	width: 56px;
	height: 100%;
	font-size: 14px;
	font-weight: 400;
	color: #50B1DB;
	font-family: Microsoft YaHei;
	margin: 0px 20px 0px 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-bottom: 3px solid #4497F2;
}
.search-nav-font{
	min-width: 240px;
	font-size: 14px;
	color: #676666;
	text-align: center;
}
.search-nav-keywords{
	color: #50B1DB;
}
.rescreen-div{
	width: 77px;
	height: 26px;
	background: #FFFFFF;
	border: 1px solid #DCDCDC;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-left: 97px;
	cursor: pointer;
}
.rescreen-div img{
	margin-right: 6px;
}
.rescreen-div span{
	font-size: 12px;
	position: relative;
	top: 1px;
}
.circle-line-div{
	width: 573px;
	height: 138px;
	margin: 22px auto;
	border: 1px solid #EEEEEE;
	border-radius: 6px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.circle-line-div-reverse{
	width: 573px;
	height: 138px;
	margin: 22px auto;
	border: 1px solid #EEEEEE;
	border-radius: 6px;
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-start;
	align-items: center;
}
.circle-line-left{
	width: 50%;
	height: 100%;
	background: #FFFFFF;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}
.circle-title-div{
	width: 219px;
	height: 35px;
	margin: 15px auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-size: 12px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #000000;
	line-height: 15px;
}
.circle-title-div img{
	margin-right: 9px;
}
.circle-title-left{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.circle-title-official{
	width: 35px;
	height: 26px;
	background: #FFAA23;
	border: 1px solid #FFAA23;
	color: #FFFFFF;
	font-size: 12px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.circle-title-members{
	width: 33px;
	height: 26px;
	border: 1px solid #DCDCDC;
	font-size: 12px;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #676666;
	background: #FFFFFF;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-left: 7px;
}
.circle-title-font{
	width: 90px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.circle-button-inactive{
	width: 220px;
	height: 30px;
	margin-bottom: 10px;
	background: #FFFFFF;
	border: 2px solid #EEEEEE;
	border-radius: 2px;
	color: #676666;
	font-size: 12px;
	cursor: pointer;
}
.circle-button-active{
	width: 220px;
	height: 30px;
	margin-bottom: 10px;
	background: #EEEEEE;
	border: 2px solid #EEEEEE;
	border-radius: 2px;
	color: #000000;
	font-size: 12px;
}
.seniors-name{
	font-size: 10px;
	color: #1296DB;
}
.seniors-span{
	font-size: 10px;
}
.circle-line-right{
	width: 50%;
	height: 100%;
}
.circle-img-mask{
	width: 97%;
	height: 100%;
	background: #353535;
	border: 1px solid #353535;
	opacity: 0.7;
	position: relative;
	bottom: 103%;
	font-size: 12px;
	color: #FFFFFF;
	line-height: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 8px;
}
.circle-img-mask span{
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.more-details-div{
	margin-left: 5px;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
}
.more-details-div img{
	width: 13px;
	height: 13px;
	margin-left: 4px;
	position: relative;
	top: 3px;
}
.circle-page-div{
	width: 584px;
	height: 72px;
	border-top: 2px solid #EEEEEE;
	margin-top: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.circle-page-div button{
	width: 210px;
	height: 30px;
	background: #EEEEEE;
	border: 1px solid #EEEEEE;
	border-radius: 2px;
	color: #8A8A8A;
	font-size: 14px;
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
.right-post{
	background: #FFFFFF;
	width: 100%;
	height: 160px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-top: 16px;
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