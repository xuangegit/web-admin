import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import React from 'react';
const DownLoad: React.FC = () => {
  return (
    <PageContainer ghost>
      <ProTable
        options={false}
        request={async (params) => {
          console.log('params', params);
          return {
            success: true,
            total: 1,
            data: [
              {
                time: '2022-01-01 12:00:00',
                taskName: '任务名称',
                name: '文件名',
                count: 1,
                expiredTime: '2022-01-01 12:00:00',
                status: 0,
              },
            ],
          };
        }}
        columns={[
          {
            title: '下载时间',
            dataIndex: 'time',
            valueType: 'dateTime',
            sorter: true,
            key: 'time',
          },
          {
            title: '任务名称',
            dataIndex: 'taskName',
            key: 'taskName',
          },
          {
            title: '文件名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '下载次数',
            dataIndex: 'count',
            key: 'count',
          },
          {
            title: '文件过期时间',
            dataIndex: 'expiredTime',
            valueType: 'dateTime',
            sorter: true,
            key: 'expiredTime',
          },
          {
            title: '状态',
            key: 'status',
            dataIndex: 'status',
            valueType: 'select',
            filters: true,
            valueEnum: {
              0: {
                text: '失败',
                status: 'default',
              },
              1: {
                text: '成功',
                status: 'success',
              },
              2: {
                text: '进行中',
                status: 'Processing',
              },
            },
          },
          {
            title: '操作',
            dataIndex: 'option',
            key: 'option',
            fixed: 'right',
            width: 100,
            render: (text) => {
              return (
                <Space>
                  <Button type="text" size="small">
                    下载
                  </Button>
                  <Button type="text" size="small" danger>
                    删除
                  </Button>
                </Space>
              );
            },
          },
        ]}
        search={false}
      />
    </PageContainer>
  );
};
export default DownLoad;
