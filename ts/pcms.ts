/*
 * @Description: pcms 枚举
 * @Author: Joie Qin
 * @Date: 2019-07-22 09:34:51
 * @LastEditors: Joie Qin
 * @LastEditTime: 2019-08-02 10:10:48
 */
export enum CourseState {
  '未上架' = 1,
  '已上架' = 2,
}

export enum LessonType {
  '教学内容' = 1,
  '作业' = 2,
}

export enum LessonTypeDetail {
  '作业' = 1,
  '图文' = 2,
  '视频' = 3,
}

export enum OrderState {
  '待付款' = 1,
  '已付款' = 2,
  '已关闭' = 3,
}

export default {};
