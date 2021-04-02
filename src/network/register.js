import {request} from "./request";

export function userEmailIsExist(email) {
    return request({
        url:'/userEmailIsExist',
        params:{
            email
        }
    })
}

export function getSchoolsName() {
    return request({
        method:'get',
        headers: { 'content-type': 'application/json' },
        url:'school/allSchoolsName'
    })
}

export function setRegisterInfo(register) {
    return request({
        method:'post',
        headers: { 'content-type': 'application/json' },
        url:'/register',
        data:{
            email:register.email,
            password:register.password,
            school:register.mySchool,
            targetSchool:register.targetSchool,
            masterOption:register.masterOption
        }
    })
}

