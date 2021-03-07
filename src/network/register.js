import {request} from "./request";

export function checkEmail(email) {
    return request({
        url:'/register/checkEmail',
        params:{
            email
        }
    })
}


export function getSchoolsName() {
    return request({
        url:'/register/getSchoolsName',
    })
}

