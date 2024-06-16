import { ProColumnType } from '@ant-design/pro-components';
import { CardListItem } from '../data';

export const getColumns = (isDetail?: boolean): ProColumnType<CardListItem>[] => {
  const columns: ProColumnType<CardListItem>[] = [
    {
      title: 'ICCID',
      dataIndex: 'iccid',
      key: 'iccid',
      // hideInSearch: true,
      width: 160,
      render: (_, record) => {
        return isDetail ? (
          <>53473467036030</>
        ) : (
          <a
            onClick={() => {
              window.location.href = `/card/detail?id=${record?.id}&iccid=${record?.iccid}`;
            }}
          >
            1231231
          </a>
        );
      },
    },
    {
      title: '电话号码',
      dataIndex: 'phone',
      key: 'phone',
      width: 120,
      sorter: true,
    },
    {
      title: 'IMSI',
      dataIndex: 'imsi',
      key: 'imsi',
      width: 120,
      sorter: true,
    },

    {
      title: '卡类型',
      dataIndex: 'type',
      key: 'type',
      valueType: 'select',
      width: 100,
      onFilter: true,
      filters: true,
      valueEnum: {
        1: '按月单卡',
        2: '流量池卡',
        3: '自定义卡',
      },
      // sorter:true,
    },
    {
      title: 'APN',
      dataIndex: 'apn',
      key: 'apn',
      width: 100,
    },
    {
      title: 'APN类型',
      dataIndex: 'apnType',
      key: 'apnType',
      valueType: 'select',
      width: 100,
      hideInSearch: true,
      onFilter: true,
      valueEnum: {
        0: {
          text: '未开启',
          status: 'default',
        },
        1: {
          text: '开启',
          status: 'success',
        },
      },
    },
    {
      title: '定位服务',
      dataIndex: 'locationService',
      key: 'locationService',
      valueType: 'select',
      hideInSearch: true,
      width: 80,
      onFilter: true,
      valueEnum: {
        0: {
          text: '未开启',
          status: 'default',
        },
        1: {
          text: '开启',
          status: 'success',
        },
      },
    },
    {
      title: '网络增值服务',
      width: 120,
      dataIndex: 'netAddService',
      key: 'netAddService',
      hideInSearch: true,
      onFilter: true,
      valueEnum: {
        0: {
          text: '无',
          status: 'default',
        },
        1: {
          text: '有',
          status: 'success',
        },
      },
    },
    {
      title: '网络增值服务状态',
      dataIndex: 'netAddServiceStatus',
      key: 'netAddServiceStatus',
      hideInSearch: true,
      width: 160,
      onFilter: true,
      filters: true,
      valueEnum: {
        0: {
          text: '无',
          status: 'default',
        },
        1: {
          text: '有',
          status: 'success',
        },
      },
    },
    {
      title: '自动续费',
      dataIndex: 'automaticRenewal',
      key: 'automaticRenewal',
      hideInSearch: true,
      width: 100,
      onFilter: true,
      filters: true,
      valueEnum: {
        0: {
          text: '否',
          status: 'default',
        },
        1: {
          text: '是',
          status: 'success',
        },
      },
    },
    {
      title: '网络状态',
      dataIndex: 'netStatus',
      key: 'netStatus',
      hideInSearch: true,
      width: 100,
      onFilter: true,
      filters: true,
      valueEnum: {
        0: {
          text: '关闭',
          status: 'default',
        },
        1: {
          text: '开启',
          status: 'success',
        },
      },
    },
    {
      title: '所属流量池',
      dataIndex: 'pool',
      key: 'pool',
      width: 100,
      hideInSearch: true,
    },
    {
      title: '个人实名状态',
      dataIndex: 'authentication',
      key: 'authentication',
      width: 120,
      hideInSearch: true,
      onFilter: true,
      filters: true,
      valueEnum: {
        0: {
          text: '无需实名',
          status: 'default',
        },
        1: {
          text: '已实名',
          status: 'success',
        },
      },
    },
    {
      title: '设备状态',
      dataIndex: 'deviceStatus',
      key: 'deviceStatus',
      width: 100,
      hideInSearch: true,
      onFilter: true,
      filters: true,
      valueEnum: {
        0: {
          text: '可测试',
          status: 'success',
        },
        1: {
          text: '已销卡',
          status: 'default',
        },
        2: {
          text: '已激活',
          status: 'success',
        },
        3: {
          text: '已停卡',
          status: 'Error',
        },
        4: {
          text: '沉默期',
          status: 'default',
        },
        5: {
          text: '已提交销卡',
          status: 'Processing',
        },
        6: {
          text: '停号保机',
          status: 'default',
        },
      },
    },
    {
      title: '剩余停号保机月份',
      dataIndex: 'remainingShutdownMonths',
      key: 'remainingShutdownMonths',
      width: 140,
      hideInSearch: true,
    },
    {
      title: '设备号码',
      dataIndex: 'deviceNum',
      key: 'deviceNum',
      width: 120,
      hideInSearch: true,
    },
    {
      title: '当月用量',
      dataIndex: 'monthlyConsumption',
      key: 'monthlyConsumption',
      width: 120,
      hideInSearch: true,
    },
    {
      title: '套餐规格',
      dataIndex: 'packageSpecification',
      key: 'packageSpecification',
      width: 120,
      ellipsis: true,
      hideInSearch: true,
    },
    {
      title: '套餐总量',
      dataIndex: 'packageTotal',
      key: 'packageTotal',
      width: 100,
      hideInSearch: true,
    },
    {
      title: '套餐已用',
      dataIndex: 'packageUsed',
      key: 'packageUsed',
      width: 100,
      hideInSearch: true,
    },
    {
      title: '套餐剩余',
      width: 100,
      dataIndex: 'packageSurplus',
      key: 'packageSurplus',
      hideInSearch: true,
    },
    {
      title: '测试期过期时间',
      dataIndex: 'testExpirationTime',
      key: 'testExpirationTime',
      width: 130,
      hideInSearch: true,
    },

    {
      title: '沉默期',
      dataIndex: 'quietPeriod',
      key: 'quietPeriod',
      width: 100,
      hideInSearch: true,
    },
    {
      title: '激活时间',
      dataIndex: 'activationTime',
      key: 'activationTime',
      width: 100,
      hideInSearch: true,
    },
    {
      title: '短信服务过期时间',
      dataIndex: 'smsServiceExpires',
      key: 'smsServiceExpires',
      width: 140,
      hideInSearch: true,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
      width: 100,
      ellipsis: true,
      hideInSearch: true,
    },
  ];
  return columns;
};
