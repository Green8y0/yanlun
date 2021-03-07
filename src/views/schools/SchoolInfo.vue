<template>
    <div class="all">
    	<div class="container">
    		<!-- 链接区域 -->
    		<div class="nav">
    			<div class="nav-left">
	    			<router-link to="schoolInfo" class="nav-link"
	    			:class="currentRouter === 'schoolInfo'?'nav-link-active':''">
	    				<span>学校概况</span>
	    			</router-link>
	    			<router-link to="schooldata" class="nav-link">
	    				<span>相关数据图表</span>
	    			</router-link>
    			</div>

    			<router-link to="schools" class="nav-right">
    				<img src="@/assets/img/common/schools_return.png">
    				<span>返回</span>
    			</router-link>
    		</div>
    		<!-- end of 链接区域 -->

    		<div class="content">
    			<!-- 学校简介区域 -->
    			<div class="introduction-div">
    				<!-- 左侧简介专业信息区域 -->
    				<div class="introduction-left">
    					<span class="school-title">{{schoolInfos.schoolName}}</span>
    					<span class="english-name">{{schoolInfos.englishName}}</span>
    					<!-- 简介主体 -->
    					<div class="introduction-content">
	    					<span v-for="(introduction,index) in schoolInfos.introductions" class="introduction">
	    						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{introduction}}
	    					</span>
    					</div>

    					<!-- 其他信息 -->
    					<div class="others-content">
    						<!-- 行 -->
    						<div class="others-line">
    							<div class="others-item">
    								<span class="others-item-th">创办时间</span>
    								<span class="others-item-td">{{schoolInfos.createTime}}</span>
    							</div>
    							<div class="others-item">
    								<span class="others-item-th">知名校友</span>
    								<span class="others-item-td">
    									<span style="color: #1296DB;">
    										{{schoolInfos.famousAlumni[0] + "、" + schoolInfos.famousAlumni[1]}}
    									</span>
    									等
    								</span>
    							</div>
    						</div>
    						<!-- end of 行 -->

    						<!-- 行 -->
    						<div class="others-line">
    							<div class="others-item">
    								<span class="others-item-th">主管部门</span>
    								<span class="others-item-td">{{schoolInfos.competentDepartment}}</span>
    							</div>
    							<div class="others-item">
    								<span class="others-item-th">学校官网</span>
    								<span class="others-item-td">
    									<span style="color: #1296DB;">
    										{{schoolInfos.officialWebsite}}
    									</span>
    								</span>
    							</div>
    						</div>
    						<!-- end of 行 -->
    					</div>
    					<!-- end of 其他信息 -->

    					<!-- 硕士专业信息 -->
    					<div class="master-content">
    						<!-- 硕士专业分割线区域 -->
    						<div class="master-content-hrdiv">
	    						<span class="master-content-title">硕士专业</span>
	    						<div class="master-content-hr"></div>
    						</div>

    						<!-- 行 -->
    						<div class="others-line">
    							<div class="others-item master-content-item">
    								<span class="others-item-th">学校研究生院官网</span>
    								<span class="others-item-td">
    									<span style="color: #1296DB;">
    										{{schoolInfos.masterOfficialWebsite}}
    									</span>
    								</span>
    							</div>
    						</div>
    						<!-- end of 行 -->

    						<div class="master-content-font">
    							<span>招生专业设置（2021年）</span>
    						</div>

    						<!-- 专业表格 -->
    						<div class="major-table-div">
    							<!-- 表头 -->
    							<div class="major-table-th">
    								<div class="code-and-name">学院代码及名称</div>
    								<div class="enrollment-specialty">招生专业</div>
    							</div>

    							<div class="college-major-div"
    							v-for="(college,index) in schoolInfos.colleges" :key="index">
	    							<div class="college">
	    								{{college.collegeId}} {{college.collegeName}}（{{college.collegeCode}}）
	    							</div>

	    							<div class="major">
		    							<div class="enrollment-specialty"
		    							v-for="(major,index) in college.majors">
		    								{{major}}
		    							</div>
	    							</div>
    							</div>
    						</div>
    						<!-- end of 专业表格 -->
    					</div>
    				</div>
    				<!-- end of 左侧简介专业信息区域 -->

    				<div class="introduction-right">
    					<img :src="require('@/assets/img/common/'+schoolInfos.schoolLogo+'.png')">
    				</div>
    			</div>
    			<!-- end of 学校简介区域 -->
    		</div>
    	</div>
    </div>
</template>

<script>
	import {getUrlInfo} from '@/util.js'
    export default {
        name: "ShchoolInfo",
        data() {
        	return {
        		currentRouter: null,
        		schoolInfos: {
        			schoolName: "中南民族大学",									// 校名
        			englishName: "South-Central Minzu University",				// 英文名
        			createTime: "1951年",										// 创办时间
        			famousAlumni: ["吴泽霖","林安彬"],							// 知名校友
        			competentDepartment: "国家民族事务委员会",					// 主管部门
        			officialWebsite: "https://www.scuec.edu.cn",				// 学校官网
        			masterOfficialWebsite: "http://www.scuec.edu.cn/yjsy/",		// 研究生官网
        			schoolLogo: "scuec_university_logo",
        			introductions: [// 简介
        				"中南民族大学（South-Central Minzu University），简称中南民大（SCMZU），位于湖北省武汉市，是中华人民共和国国家民族事务委员会直属高校，为中国“少数民族骨干计划”资格高校、全国深化创新创业教育改革示范高校、中国高校行星科学联盟、湖北省“国内一流大学建设高校”，是中华人民共和国国家民族事务委员会、教育部、中国科学院、湖北省人民政府、武汉市五方共建高校。",
        				"学校前身为中南民族学院，始建于1951年，创建之初名为中央民族学院中南分院；1952年11月，经中南军政委员会批准，将中央民族学院中南分院改名为中南民族学院；1985年，学校招收首批硕士研究生；2002年3月，学校正式更名为中南民族大学；2006年，学校正式获得博士学位授予权；2010年，学校首次实现拥有56个民族学生的目标。",
        				"截至2018年11月，学校占地1550余亩，校舍面积100万余平米，馆藏图书697余万册；拥有56个民族的全日制博士、硕士、本科、预科等各类学生27000余人，有教师1392人；设有21个二级学院、84个本科专业；有2个一级学科博士学位授权点、1个博士后科研流动站、士后科研流动站、24个学术型一级学科硕士学位授权点，16个专业型硕士学位授权点。"
        			],
        			colleges: [{
        				collegeId: "001",
        				collegeName: "法学院",
        				collegeCode: "027-67842770",
        				majors: ["法学理论","宪法学与行政法学","刑法学"," 民商法学","诉讼法学","经济法学","民族法学",
        				"法律（非法学）","法律（法学）"]
        			},
        			{
        				collegeId: "002",
        				collegeName: "民族学与社会学学院",
        				collegeCode: "027-67843791",
        				majors: ["社会学","人类学","民族学"," 马克思主义民族理论与政策","中国少数民族史","历史文献学",
        				"专门史","中国古代史","社会工作","文物与博物馆学"]
        			},
        			{
        				collegeId: "003",
        				collegeName: "公共管理学院",
        				collegeCode: "027-67842677",
        				majors: ["行政管理","社会保障","土地资源管理","公共管理"]
        			},
        			{
        				collegeId: "004",
        				collegeName: "经济学院",
        				collegeCode: "027-67841826",
        				majors: ["理论经济学","应用经济学","中国少数民族经济","金融","农业管理"]
        			},
        			{
        				collegeId: "005",
        				collegeName: "文学与新闻传播学院",
        				collegeCode: "027-67842812",
        				majors: ["民俗学","文艺学","语言学及应用语言学"," 汉语言文字学","中国古代文学","中国现当代文学",
        				"中国少数民族语言文学","比较文学与世界文学","新闻学","传播学","新闻与传播","汉语国际教育"]
        			},
        			{
        				collegeId: "006",
        				collegeName: "电子信息工程学院",
        				collegeCode: "027-",
        				majors: ["光学工程","信息与通信工程","电子信息"]
        			},
        			{
        				collegeId: "007",
        				collegeName: "化学与材料科学学院",
        				collegeCode: "027-67842752",
        				majors: ["无机化学","分析化学","有机化学"," 物理化学","高分子化学与物理","材料与化工"]
        			},
        			{
        				collegeId: "008",
        				collegeName: "计算机科学学院",
        				collegeCode: "027-67841987",
        				majors: ["计算机科学与技术","电子信息"]
        			}]
        		}
        	}
        },
        methods: {
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
	.all{
		min-height: 100%;
		min-width: 100%;
		position: absolute;
		background: #F9F9F9;
	}
	.container{
		width: 1200px;
		/*height: 1015px;*/
		margin: 15px auto;
		display: flex;					/*弹性盒子布局*/
		flex-direction: column;
	}
	.nav{
		width: 100%;
		height: 58px;
		background: #EEEEEE;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.nav-left{
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.nav-link{
		width: 272px;
		height: 57px;
		background: #EEEEEE;
		font-size: 16px;
		color: #676666;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.nav-link-active{
		background: #1296DB;
		color: #FFFFFF;
	}
	.nav-right{
		width: 60px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		font-size: 16px;
		color: #676666;
		margin-right: 28px;
	}
	.nav-right span{
		margin-left: 8px;
	}
	.content{
		width: 100%;
		background: #FFFFFF;
	}
	.introduction-div{
		width: 1098px;
		margin: 30px 31px 0px 73px;
		color: #000000;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.introduction-left{
		width: 787px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.school-title{
		font-size: 32px;
	}
	.english-name{
		font-size: 12px;
		margin: 14px 0px 14px 3px;
	}
	.introduction-content{
		margin-bottom: 18px;
	}
	.introduction{
		font-size: 14px;
		line-height: 30px;
	}
	.others-line{
		height: 17px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-bottom: 18px;
		font-size: 14px;
	}
	.others-item{
		width: 253px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.others-item-th{
		margin-right: 25px;
	}
	.others-item-td{
		color: #676666;
	}
	.master-content-hrdiv{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.master-content-title{
		font-size: 16px;
		color: #000000;
	}
	.master-content-hr{
		width: 723px;
		height: 2px;
		/*border-bottom: 1px soild #efefef;*/
		background: #efefef;
	}
	.master-content-item{
		width: 100%;
		margin-top: 18px;
	}
	.master-content-font{
		width: 100%;
		height: 16px;
		font-size: 14px;
		color: #000000;
		padding: 18px 0px 9px 0px;
	}
	.major-table-div{
		width: 740px;
		border: 1px solid #D1CDCB;
		border-bottom: none;
		font-size: 14px;
		color: #000000;
	}
	.major-table-th{
		width: 100%;
		height: 39px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	.code-and-name{
		width: 442px;
		height: 100%;
		border-right: 1px solid #D1CDCB;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #D1CDCB;
	}
	.enrollment-specialty{
		width: 296px;
		height: 39px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #D1CDCB;
	}
	.college-major-div{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.college{
		width: 442px;
		border-right: 1px solid #D1CDCB;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #D1CDCB;
	}
	.major{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.introduction-right{
		width: 311px;
	}
	.introduction-right img{
		width: 234px;
		height: 236px;
		margin-left: 77px;
	}
</style>