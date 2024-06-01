export enum OperTypeEnum {
    MANUAL = 'manual',
    SELECTED = 'selected',
}

export enum RenewalType {
  PACKAGE = 'package',
  period = 'period',
  VARIABLE_RATE_PLAN= 'variableRatePlan',
  SMS = 'sms',
}
export enum TypeName {
    'package' = '续费加油包',
    'period' = '续周期套餐',
    'variableRatePlan' = '修改套餐',
    'sms' = '续费短信包',
  }
  export enum TypeDes {
    'package' = '续费后增加当月套餐总量且仅本月有效，当前套餐结束后失效',
    'period' = '增加物联网卡套餐周期，即生成计划套餐',
    'variableRatePlan' = '修改套餐将在当前已有套餐结束后生效',
    'sms' = '增加物联网卡短信服务时长',
  }
  export enum OperTypeNameEnum {
    'cmcc' = '中国移动',
    'cucc' = '中国联通',
    'ctc'= '中国电信',
  }