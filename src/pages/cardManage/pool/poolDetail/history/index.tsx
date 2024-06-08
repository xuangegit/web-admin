import { rule } from '@/pages/cardManage/card/service';
import { ExportOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Tooltip } from 'antd';
import React, { useRef } from 'react';
import { columns } from './config';

const HistoryList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  return (
    <PageContainer ghost fixedHeader>
      <ProTable
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 'auto',
          // filterType: 'light',
        }}
        dateFormatter="string"
        options={{
          density: false,
          fullScreen: false,
          setting: true,
          reload: false,
        }}
        toolBarRender={() => [
          <Tooltip title="批量导出" key="export">
            <Button type="primary" icon={<ExportOutlined />} onClick={() => {}}>
              导出
            </Button>
          </Tooltip>,
        ]}
        request={rule}
        scroll={{
          x: 1000,
        }}
        columns={columns}
      />
    </PageContainer>
  );
};

export default HistoryList;
