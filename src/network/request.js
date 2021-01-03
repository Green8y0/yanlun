import axios from 'axios'

export function request(config) {
    //1.创建axios的实例
    const instance = axios.create({
        baseURL:"http://152.136.185.210:8000/api/w6",
        timeout:5000
    })

    //2.axios的拦截器
    //2.1请求拦截器的作用
    instance.interceptors.request.use(config=>{
        return config
    },error => {

    })
    //2.2响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },error => {
        console.log(error)
    })
    //3.发送真正的请求
    return instance(config)
}