import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import { PageContainer, ProDescriptions } from '@ant-design/pro-components';
// import { useRequest } from '@umijs/max';
import { Card, Col, Row, Table } from 'antd';
import React, { Suspense } from 'react';
import { getColumns } from '../config';
import { CardListItem } from '../data';
import CardUsedStatics from './components/cardUsedStatics';
import CarrierRestriction from './components/carrierRestriction';
import PackagesAndData from './components/PackagesAndData';
import SmsList from './components/smsList';
import { packageColomns } from './config';
import { getFakeChartData } from './mock';
const CardDetail: React.FC = () => {
  const UrlSearchParams = new URLSearchParams(window.location.search);
  const id = UrlSearchParams.get('id');
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<any>({});
  React.useEffect(() => {
    console.log('getFakeChartData', getFakeChartData);
    setLoading(true);
    setTimeout(() => {
      setData(getFakeChartData);
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <PageContainer>
      <Card title="卡片详情">
        <ProDescriptions<CardListItem>
          column={2}
          title={'详情'}
          request={async () => ({
            data: { iccid: '243423498754353' },
          })}
          params={{
            id,
          }}
          columns={getColumns(true) as ProDescriptionsItemProps<CardListItem>[]}
        />
      </Card>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={16}>
          <Suspense fallback={null}>
            <PackagesAndData data={data?.packagesPieData as any} loading={loading} />
          </Suspense>
        </Col>
        <Col span={8}>
          <Suspense fallback={null}>
            <CarrierRestriction data={data?.packagesPieData as any} loading={loading} />
          </Suspense>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card title="计划套餐">
            <Table columns={packageColomns} dataSource={[]}></Table>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="历史套餐">
            <Table columns={packageColomns} dataSource={[]}></Table>
          </Card>
        </Col>
      </Row>
      <CardUsedStatics />
      <SmsList />
    </PageContainer>
  );
};
export default CardDetail;
