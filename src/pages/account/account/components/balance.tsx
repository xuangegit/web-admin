import { ProTable } from '@ant-design/pro-components';
import { Button, Divider, Flex } from 'antd';
import React from 'react';
import BalanceAlarm from './balanceAlarm';
const Balance: React.FC = () => {
  return (
    <div>
      <Flex align="center" gap={10}>
        <div>
          当前余额<span style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 16 }}>4.52元</span>
        </div>
        <div>
          <Button type="primary">立即充值</Button>
        </div>
        <BalanceAlarm />
      </Flex>
      <Divider />
      <ProTable
        ghost
        headerTitle="交易记录"
        rowKey="key"
        search={{ labelWidth: 0 }}
        dateFormatter="string"
        options={false}
        columns={[
          {
            title: '交易时间',
            dataIndex: 'dateTimeRange',
            key: 'dateTimeRange',
            valueType: 'dateTimeRange',
            hideInTable: true,
            formItemProps: {
              label: '',
            },
            fieldProps: {
              placeholder: ['开始时间', '结束时间'],
            },
            colSize: 1.5,
            search: {
              transform: (value) => {
                return value
                  ? {
                      startTime: value[0],
                      endTime: value[1],
                    }
                  : undefined;
              },
            },
          },
          {
            title: '交易时间',
            dataIndex: 'time',
            key: 'time',
            valueType: 'datetime',
            hideInSearch: true,
          },
          {
            title: '交易类型',
            dataIndex: 'type',
            key: 'type',
            valueType: 'select',
            colSize: 0.5,
            formItemProps: {
              label: '',
            },
            fieldProps: {
              placeholder: '交易类型',
            },
            valueEnum: {
              1: {
                text: '充值',
                status: 'success',
              },
              2: {
                text: '提现',
                status: 'error',
              },
              3: {
                text: '消费',
                status: 'warning',
              },
              4: {
                text: '退款',
                status: 'default',
              },
            },
          },

          {
            title: '交易编号',
            // colSize:0.8,
            dataIndex: 'num',
            key: 'num',
            formItemProps: {
              label: '',
            },
            fieldProps: {
              placeholder: '交易编号',
            },
          },

          {
            title: '金额',
            dataIndex: 'money',
            key: 'money',
            hideInSearch: true,
          },

          {
            title: '账户余额',
            dataIndex: 'balance',
            key: 'balance',
            hideInSearch: true,
          },
        ]}
      />
    </div>
  );
};
export default Balance;
