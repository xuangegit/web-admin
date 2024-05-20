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
import { Button, Drawer,  Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import { getColumns } from './config';
import type { CardListItem } from './data';
import {  rule } from './service';
import {useCard} from './hooks'
import SmsModalForm from './components/SmsModalForm'
/**
 * 更新节点
 *
 * @param fields
 */
const CardPage: React.FC = () => {
  const {
      currentRow,
      setCurrentRow, 
      smsModalVisible, 
      setSmsModalVisible,
      showDetail, 
      setShowDetail,
      selectedRowsState,
      setSelectedRows
  } = useCard();
  const actionRef = useRef<ActionType>();
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
              onClick={() => {setSmsModalVisible(true)}}
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
            setSelectedRows(selectedRows as CardListItem[]);
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
      {smsModalVisible&&<SmsModalForm
          visible={smsModalVisible}
          onSubmit={()=>{return Promise.resolve()}}
          onCancel={()=>{setSmsModalVisible(false)}}
        />}
    </PageContainer>
  );
};

export default CardPage;
