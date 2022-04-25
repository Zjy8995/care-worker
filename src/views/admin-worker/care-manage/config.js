export const tableConfig = {
  isShowSelection: true,
  // isShowIndex: true,
  isShowAddBtn: true,
  isShowDeleteBtn: true,
  // isShowSearchBtn: true,
  // searchBtnPlaceholder: '请输入要查询的任务',
  propList: [
    {
      prop: 'userId',
      label: '工号'
    },
    {
      prop: 'name',
      label: '护工名'
    },
    {
      prop: 'sex',
      label: '性别',
      minWidth: '100'
    },
    {
      prop: 'idCard',
      label: '身份证号',
      minWidth: '100'
    },
    {
      prop: 'level',
      label: '护工等级',
      minWidth: '100'
    },
    {
      prop: 'birthday',
      label: '出生日期',
      minWidth: '100'
    },
    {
      prop: 'email',
      label: '邮箱',
      minWidth: '100'
    },
    {
      prop: 'address',
      label: '住址',
      minWidth: '100'
    },
    {
      prop: 'info',
      label: '简介',
      minWidth: '100'
    }
  ]
}
