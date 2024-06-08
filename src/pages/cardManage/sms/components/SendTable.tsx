import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useRef } from 'react';
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

type Item = {
  url: string;
  id: number;
  phone: string;
  keyword: string;
  state: string | number;
  money: number;
  smsContent: string;
  operateTime: string | Date;
  closed_at?: string;
};

const columns: ProColumns<Item>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    dataIndex: 'keyword',
    hideInTable: true,
    formItemProps: {
      label: '',
    },
    fieldProps: {
      placeholder: '请输入ICCID、MSISDN',
    },
  },
  {
    title: '操作时间',
    dataIndex: 'operateTime',
    valueType: 'dateTime',
    hideInSearch: true,
  },
  {
    title: '操作时间',
    dataIndex: 'operateTime',
    valueType: 'dateTimeRange',
    formItemProps: {
      label: '',
    },
    colSize: 1.5,
    fieldProps: {
      placeholder: ['开始时间', '结束时间'],
    },
    search: {
      transform: (value) => {
        return value && value.length ? { startTime: value[0], endTime: value[1] } : undefined;
      },
    },
    hideInTable: true,
  },
  {
    title: '接收号码',
    dataIndex: 'phone',
    hideInSearch: true,
    copyable: true,
  },
  {
    title: '短信内容',
    dataIndex: 'smsContent',
    hideInSearch: true,
    copyable: true,
  },
  // {
  //   title: '金额',
  //   dataIndex: 'money',
  //   hideInSearch: true,

  // },
  {
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    formItemProps: {
      label: '',
    },
    fieldProps: {
      placeholder: '状态',
    },
    valueType: 'select',

    valueEnum: {
      all: { text: '全部' },
      fail: {
        text: '失败',
        status: 'Error',
      },
      success: {
        text: '成功',
        status: 'Success',
      },
    },
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<Item>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params, sort, filter) => {
        console.log(sort, filter);
        console.log('params', params);
        await waitTime(2000);
        return {
          success: true,
          data: [
            {
              id: '42342',
              operateTime: new Date(),
              smsContent: '短信内容',
              phone: '16732098345',
              money: 3.5,
              state: 'success',
            },
          ],
          total: 1,
        };
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        defaultValue: {
          option: { fixed: 'right', disable: true },
        },
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
        span: {
          xs: 24,
          sm: 16,
          md: 10,
          lg: 8,
          xl: 4,
          xxl: 4,
        },
      }}
      options={{ setting: true }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="高级表格"
    />
  );
};
