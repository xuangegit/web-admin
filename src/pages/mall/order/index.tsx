import {
  PageContainer,
  ProForm,
  ProFormDateTimeRangePicker,
  ProFormSelect,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { Card, Col, Flex, Row } from 'antd';
import dayjs from 'dayjs';
import cmccImg from '../shoppingCar/images/cmcc.png';
import { data } from '../shoppingCar/mock';
import styles from './index.less';
import { defaultData } from './mock';
export default () => {
  return (
    <PageContainer>
      <Card style={{ minWidth: 950 }}>
        <ProForm
          layout="inline"
          submitter={false}
          style={{marginBottom:16}}
          onValuesChange={(values: any) => {
            console.log('valuse--change', values);
          }}
        >
          <ProFormText placeholder={'订单号'} name="orderNum" />
          <ProFormDateTimeRangePicker
            name={'date'}
            placeholder={['订单开始时间', '订单结束时间']}
          />
          <ProFormSelect
            name={'status'}
            placeholder={'订单状态'}
            valueEnum={{
              '0': '全部',
              '1': '待支付',
              '2': '待发货',
              '3': '待收货',
              '4': '已完成',
              '5': '已取消',
            }}
          />
        </ProForm>
        <Row align={'middle'} wrap={false} className={styles.header}>
          <Col flex="0 0 248px">商品</Col>
          <Col flex="0 0 100px">套餐价格</Col>
          <Col flex="0 0 60px">总周期</Col>
          <Col flex="0 0 60px">沉默期</Col>
          <Col flex="0 0 80px">单张卡费</Col>
          <Col flex="0 0 80px">卡片数量</Col>
          <Col flex="1 0 80px">订单价格</Col>
          <Col flex="1 0 80px">订单状态</Col>
          <Col flex="1 0 80px">操作</Col>
        </Row>
        <ProList
          header={'34234'}
          dataSource={defaultData}
          rowKey={'id'}
          ghost
          pagination={{
            current: 1,
            showSizeChanger: true,
            pageSize: 10,
            total: 100,
            onChange: (page, pageSize) => {
              console.log('page', page, pageSize);
            },
          }}
          renderItem={(item) => {
            console.log('item', item);
            return (
              <div className={styles.container}>
                <Row>
                  <Col flex={'1 0 400px'}>
                    <Flex
                      className={styles.itemWrapper}
                      gap={10}
                      align="center"
                      style={{ background: '#f5f5f5' }}
                    >
                      <div>{dayjs().format('YYYY-MM-DD hh:mm:ss')}</div>
                      <div>订单号：{Date.now()}</div>
                    </Flex>
                  </Col>
                </Row>
                <Row align={'middle'} wrap={false} className={styles.row}>
                  <Col flex={'0 0 630px'} style={{ borderRight: '1px solid #e5e5e5' }}>
                    {data.map((item: any) => (
                      <Row key={item.id} align="middle" className={styles.info}>
                        <Col flex="0 0 240px">
                          <a key={item.id} className={styles.titleWrapper}>
                            <Flex align="center" key={item.id} gap={10}>
                              <img src={cmccImg} className={styles.shopImg} />
                              <div>{item?.priceOffer?.name}</div>
                            </Flex>
                          </a>
                        </Col>
                        <Col flex="0 0 100px">￥352</Col>
                        <Col flex="0 0 60px">2份</Col>
                        <Col flex="0 0 60px">2月</Col>
                        <Col flex="0 0 80px">￥352</Col>
                        <Col flex="0 0 80px">3张</Col>
                      </Row>
                    ))}
                  </Col>
                  <Col flex="1 0 80px">￥3620</Col>
                  <Col flex="1 0 80px">已完成</Col>
                  <Col flex={'1 0 80px'}>
                    <a>详情</a>
                  </Col>
                </Row>
              </div>
            );
          }}
        ></ProList>
      </Card>
    </PageContainer>
  );
};
