<template>
	<!-- 网站版权信息区域 -->
    <div class="copyright-div">
    	<div class="copyright-line">
    		<span class="copyright-font">研论指南 • 研论协议 • 研论隐私保护指引</span>
    	</div>
    	<div class="copyright-line">
    		<span class="copyright-font">应用 • 工作 • 申请开通研论机构号</span>
    	</div>
    	<div class="copyright-line">
    		<span class="copyright-font">侵权举报 • 网上有害信息举报专区</span>
    	</div>
    	<div class="copyright-line">
    		<span class="copyright-font">违法和不良信息举报：{{websiteInfo.tel}}</span>
    	</div>
    	<div class="copyright-line">
    		<span class="copyright-font">联系我们：{{websiteInfo.email}}</span>
    	</div>
    </div>
    <!-- end of 网站版权信息区域 -->
</template>

<script>
	export default{
		name: "Copyright",
		data() {
			return{
				// 后台获取的网站信息
        		websiteInfo: {
        			tel: '123456789',			// 网站联系电话
        			email: '123456789@qq.com'	// 网站联系邮箱
        		}
			}
		}
	}
</script>

<style scoped>
	.copyright-div{
		width: 100%;
		height: 184px;
		margin-top: 16px;
	}
	.copyright-line{
		width: 100%;
		height: 30px;
		background: #F9F9F9;
		display: flex;
		justify-content: flex-start;					/*横轴左对齐*/
		align-items: center;							/*纵轴居中对齐*/
	}
	.copyright-font{
		color: #8A8A8A;
		font-family: MicrosoftYaHei;
		font-size: 12px;
		font-weight: 400;
		padding-left: 16px;
	}
</style>