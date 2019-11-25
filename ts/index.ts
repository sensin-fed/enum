import * as ulms from './ulms';
import * as pcms from './pcms';

/**
 * @description 性别枚举
 */
export enum Sex {
  '其它' = 0,
  '男' = 1,
  '女' = 2,
}

/**
 * @description 时间单位枚举
 */
export enum WagesUnit {
  '天' = 1,
  '月' = 2,
  '年' = 3,
}

/**
 * @description 数据来源枚举
 */
export enum DataOrigin {
  '网站' = 1,
  '企业' = 2,
}

/**
 * @description 来源枚举
 */
export enum Origin {
  web = 'web',
  offline = '线下',
  h5 = 'h5',
}

/**
 * @description 支付方式枚举
 */
export enum PayWay {
  '支付宝' = 1,
  '微信' = 2,
  '银行卡' = 3,
  'paypal' = 4,
  '其它' = 5,
}

/**
 * @description 订单状态
 */
export enum OrderStatus {
  '待付款' = 1,
  '已付款' = 2,
  '已关闭' = 3,
}

/**
 * @description 统一登录页个环境url
 */
export enum PassportUrl {
  dev = 'http://localhost:3004',
  test = 'http://passport.test.sensin-tech.cn/',
  production = 'https://passport.offerxiansheng.com',
}

export default {
  ulms,
  pcms,
};
