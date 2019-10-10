import $formFieldsName from '@/locale/fuxi-student';

// 表头的头部公共字段
export const header = [
  {
    dataIndex: $formFieldsName.NAME,
    title: '姓名',
  },
  {
    dataIndex: $formFieldsName.TELPHONE,
    title: '手机号',
  },
];

// 表头的其他字段
export const tableHeaderFields = {
  // 基本tab：头部
  basicHeaderFields: [
    ...header,
    {
      dataIndex: $formFieldsName.SIGN_PROJECT,
      title: '报名项目',
    },
    {
      dataIndex: $formFieldsName.PACKAGE,
      title: '套餐',
    },
  ],
  // 基本tab：尾部
  basicFooterFields: [
    {
      dataIndex: $formFieldsName.SERVICE_STARTTIME,
      title: '服务起始时间',
    },
    {
      dataIndex: $formFieldsName.SERVICE_ENDTIME,
      title: '服务结束时间',
    },
    {
      dataIndex: $formFieldsName.CONSULTANT,
      title: '顾问',
    },
    {
      dataIndex: $formFieldsName.CLASS_GUIDE,
      title: '班导',
    },
    {
      dataIndex: $formFieldsName.LATEST_FOLLOWUP_TIME,
      title: '最新跟进时间',
    },
  ],
  // 意向tab
  intentionFields: [
    ...header,
    {
      dataIndex: $formFieldsName.SCHOOL,
      title: '学校',
    },
    {
      dataIndex: $formFieldsName.PROFESSION,
      title: '专业',
    },
    {
      dataIndex: $formFieldsName.TARGET_INDUSTRY,
      title: '目标行业',
    },
    {
      dataIndex: $formFieldsName.TARGET_COMPANY,
      title: '目标公司',
    },
    {
      dataIndex: $formFieldsName.TARGET_POSITION,
      title: '目标岗位',
    },
    {
      dataIndex: $formFieldsName.TARGET_WORK_LOCATION,
      title: '目标工作地点',
    },
  ],
  // 教学tab
  teachingFields: [
    ...header,
    {
      dataIndex: $formFieldsName.SELECTED_CLASS_INTHEMONTH,
      title: '当月选课',
    },
    {
      dataIndex: $formFieldsName.CURRENT_MONTH_COURSE,
      title: '当月课程',
    },
    {
      dataIndex: $formFieldsName.ONEVSONE_CLASS_ELIMINATION,
      title: '1v1消课',
    },
    {
      dataIndex: $formFieldsName.LITTER_CLASSCOURSE,
      title: '小班课消课',
    },
  ],
};

/**
 * 渲染表单项的数据
 */

// 表单渲染数据的尾部公共数据（因为入学下面没有【最新跟进时间】字段，而督学下面有，所以这里又做了一次拆分）
export const globalFormDataFooterHeader = [
  {
    type: 3,
    id: $formFieldsName.SERVICE_STARTTIME,
    name: '服务起始时间',
    value: '',
  },
  {
    type: 3,
    id: $formFieldsName.SERVICE_ENDTIME,
    name: '服务结束时间',
    value: '',
  },
  {
    type: 1,
    id: $formFieldsName.CONSULTANT,
    name: '顾问',
    value: '',
  },
  {
    type: 1,
    id: $formFieldsName.CLASS_GUIDE,
    name: '班导',
    value: '',
  },
];
export const globalFormDataFooterFooter = [
  {
    type: 1,
    id: $formFieldsName.SCHOOL,
    name: '学校',
    value: '',
  },
  {
    type: 1,
    id: $formFieldsName.PROFESSION,
    name: '专业',
    value: '',
  },
  {
    type: 1,
    id: $formFieldsName.TARGET_INDUSTRY,
    name: '目标行业',
    value: '',
  },
  {
    type: 1,
    id: $formFieldsName.TARGET_COMPANY,
    name: '目标公司',
    value: '',
  },
  {
    type: 1,
    id: $formFieldsName.TARGET_POSITION,
    name: '目标岗位',
    value: '',
  },
  {
    type: 1,
    id: $formFieldsName.TARGET_WORK_LOCATION,
    name: '目标工作地点',
    value: '',
  },
];

// 渲染表单的条件
export const formData = {
  baseHeader: [
    {
      type: 1,
      id: $formFieldsName.NAME,
      name: '姓名',
      value: '',
    },
    {
      type: 1,
      id: $formFieldsName.TELPHONE,
      name: '手机号',
      value: '',
    },
    {
      type: 2,
      id: $formFieldsName.SIGN_PROJECT,
      name: '报名项目',
      value: '',
    },
    {
      type: 2,
      id: $formFieldsName.PACKAGE,
      name: '套餐',
      value: '',
    },
  ],
  baseFooter: [
    ...globalFormDataFooterHeader,
    {
      type: 3,
      id: $formFieldsName.LATEST_FOLLOWUP_TIME,
      name: '最新跟进时间',
      value: '',
    },
    ...globalFormDataFooterFooter,
    {
      type: 1,
      id: $formFieldsName.SELECTED_CLASS_INTHEMONTH,
      name: '当月选课',
      value: '',
    },
    {
      type: 1,
      id: $formFieldsName.CURRENT_MONTH_COURSE,
      name: '当月课程',
      value: '',
    },
    {
      type: 1,
      id: $formFieldsName.ONEVSONE_CLASS_ELIMINATION,
      name: '1v1消课',
      value: '',
    },
    {
      type: 1,
      id: $formFieldsName.LITTER_CLASSCOURSE,
      name: '小班课消课',
      value: '',
    },
  ],
  startBaseFooter: [...globalFormDataFooterHeader, ...globalFormDataFooterFooter],
};
