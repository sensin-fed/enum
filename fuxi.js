// 投递状态
export const jobStageStatus = {
  1: '简历筛选',
  2: '笔试',
  3: '面试',
  4: '获得offer',
  5: '不匹配',
};

// 职位类型
export const jobType = {
  1: '校招',
  2: '社招',
  3: '实习',
};

// 学员状态
export const studentStatus = {
  1: '入学中',
  2: '进行中',
  3: '已结课',
  4: '已休学',
  5: '已退款',
};

// offer满意度
export const offerRate = {
  1: '非常不满意',
  2: '不满意',
  3: '一般',
  4: '满意',
  5: '非常满意',
};

// 新生审批流程状态
export const newStudentApprovalStatus = {
  '1-10': '销售审批中',
  '1-11': '销售审批未通过',
  '1-20': '财务审批中',
  '1-21': '财务审批未通过',
  '1-30': '后期审批中',
  '1-31': '后期审批未通过',
  '1-40': '已撤回',
  '1-50': '报名成功',
};

export default {};
