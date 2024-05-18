export type TableListItem = {
  type?:string;
  key: number;
  disabled?: boolean;
  href: string;
  avatar: string;
  name: string;
  owner: string;
  desc: string;
  callNo: number;
  status: string;
  updatedAt: Date;
  createdAt: Date;
  progress: number;
};
export type CardListItem = {
  iccid: number|string;
  phone: string;
  imsi: string;
  type: string; 
  apn:string;
  apnType:string|number;
  locationService: string|number;
  netAddService: string;
  netAddServiceType: string;
  automaticRenewal:string; //自动续费
  automaticRenewalType:string|number;
  netStatus: string;
  pool: string; //流量池
  authentication:string;//实名状态
  deviceStatus: string; //设备状态
  remainingShutdownMonths:string;//剩余停号保机月数
  deviceNum:string;//设备号码
  monthlyConsumption:string;//本月用量
  packageSpecification:string;//套餐规格
  packageTotal:string;//套餐总量
  packageUsed:string;//套餐已用
  packageSurplus:string;//套餐剩余
  testExpirationTime:string;//测试期过期时间
  quietPeriod:string;//沉默期
  activationTime:string;//激活时间
  smsServiceExpires:string;//短信服务过期时间
  remark:string; //备注
};
export type TableListPagination = {
  type?:string;
  total: number;
  pageSize: number;
  current: number;
};

export type TableListData = {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
};

export type TableListParams = {
  type?:string;
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
};
