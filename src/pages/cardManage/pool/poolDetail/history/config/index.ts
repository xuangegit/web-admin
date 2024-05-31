

export const columns = [
    {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
    valueType:'dateTime',
    hideInSearch:true,
    width:120,
  },
  
  {
    title: '',
    dataIndex: 'dateTimeRange',
    key: 'time',
    hideInTable:true,
    valueType:'dateTimeRange',
    Search:{
        transform:(value:any)=>{
            return value?{
                startTime:value[0],
                endTime:value[1]
            }:undefined
        }
    },
    fieldProps:{
        placeholder:['开始时间','结束时间']
    }
  },
  
 
  
  {
    title: '所属流量池',
    dataIndex: 'pool',
    key: 'pool',
    width:100,
    hideInSearch:true,
  },
  
  
  {
    title: '剩余停号保机月份',
    dataIndex: 'remainingShutdownMonths',
    key: 'remainingShutdownMonths',
    width:140,
    hideInSearch:true,
  },
  {
    title: '设备号码',
    dataIndex: 'deviceNum',
    key: 'deviceNum',
    width:120,
    hideInSearch:true,
  },
  {
    title: '当月用量',
    dataIndex: 'monthlyConsumption',
    key: 'monthlyConsumption',
    width:120,
    hideInSearch:true,
  },
  {
    title: '套餐规格',
    dataIndex: 'packageSpecification',
    key: 'packageSpecification',
    width:120,
    ellipsis: true,
    hideInSearch:true,
  },
  {
    title: '套餐总量',
    dataIndex: 'packageTotal',
    key: 'packageTotal',
    width:100,
    hideInSearch:true,
  },
  {
    title: '套餐已用',
    dataIndex: 'packageUsed',
    key: 'packageUsed',
    width:100,
    hideInSearch:true,
  },
  {
    title: '套餐剩余',
    width:100,
    dataIndex: 'packageSurplus',
    key: 'packageSurplus',
    hideInSearch:true,
  },
  {
    title: '测试期过期时间',
    dataIndex: 'testExpirationTime',
    key: 'testExpirationTime',
    width:130,
    hideInSearch:true,
  },
  
  {
    title: '沉默期',
    dataIndex: 'quietPeriod',
    key: 'quietPeriod',
    width:100,
    hideInSearch:true,
  },
  {
    title: '激活时间',
    dataIndex: 'activationTime',
    key: 'activationTime',
    width:100,
    hideInSearch:true,
  },
  {
    title: '短信服务过期时间',
    dataIndex: 'smsServiceExpires',
    key: 'smsServiceExpires',
    width:140,
    hideInSearch:true,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
    width:100,
    ellipsis:true,
    hideInSearch:true,
  },
  ]