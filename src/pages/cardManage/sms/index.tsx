import { PageContainer, ProCard } from '@ant-design/pro-components';
import React from 'react';
import SendSmsModal from './components/sendModal';
import SendTable from './components/SendTable';

const SmsPage: React.FC = () => {
  return (
    <PageContainer extra={<SendSmsModal />}>
      <ProCard
        tabs={{
          //   tabPosition,
          //   activeKey: tab,
          items: [
            {
              label: `发送记录`,
              key: 'send',
              children: <SendTable />,
            },
            {
              label: `接收记录`,
              key: 'receive',
              children: <SendTable />,
            },
          ],
          //   onChange: (key) => {
          //     setTab(key);
          //   },
        }}
      ></ProCard>
    </PageContainer>
  );
};
export default SmsPage;
