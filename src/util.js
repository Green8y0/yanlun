function getCurrentRouter(e){
    	let arr = e.split("/")
    	// 返回当前路由
    	return arr[arr.length-1]
    }

export function getUrlInfo(){
	let currentUrl=location.href						// 取得整个地址栏
	let num=currentUrl.indexOf("?")						// 返回参数位置

	currentUrl=currentUrl.substr(num+1) 				//取得所有参数赋值给currentUrl
	let arr=currentUrl.split("&")						//各个参数的key:value存入到数组arr中

	let currentRouter = getCurrentRouter(arr[0])

	let name,value
	for(let i=0;i < arr.length;i++){
		num=arr[i].indexOf("=")
		if(num>0){
			name=arr[i].substring(0,num)				// 设置参数的key
			value=arr[i].substr(num+1)					// 设置参数的value
			this[name]=value
		}
	}
	let urlInfo = {
		'currentUrl': currentUrl,
		'currentRouter': currentRouter,
		'name': name,
		'value': value
	}
	return urlInfo
}