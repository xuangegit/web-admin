import { Card, Table, Tabs } from 'antd';
import { FC, useState } from 'react';
import { smsReceiveColomns, smsSendColomns } from '../config';
const SmsList: FC = () => {
  const [activeKey, setActiveKey] = useState('send');
  return (
    <>
      <Card style={{ marginTop: 16 }}>
        <Tabs
          defaultActiveKey="send"
          activeKey={activeKey}
          type="card"
          onChange={(key) => {
            setActiveKey(key);
          }}
          items={[
            {
              label: '短信发送',
              key: 'send',
              children: <Table columns={smsSendColomns} dataSource={[]} />,
            },
            {
              label: '短信接收',
              key: 'receive',
              children: <Table columns={smsReceiveColomns} dataSource={[]} />,
            },
          ]}
        />
      </Card>
    </>
  );
};
export default SmsList;
