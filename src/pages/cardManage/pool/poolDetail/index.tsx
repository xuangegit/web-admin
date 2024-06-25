import { PageContainer } from '@ant-design/pro-components';
import { useNavigate, useSearchParams } from '@umijs/max';
import { Button, Card, Flex, Space } from 'antd';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import AutoRenewalModal from './components/autoRenewalModal';
import TableList from './components/list';
import OffNetSetting from './components/offNetSetting';
import RenewalModal from './components/renewalModal';
import PieStatics from './components/pieStatics';
const PoolDetail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const title = searchParams.get('title');
  const title2 = useMemo(() => {
    switch (title) {
      case '移动流量池':
        return '中国移动全套餐';
      case '联通流量池':
        return '中国联通全套餐';
      case '电信流量池':
        return '中国电信全套餐';
      default:
        return title;
    }
  }, [title]);
  console.log();
  return (
    <PageContainer>
      <Card
        title={title2}
        extra={
          <Button type="link" onClick={() => navigate('history')}>
            历史数据
          </Button>
        }
      >
        <Flex gap={20} align="center">
          <div>最近同步时间：{dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')}</div>
          <Space>
            <RenewalModal />
            <AutoRenewalModal />
            <OffNetSetting />
          </Space>
        </Flex>
        <PieStatics/>
      </Card>
      <TableList />
    </PageContainer>
  );
};
export default PoolDetail;
