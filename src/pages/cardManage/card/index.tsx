import HeaderDropdown from '@/components/HeaderDropdown';
import RenewalModal from '@/pages/renewal/renewalService/componenets/renewalModal';
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
import { Button, Drawer, Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import AutoRenewalModal from './components/autoRenewalModal';
import ExportModal from './components/exportModal';
import ShutDownProtection from './components/shutdownProtection';
import SmsModalForm from './components/SmsModalForm';
import { getColumns } from './config';
import type { CardListItem } from './data';
import { useCard } from './hooks';
import { rule } from './service';
const CardPage: React.FC = () => {
  const {
    currentRow,
    setCurrentRow,
    smsModalVisible,
    setSmsModalVisible,
    showDetail,
    setShowDetail,
    selectedRowsState,
    setSelectedRows,
    autoRenewalOpen,
    setAutoRenewallOpen,
    renewalstepOne,
    setRenewalStepOne,
    renewalstepTwo,
    setRenewalStepTwo,
    shutDownVisible,
    setShutDownVisible,
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
          setting: true,
          reload: false,
        }}
        scroll={{ y: 400 }}
        columnsState={{
          persistenceKey: 'cardList',
          persistenceType: 'localStorage',
          // defaultValue: {
          //   option: { fixed: 'right', disable: true },
          // },
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="going"
            icon={<AccountBookOutlined />}
            onClick={() => {
              if (selectedRowsState.length > 0) setRenewalStepTwo(true);
              else setRenewalStepOne(true);
            }}
          >
            续费
          </Button>,
          <Button
            key="auto"
            icon={<PropertySafetyOutlined />}
            onClick={() => {
              setAutoRenewallOpen(true);
            }}
          >
            自动续费
          </Button>,
          <Tooltip title="发送短信" key="sms">
            <Button
              type="primary"
              key="primary"
              shape="circle"
              icon={<MessageOutlined />}
              onClick={() => {
                setSmsModalVisible(true);
              }}
            />
          </Tooltip>,

          <Button key="remark" icon={<EditOutlined />} onClick={() => {}}>
            批量备注
          </Button>,
          <Button danger key="stop" onClick={() => setShutDownVisible(true)}>
            停机保号
          </Button>,
          <Tooltip title="批量导出" key="export">
            <HeaderDropdown
              menu={{
                selectedKeys: [],
                onClick: (event: any) => {
                  const { key } = event;
                  console.log('key', key);
                },
                items: [
                  {
                    key: '1',
                    label: '导出当月数据',
                  },
                  {
                    key: '2',
                    label: <ExportModal />,
                  },
                ],
              }}
            >
              <Button shape="circle" icon={<ExportOutlined />} onClick={() => {}} />
            </HeaderDropdown>
          </Tooltip>,
        ]}
        params={{ type: activeKey }}
        request={rule}
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
            columns={getColumns() as ProDescriptionsItemProps<CardListItem>[]}
          />
        )}
      </Drawer>
      {smsModalVisible && (
        <SmsModalForm
          visible={smsModalVisible}
          onSubmit={() => {
            return Promise.resolve();
          }}
          onCancel={() => {
            setSmsModalVisible(false);
          }}
        />
      )}

      <RenewalModal
        type="selected"
        open={renewalstepTwo}
        onClose={() => {
          setRenewalStepTwo(false);
        }}
      />

      <RenewalModal
        type="manual"
        onOk={() => {
          setRenewalStepOne(false);
          setRenewalStepTwo(true);
        }}
        open={renewalstepOne}
        onClose={() => {
          setRenewalStepOne(false);
        }}
      />
      <AutoRenewalModal
        open={autoRenewalOpen}
        onClose={() => setAutoRenewallOpen(false)}
        data={selectedRowsState}
      />
      <ShutDownProtection
        visible={shutDownVisible}
        onCancel={() => setShutDownVisible(false)}
        selectedRowsState={selectedRowsState}
      />
    </PageContainer>
  );
};

export default CardPage;
