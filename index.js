import * as ulms from './ulms';
import * as pcms from './pcms';

/**
 * @description 性别枚举
 */
export const sex = {
  0: '其他',
  1: '男',
  2: '女',
};

/**
 * @description 时间单位枚举
 */
export const wagesUnit = {
  1: '天',
  2: '月',
  3: '年',
};


/**
 * @description 数据来源枚举
 */
export const dataOrigin = {
  1: '网站',
  2: '企业',
};

/**
 * @description 来源枚举
 */
export const origin = {
  web: 'web网站',
  offline: '线下',
};

/**
 * @description 支付方式枚举
 */
export const payWay = {
  1: '支付宝',
  2: '微信',
  3: '银行卡',
  4: 'paypal',
  5: '其他',
};

/**
 * @description pcms和ulms里的私有枚举
 */
export default {
  ulms,
  pcms,
};
