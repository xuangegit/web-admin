export const columns = [
  {
    title: '收货人',
    dataIndex: 'user',
    key: 'user',
    hideInSearch: true,
  },

  {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
    hideInSearch: true,
    valueType: 'dateTimeRange',
  },

  {
    title: '所在地区',
    dataIndex: 'area',
    key: 'area',
    hideInSearch: true,
  },

  {
    title: '详细地址',
    dataIndex: 'address',
    key: 'deviceNum',
    width: 120,
    hideInSearch: true,
  },
];
