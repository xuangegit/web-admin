import HeaderDropdown from '@/components/HeaderDropdown';
import {
  AccountBookOutlined,
  EditOutlined,
  ExportOutlined,
  MessageOutlined,
  PropertySafetyOutlined,
} from '@ant-design/icons';
import type { ActionType, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  PageContainer,
  ProDescriptions,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, message, Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import { getColumns } from './config';
import type { CardListItem, TableListItem } from './data';
import { removeRule, rule } from './service';

/**
 * 更新节点
 *
 * @param fields
 */

/**
 * 删除节点
 *
 * @param selectedRows
 */

const handleRemove = async (selectedRows: TableListItem[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeRule({
      key: selectedRows.map((row) => row.key),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const CardPage: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<TableListItem>();
  const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);

  const [activeKey, setActiveKey] = useState('1');
  const items = [
    {
      key: '1',
      label: '中国移动',
    },
    {
      key: '2',
      label: '中国联通',
    },
    {
      key: '3',
      label: '中国电信',
    },
  ];
  /** 国际化配置 */

  return (
    <PageContainer
      ghost
      tabList={items}
      tabActiveKey={activeKey}
      onTabChange={(key) => setActiveKey(key)}
      fixedHeader
    >
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
          setting: false,
          reload: false,
        }}
        toolBarRender={() => [
          <Button type="primary" key="going" icon={<AccountBookOutlined />} onClick={() => {}}>
            续费
          </Button>,
          <Button key="auto" icon={<PropertySafetyOutlined />} onClick={() => {}}>
            自动续费
          </Button>,
          <Tooltip title="发送短信" key="sms">
            <Button
              type="primary"
              key="primary"
              shape="circle"
              icon={<MessageOutlined />}
              onClick={() => {}}
            />
          </Tooltip>,

          <Button key="remark" icon={<EditOutlined />} onClick={() => {}}>
            批量备注
          </Button>,
          <Button danger key="stop" onClick={() => {}}>
            停机保号
          </Button>,
          <Tooltip title="批量导出" key="export">
            <HeaderDropdown
              menu={{
                selectedKeys: [],
                onClick: (event:any)=>{
                  const {key} = event
                  console.log('key',key)

                },
                items: [
                  {
                    key: '1',
                    label: '导出当月',
                  },
                  {
                    key: '2',
                    label: '导出历史',
                  }
                ],
              }}
            >
              <Button shape="circle" icon={<ExportOutlined />} onClick={() => {}} />
            </HeaderDropdown>
          </Tooltip>,
        ]}
        params={{ type: activeKey }}
        request={rule}
        scroll={{
          x: 1000,
        }}
        columns={getColumns({ setCurrentRow, setShowDetail })}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows as TableListItem[]);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )}

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<CardListItem>
            column={2}
            title={currentRow?.name || '详情'}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={
              getColumns({
                setCurrentRow,
                setShowDetail,
              }) as ProDescriptionsItemProps<CardListItem>[]
            }
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default CardPage;
