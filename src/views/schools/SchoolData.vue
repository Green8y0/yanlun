<template>
    <div class="all">
        <div class="container">
            <!-- 链接区域 -->
            <SchoolInfoNav></SchoolInfoNav>
            <!-- end of 链接区域 -->

            <div class="content">
                <div class="introduction-div">
                    <div class="introduction-left">
                        <span class="school-title">{{schoolInfos.title}}</span>
                        <!-- 简介 -->
                        <div class="introduction-content">
                            <span v-for="(introduction,index) in schoolInfos.introductions" class="introduction">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{introduction}}
                            </span>
                        </div>

                        <!-- 历年分数线区域 -->
                        <div class="subContent-div">
                            <!-- 分割线区域 -->
                            <div class="subContent-hr-div" style="margin-top: 0px;">
                                <span>中南民族大学研究生分数线</span>
                                <div class="subContent-hr"></div>
                                <span @click="changeShowPassingScore()" class="packup-button"
                                      v-if="showPassingScore">收起</span>
                                <span @click="changeShowPassingScore()" class="packup-button" v-else>展开</span>
                            </div>

                            <div class="show-div" v-show="showPassingScore">
                                <div v-for="(score,index) in schoolInfos.passingScoreInfo" :key="index"
                                     class="passing-score-div">
                                    <span class="passing-score-title">
                                        {{index+1}}、{{score.year}}年研究生分数线
                                    </span>
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{score.introduction}}</span>
                                    <a :href="score.accessory.address" v-if="score.accessory.address"
                                       class="passing-score-accessory" target="_blank">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附件：{{score.accessory.name}}
                                    </a>
                                </div>

                                <!-- 折线图筛选input区域 -->
                                <div class="passing-score-div">
                                    <div class="passing-score-search-div">
                                        <span class="passing-score-title">
                                            {{schoolInfos.passingScoreInfo.length+1}}、中南民族大学历年专业分数线折线图
                                        </span>
                                        <input type="text" name="major" v-model="major" class="passing-score-search"
                                               placeholder="提交你想查询的历年专业，多个请用|分割">
                                        <button @click="majorSubmit">提交</button>
                                    </div>
                                </div>

                                <!-- 中南民族大学历年专业分数线折线图 -->
                                <div id="pie3"  class="chart-div">
                                    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
                                    <div id="main3" class="chart"></div>
                                </div>
                            </div>

                        </div>
                        <!-- end of 历年分数线区域 -->

                        <!-- 报录比区域 -->
                        <div class="subContent-div">
                            <!-- 分割线区域 -->
                            <div class="subContent-hr-div">
                                <span>中南民族大学历年报录比</span>
                                <div class="subContent-hr"></div>
                                <span @click="changeShowReportRatio()" class="packup-button"
                                      v-if="showReportRatio">
                                    收起
                                </span>
                                <span @click="changeShowReportRatio()" class="packup-button" v-else>展开</span>
                            </div>

                            <div class="show-div" v-show="showReportRatio">
                                <div v-for="(ratio,index) in schoolInfos.reportRatio" :key="index"
                                     class="passing-score-div">
                                    <span class="passing-score-title">
                                        {{index+1}}、{{ratio.year}}年研究生分数线
                                    </span>
                                    <a :href="ratio.accessory.address" v-if="ratio.accessory.address"
                                       class="passing-score-accessory" target="_blank">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;附件：{{ratio.accessory.name}}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- end of 报录比区域 -->

                        <!-- 考研去向和考研生源 -->
                        <div class="subContent-div">
                            <!-- 分割线区域 -->
                            <div class="subContent-hr-div">
                                <span>考研去向和考研生源</span>
                                <div class="subContent-hr"></div>
                                <span @click="changeShowPostGraduateWhere()" class="packup-button"
                                      v-if="showPostGraduateWhere">
                                    收起
                                </span>
                                <span @click="changeShowPostGraduateWhere()" class="packup-button" v-else>
                                    展开
                                </span>
                            </div>

                            <div class="show-div" v-show="showPostGraduateWhere">
                                <div class="passing-score-div">
                                    <span class="passing-score-title">
                                        1、中南民族大学的学生目标考研去向（来源于系统数据库）
                                    </span>
                                </div>

                                <!-- 中南民族大学的学硕目标考研去向 -->
                                <div id="pie1" class="chart-div">
                                    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
                                    <div id="main1" style="height: 300px" class="chart"></div>
                                </div>

                                <div class="passing-score-div" style="margin-top: 26px;">
                                    <span class="passing-score-title">
                                        2、中南民族大学的生源（来源于系统数据库）
                                    </span>
                                </div>

                                <!-- 中南民族大学的生源 -->
                                <div id="pie2" class="chart-div">
                                    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
                                    <div id="main2" style="height: 300px" class="chart"></div>
                                </div>
                            </div>
                        </div>
                        <!-- end of 考研去向和考研生源 -->
                    </div>

                    <div class="introduction-right">
                        <img :src="require('@/assets/img/common/'+schoolInfos.schoolLogo+'.png')">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import SchoolInfoNav from '@/component/SchoolInfoNav'
    import * as echarts from 'echarts'
    import {getSchoolLine,getStatisticsInfo,getStatisticsInfo2} from '@/network/schools'
    export default {
        name: "SchoolData",
        components: {
            SchoolInfoNav
        },
        data(){
            return{
                major:'',
                isShow:false,
                showPassingScore: true,                             // 历年分数线显示标志
                showReportRatio: true,                              // 报录比显示标志
                showPostGraduateWhere: true,                        // 考研去向显示标志,
                schoolInfos: {
                    title: "2020年中南民族大学考研相关政策",
                    createTime: "1951年",                                        // 创办时间
                    famousAlumni: ["吴泽霖","林安彬"],                            // 知名校友
                    competentDepartment: "国家民族事务委员会",                   // 主管部门
                    officialWebsite: "https://www.scuec.edu.cn",                // 学校官网
                    masterOfficialWebsite: "http://www.scuec.edu.cn/yjsy/",     // 研究生官网
                    schoolLogo: "scuec_university_logo",
                    introductions: [// 简介
                        "（1）实行差额复试。差额比例一般不低于120%，各专业（方向）具体差额比例由招生单位自主确定。招生单位在复试录取细则中应明确考生进入复试的初试成绩要求，确定参加复试的考生名单。复试名单经研究生院审核同意后，提前在本招生单位网站上进行公示。招生单位逐一通知复试考生本人，并告知复试时间、方式、网络远程复试注意事项等信息。招生单位通过“中国研究生招生信息网”向调剂复试考生发送复试通知。",
                        "（2）“少数民族高层次骨干人才计划”（以下简称“骨干计划”）复试考生成绩要求为：外语不低于30分，业务课不低于国家对普通计划考生的分数要求，总分不低于248分。考生按初试折算分（考生初试折算分=考生初试总分/该专业所在学科国家线×100）高低排序，根据差额复试比例不低于120%和分省招生计划的要求，各省按分省招生计划数的200%，确定差额复试名单。“骨干计划”复试考生由研招办通知考生本人，复试在相应学院进行。",
                        "（3）“退役大学生士兵”计划（以下简称“士兵计划”）复试考生成绩要求为：外语不低于30分，业务课不低于国家对普通计划考生的分数要求，总分不低于248分。“士兵计划”复试考生由研招办通知考生本人，复试在相应学院进行。",
                        "（4）我校各专业均不进行破格复试。"
                    ],
                    passingScoreInfo: [{
                        year: "2020",
                        introduction: "2020年中南民族大学硕士研究生招生初试已经结束。根据历年中南民族大学考研复试分数线公布时间推定，2020年中南民族大学复试分数线预计于3月中旬公布。",
                        accessory: {                         // 附件
                            address: null,
                            name: null
                        }
                    },
                        {
                            year: "2019",
                            introduction: "参考2019年全国硕士研究生招生考试考生进入复试的初试成绩基本要求（学术学位类、专业学位类）",
                            accessory: {
                                address: "https://yz.chsi.com.cn/kyzx/kp/201903/20190315/1772265280.html",
                                name: "2019年全国硕士研究生招生考试考生进入复试的初试成绩基本要求(学术学位类)"
                            }
                        },
                        {
                            year: "2018",
                            introduction: "参考2018年全国硕士研究生招生考试考生进入复试的初试成绩基本要求（学术学位类、专业学位类）",
                            accessory: {
                                address: "https://yz.chsi.com.cn/kyzx/kp/201803/20180316/1670298651.html",
                                name: "2018年全国硕士研究生招生考试考生进入复试的初试成绩基本要求(学术学位类)"
                            }
                        }],
                    reportRatio: [{
                        year: "2020",
                        accessory: {
                            address: "http://m.hu.kaoyan365.cn/uploadfile/2020/0713/20200713014453502.pdf",
                            name: "中南民族大学2020年拟录取硕士研究生名单公示表(学术学位类)"
                        }
                    },
                        {
                            year: "2019",
                            accessory: {
                                address: "http://img1.kybimg.com/ohr/2019/05/16/100811_5cdcc60b8b84f.pdf",
                                name: "中南民族大学2019年拟录取硕士研究生名单公示表(学术学位类)"
                            }
                        },
                        {
                            year: "2018",
                            accessory: {
                                address: "http://img1.kybimg.com/ohr/2018/04/28/161958_5ae42eae4e0e4.pdf",
                                name: "中南民族大学2018年拟录取硕士研究生名单公示表(学术学位类)"
                            }
                        }]
                }
            }
        },
        mounted(){
            getStatisticsInfo(this.$store.state.clickSchool).then(res=>{
                this.initData1(res.data);
            })
            getStatisticsInfo2(this.$store.state.clickSchool).then(res=>{
                console.log(res.data);
                this.initData2(res.data);
            })

        },
        methods:{
            changeShowPassingScore() {
                // 修改历年分数线显示标志
                this.showPassingScore = !this.showPassingScore
                console.log(`showPassingScore = ${this.showPassingScore}`)
            },
            changeShowReportRatio() {
                // 修改报录比显示标志
                this.showReportRatio = !this.showReportRatio
                console.log(`showReportRatio = ${this.showReportRatio}`)
            },
            changeShowPostGraduateWhere() {
                // 修改考研去向显示标志
                this.showPostGraduateWhere = !this.showPostGraduateWhere
                console.log(`showPostGraduateWhere = ${this.showPostGraduateWhere}`)
            },
            majorSubmit(){
                this.initdata3();
                this.isshow1=true;
            },
            //初始化数据
            initData1(data) {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main1'));
                // 绘制图表
                myChart.setOption({
                    title : {
                        text: this.$store.state.clickSchool+'的学生目标考研去向',//主标题
                        subtext: '来源于系统数据库',//副标题
                        x:'center',//x轴方向对齐方式
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 'bottom',
                        data: ['985','211','一本','其他']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:data._985Num, name:'985'},
                                {value:data._211Num, name:'211'},
                                {value:data.first, name:'一本'},
                                {value:data.other, name:'其他'},
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
            initData2(data){
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main2'));

                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: this.$store.state.clickSchool+"的生源",
                        subtext: '来源于系统数据库',//副标题
                        textStyle: {//设置标题的文本样式
                            color: '#ffffff'
                        },
                        x:'center'
                    },
                    backgroundColor: '#2c343c',
                    visualMap: {
                        // 不显示 visualMap 组件，只用于明暗度的映射
                        show: false,
                        // 映射的最小值为 80
                        min: 80,
                        // 映射的最大值为 600
                        max: 600,
                        inRange: {// 明暗度的范围是 0 到 1
                            colorLightness: [0.5, 0.8]
                        }
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        roseType: 'angle',
                        data: [
                            {value:data._985Num, name:'985'},
                            {value:data._211Num, name:'211'},
                            {value:data.first, name:'一本'},
                            {value:data.other, name:'其他'},
                        ],
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {//将标签的视觉引导线的颜色设为浅色
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        },
                        itemStyle: {//阴影的配置,还可以设置扇形的颜色，在normal中编辑color来设置，设置后的扇形颜色是一样的
                            emphasis: {
                                // 阴影的大小
                                shadowBlur: 200,
                                // 阴影颜色
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]

                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },
            majorSubmit(){
                getSchoolLine(this.$store.state.clickSchool,this.major).then(res=>{
                    console.log(res);

                    const option = {
                        title : {
                            text: this.$store.state.clickSchool+'专业分数线',//主标题
                            subtext: '来源于系统数据库',//副标题
                            x:'center',//x轴方向对齐方式
                        },
                        legend: {
                            data: ['软件工程', '计算机科学'],
                            orient: 'vertical',
                            bottom: 'bottom',
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        xAxis: {
                            type: 'category',
                            data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [265, 275, 290, 310, 301, 295, 300],
                            name: '软件工程',
                            type: 'line'
                        }, {
                            data: [270, 280, 275, 280, 286, 270, 301],
                            name: '计算机科学',
                            type: 'line'
                        }]
                    }

                    option.legend.data=res.score.legend;
                    option.xAxis.data=res.score.xdata;
                    option.series=res.score.series;
                    console.log(option)
                    this.myChartOne = echarts.init(document.getElementById('main3'))
                    this.myChartOne.setOption(option)
                })
                this.isShow=true;
            },

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
        display: flex;                  /*弹性盒子布局*/
        flex-direction: column;
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
    .introduction-content{
        margin-top: 43px;
        margin-bottom: 23px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 14px;
        line-height: 30px;
    }

    .subContent-div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 16px;
    }
    .show-div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .subContent-hr-div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 23px 0px;
    }
    .subContent-hr{
        width: 560px;
        height: 2px;
        background: #EEEEEE;
    }
    .packup-button{
        cursor: pointer;
    }

    .passing-score-div{
        width: 773px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 14px;
        line-height: 30px;
    }
    .passing-score-title{
        font-size: 16px;
    }
    .passing-score-accessory{
        font-size: 12px;
        color: #1296DB;
    }
    .passing-score-search-div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .passing-score-search-div button{
        width: 60px;
        height: 22px;
        background: #BFBFBF;
        color: #FFFFFF;
        border: 1px solid #BFBFBF;
        border-radius: 2px;
        cursor: pointer;
    }
    .passing-score-search{
        width: 300px;
        height: 22px;
        border: 1px solid #E4E4E4;
        border-radius: 2px;
        margin: 0px 14px 0px 26px;
        padding-left: 6px;
        font-size: 12px;
    }

    .chart-div{
        width: 100%;
        margin-top: 30px;
    }
    .chart{
        width: 100%;
        height: 550px;
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