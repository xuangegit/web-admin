import { PageContainer, ProList } from '@ant-design/pro-components';
import { Col, Flex, Row } from 'antd';
import dayjs from 'dayjs';
import cmccImg from '../shoppingCar/images/cmcc.png';
import { data } from '../shoppingCar/mock';
import styles from './index.less';
import { defaultData } from './mock';
export default () => {
  return (
    <PageContainer>
      <div>
        <ProList
          header={'34234'}
          dataSource={defaultData}
          rowKey={'id'}
          // ghost
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
                <Row>
                  <Col flex={'0 0 256px'} style={{ borderRight: '1px solid #e5e5e5' }}>
                    {data.map((item: any) => (
                      <a key={item.id} className={styles.titleWrapper}>
                        <Flex align="center" key={item.id} gap={10} >
                          <img src={cmccImg} className={styles.shopImg} />
                          <div>{item?.priceOffer?.name}</div>
                        </Flex>
                      </a>
                    ))}
                  </Col>
                  <Col>
                  </Col>
                </Row>
              </div>
            );
          }}
        ></ProList>
      </div>
    </PageContainer>
  );
};
