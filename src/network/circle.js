import {request} from "./request";

export function getCircle(email,start,length) {
    return request({
        method:'get',
        url:'circle/getCircleInfo',
        params:{
            email,
            start,
            length
        }
    })
}

export function getCircleComment(cid) {
    return request({
        method:'get',
        url:'circle/comment',
        params:{
            cid
        }
    })
}

