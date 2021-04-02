import {request} from "./request";

//获得院校信息
export function getSchoolInfo(schoolName) {
    return request({
        url:'school/getSchoolInfo',
        params:{
            schoolName
        }
    })
}

//获得分数线
export function getSchoolLine(school,major) {
    return request({
        url:'school/getSchoolLine',
        params:{
            school,
            major
        }
    })
}
//本科是该学校的 92数据
export function getStatisticsInfo(schoolName) {
    return request({
        url:'school/getStatisticsInfo',
        params:{
            schoolName
        }
    })
}
//目标院校是该学校 92数据
export function getStatisticsInfo2(targetSchoolName) {
    return request({
        url:'school/getStatisticsInfo2',
        params:{
            targetSchoolName
        }
    })
}