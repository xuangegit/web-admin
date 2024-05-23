import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, List, Progress, Tag } from 'antd';
import React from 'react';
const data = [
  '语雀的天空',
  'Ant Design',
  '蚂蚁金服体验科技',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
  'Umi',
  'Ant Design Pro',
].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
  actions: [<a key="run">邀请</a>, <a key="delete">删除</a>],
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        
      >
        <div>流量使用情况:</div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>已用流量：80GB</p>
          <div>剩余流量：100GB</div>
        </div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));
const PoolPage: React.FC = () => {
  return (
    <PageContainer>
      <List<any>
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 4,
        }}
        dataSource={data}
        renderItem={(item) => {
          return (
            <List.Item>
              <Card
                styles={{
                    body:{
                        paddingBlock:8
                    }
                }}
                hoverable
                // headerBordered
                bordered
                title={item.title}
                extra={<Button type="link">详情</Button>}
              >
                {item.content}
              </Card>
            </List.Item>
          );
        }}
      />
    </PageContainer>
  );
};
export default PoolPage;
