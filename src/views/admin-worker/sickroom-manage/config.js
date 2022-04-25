export const tableConfig = {
    isShowSelection: true,
    // isShowIndex: true,
    isShowAddBtn: true,
    isShowDeleteBtn: true,
    isExpand: true,
    // isShowSearchBtn: true,
    // searchBtnPlaceholder: '请输入要查询的任务',
    propList: [
      {
        prop: 'addr',
        label: '病房地址',
        minWidth: '100'
      },
      {
        prop: 'caregiverName',
        label: '负责护工的姓名',
        minWidth: '100'
      },
      {
        prop: 'level',
        label: '护理级别',
        minWidth: '100'
      },
      {
        prop: 'num',
        label: '病床数量',
        minWidth: '100'
      }
    ]
  }
  