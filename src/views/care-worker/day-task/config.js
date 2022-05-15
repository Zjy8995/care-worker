export const tableConfig = {
  // isShowSelection: true,
  // isShowIndex: true,
  // isShowAddBtn: true,
  // isShowDeleteBtn: true,
  isShowSearchBtn: true,
  searchBtnPlaceholder: "请输入要查询的任务",
  propList: [
    {
      prop: "projectName",
      label: "任务名称",
    },
    {
      prop: "olderName",
      label: "所属老人",
    },
    {
      prop: "bedName",
      label: "床位地址",
    },
    {
      prop: "projectInfo",
      label: "项目简介",
      minWidth: "180",
    },
    {
      prop: "beginDate",
      label: "开始时间",
      minWidth: "150",
    },
    {
      prop: "doneDate",
      label: "完成时间",
    },
    {
      prop: "catagory",
      label: "项目分类",
    },
    {
      prop: "status",
      label: "完成状态",
    },
    // {
    //   prop: 'createTime',
    //   label: '创建时间'
    // }
  ],
};
