import { ProCard } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, ConfigProvider, List, Progress, Statistic, Tag } from 'antd';
import AlarmModal from './components/AlarmModal';
import React from 'react';
import { useNavigate } from '@umijs/max';

const { Divider } = ProCard;
const data = ['移动流量池', '移动-300M', '移动-100M', '联通流量池', '联通-100M'].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
  actions: [<a key="run">邀请</a>, <a key="delete">删除</a>],
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <ConfigProvider
      theme={{
        components: {
          List: {
            itemPadding: '10px 0',
            itemPaddingLG: '10px 0',
            itemPaddingSM: '10px 0',
          },
          // Divider:{
          //   verticalMarginInline:0,
          //   textPaddingInline:0,
          // }
        },
      }}
    >
      <div style={{ color: '#666', fontSize: 14 }}>
        <div>
          <h4 style={{ margin: 0, color: '#999' }}>流量使用情况:</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>已用流量：80GB</div>
            <div>剩余流量：100GB</div>
          </div>
          <Progress percent={80} size={'small'} />
        </div>
        <div>
          <h4 style={{ margin: 0, color: '#999' }}>卡片激活情况:</h4>
          <ProCard.Group>
            <ProCard bodyStyle={{ padding: 5 }}>
              <Statistic title="已激活" value={79} valueStyle={{ fontSize: 14 }} />
            </ProCard>
            <Divider type="vertical" style={{ marginBlock: 16 }} />
            <ProCard bodyStyle={{ padding: 5 }}>
              <Statistic title="已停卡" value={112893} valueStyle={{ fontSize: 14 }} />
            </ProCard>
            <Divider type="vertical" style={{ marginBlock: 16 }} />
            <ProCard bodyStyle={{ padding: 5 }}>
              <Statistic title="测试期" value={93} valueStyle={{ fontSize: 14 }} />
            </ProCard>
            <Divider type="vertical" style={{ marginBlock: 16 }} />
            <ProCard bodyStyle={{ padding: 5 }}>
              <Statistic title="已销卡" value={112893} valueStyle={{ fontSize: 14 }} />
            </ProCard>
          </ProCard.Group>
        </div>
        <p style={{ margin: 0, color: '#999' }}>最近同步时间：2024-03-15 15:16:23</p>
      </div>
    </ConfigProvider>
  ),
}));
const PoolPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageContainer
      fixedHeader
      header={{
        title: '流量池',
        extra: [
          <AlarmModal key='alarm'/>,
        ],
      }}
    >
      <List<any>
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => {
          return (
            <List.Item style={{ marginBlockEnd: 12 }}>
              <Card
                styles={{
                  header: {
                    // paddingInline: 16,
                    // height: 46,
                  },
                  body: {
                    paddingBlock: 12,
                    // paddingInline: 16,
                  },
                }}
                hoverable
               
                // bordered
                title={item.title}
                extra={<Button type="link" onClick={()=>navigate(`/card/pool/detail?title=${item.title}`)}>详情</Button>}
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
