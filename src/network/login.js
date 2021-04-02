import {request} from "./request";

export function login(email,password) {
    return request({
        method:'post',
        url:'/login',
        headers: { 'content-type': 'application/json' },
        data:{
            email:email,
            password:password
        }
    })
}