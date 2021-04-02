import axios from 'axios'

export function request(config) {
    //1.创建axios的实例
    const instance = axios.create({
        baseURL:"http://47.96.234.106:8080",
        // baseURL:"/api",
        timeout:20000
    })

    //2.axios的拦截器
    //2.1请求拦截器的作用
    instance.interceptors.request.use(config=>{
        console.log('2.1拦截器的config = ', config);
        return config
    },error => {

    })
    //2.2响应拦截
    instance.interceptors.response.use(res=>{
        console.log('2.2拦截器的res.data = ', res.data);
        return res.data
    },error => {
        console.log(error)
    })
    //3.发送真正的请求
    return instance(config)
}
