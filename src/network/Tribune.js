import {request} from "./request";

export function getPosts(start,length) {
    return request({
        method:'get',
        url:'/conversation/queryAllLimit',
        params:{
            start,
            length
        }
    })
}

export function getMyPosts(email) {
    return request({
        method:'get',
        url:'/conversation/getMyConversation',
        params:{
            email
        }
    })
}