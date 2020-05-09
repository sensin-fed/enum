/*
 * @Description:
 * @Author: hemanyuan
 * @Date: 2019-07-25 12:22:26
 * @LastEditors  : liujians
 * @LastEditTime : 2020-01-20 18:34:47
 */
import * as ulms from './ulms'
import * as pcms from './pcms'

/**
 * @description 性别枚举
 */
export const sex = {
  0: '其它',
  1: '男',
  2: '女'
}

/**
 * @description 时间单位枚举
 */
export const wagesUnit = {
  1: '天',
  2: '月',
  3: '年'
}

/**
 * @description 数据来源枚举
 */
export const dataOrigin = {
  1: '网站',
  2: '企业'
}

/**
 * @description 来源枚举
 */
export const origin = {
  web: 'web',
  offline: '线下',
  h5: 'h5'
}

/**
 * @description 支付方式枚举
 */
export const payWay = {
  1: '支付宝',
  2: '微信',
  3: '银行卡',
  4: 'paypal',
  5: '其它'
}

/**
 * @description 订单状态
 */
export const orderStatus = {
  1: '待付款',
  2: '已付款',
  3: '已关闭'
}

/**
 * @description 统一登录页个环境url
 */
export const passportUrl = {
  dev: 'http://localhost:3004',
  test: 'http://passport.test.sensin-tech.cn/',
  staging: 'http://passport.staging.sensin-tech.cn',
  production: 'https://passport.offerxiansheng.com'
}

/**
 * @description 统一登录页个环境url
 */
export const weCareerPassportUrl = {
  dev: 'http://localhost:3007',
  test: 'http://passport.test.wecareer.com.cn/',
  staging: 'http://passport.staging.wecareer.com.cn',
  production: 'https://passport.wecareer.com.cn'
}

/**
 * @description pcms和ulms里的私有枚举
 */
export default {
  ulms,
  pcms
}
