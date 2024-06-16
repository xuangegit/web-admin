import {
  CheckCard,
  PageContainer,
  ProCard,
  ProForm,
  ProFormDigit,
  ProFormSelect,
} from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { Button, Card, Col, Divider, Flex, Row, Space } from 'antd';
import React, { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import styles from './index.less';
const srcList = [
  '2_2mm.jpg',
  '5_6mm.jpg',
  'ceramic-micro.jpg',
  'ceramic-standerd.jpg',
  'cmcc-ceramics.png',
  'cmcc-plastic.png',
  'cmcc-plug-micro.jpg',
  'cmcc-plug-nano.jpg',
  'cmcc-plug-standerd.jpg',
  'paster-1.png',
  'paster-2.png',
];
const cardStyles = {
  body: { padding: 10 },
};
const Commodity: React.FC = () => {
  const materialOptions = [
    {
      title: '塑料',
      value: 1,
    },
    {
      title: '陶瓷',
      value: 2,
    },
    {
      title: '环氧树脂',
      value: 3,
    },
    {
      title: '车规级',
      value: 4,
    },
  ];
  const sizeOptions = [
    {
      title: '标准卡',
      value: 1,
    },
    {
      title: 'Micro卡',
      value: 2,
    },
    {
      title: 'Nano卡',
      value: 3,
    },
    {
      title: '5*5MM贴片卡',
      value: 4,
    },
    {
      title: '5*6MM贴片卡',
      value: 5,
    },
    {
      title: '2*2MM贴片卡',
      value: 6,
    },
  ];
  const netOptions = [
    {
      title: '2G',
      value: 1,
    },
    {
      title: '3G',
      value: 2,
    },
    {
      title: '4G',
      value: 3,
    },
    {
      title: '5G',
      value: 4,
    },
  ];
  const functionOptions = [
    {
      title: '流量池',
      value: 1,
    },
    {
      title: '短信服务',
      value: 2,
    },
    {
      title: '语音服务',
      value: 3,
    },
    {
      title: '定位服务',
      value: 4,
    },
    {
      title: '测试期',
      value: 5,
    },
    {
      title: '机卡绑定',
      value: 6,
    },
  ];
  const netAddServiceOptions = [
    {
      title: '白名单',
      value: 1,
    },
    {
      title: '限速',
      value: 2,
    },
    {
      title: '分应用计费',
      value: 3,
    },
    {
      title: '卡卡自组网',
      value: 4,
    },
    {
      title: '企业专网',
      value: 5,
    },
  ];
  const navigate = useNavigate();
  const [currentSrc, setCurrentSrc] = useState(srcList[0]);
  const properties = {
    zoomStyle: 'border-radius:6px;box-shadow:0 0 1px #ddd;opacity:1;z-index:10',
    zoomLensStyle: 'background-color:#ccc;opacity:0.1',
    width: 350,
    offset: { vertical: 0, horizontal: 10 },
    src: `/carsImg/${currentSrc}`,
  };
  const ZoomImg = React.memo(({ src, ...rest }: any) => {
    console.log('rest', rest);
    return (
      <div style={{ width: 350, height: 350 }}>
        <ReactImageZoom {...rest} img={src} />
      </div>
    );
  });
  const ImgView = React.memo(({ current }: any) => {
    return (
      <div>
        <Flex wrap gap={10} justify="center">
          {srcList.map((item) => (
            <img
              width={40}
              className={item === current ? styles.actived : styles.img}
              key={item}
              src={'/carsImg/' + item}
              onClick={() => {
                console.log('focus');
                setCurrentSrc(item);
              }}
            />
          ))}
        </Flex>
      </div>
    );
  });
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col flex="0 0 350px">
          <Flex vertical align="center" justify="center" gap={16} style={{ paddingTop: 40 }}>
            {/* <ReactImageZoom {...properties} />
             */}
            <ZoomImg {...properties} />
            <ImgView current={currentSrc} />
          </Flex>
        </Col>
        <Col flex={'1 1 500px'}>
          <ProCard
            title={
              <Flex justify="space-between" gap={100}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src="/icons/zhongguoyidong.svg" style={{ marginRight: 10 }} width="20px" />{' '}
                  <div style={{ fontSize: 16, fontWeight: 600 }}>300M/3个月</div>
                  <div style={{ fontSize: 14, fontWeight: 'normal', marginLeft: 10 }}>
                    自定义套餐
                  </div>
                </div>
                <div>￥362</div>
              </Flex>
            }
            ghost
          >
            <Row gutter={[12, 8]}>
              <Col span={12}>
                <Card styles={cardStyles}>
                  <div>材质</div>
                  <CheckCard.Group size="small">
                    {materialOptions.map((item: any) => (
                      <CheckCard ghost {...item} key={item.value} className={styles.checkedCard} />
                    ))}
                  </CheckCard.Group>
                </Card>
              </Col>
              <Col span={12}>
                <Card styles={cardStyles}>
                  <div>规格</div>
                  <CheckCard.Group size="small">
                    {sizeOptions.map((item: any) => (
                      <CheckCard ghost {...item} key={item.value} className={styles.checkedCard} />
                    ))}
                  </CheckCard.Group>
                </Card>
              </Col>
              <Col span={12}>
                <Card styles={cardStyles}>
                  <div>网络模式</div>
                  <CheckCard.Group size="small">
                    {netOptions.map((item: any) => (
                      <CheckCard ghost {...item} key={item.value} className={styles.checkedCard} />
                    ))}
                  </CheckCard.Group>
                </Card>
              </Col>
              <Col span={12}>
                <Card styles={cardStyles}>
                  <div>卡片功能</div>
                  <CheckCard.Group size="small">
                    {functionOptions.map((item: any) => (
                      <CheckCard ghost {...item} key={item.value} className={styles.checkedCard} />
                    ))}
                  </CheckCard.Group>
                </Card>
              </Col>
              <Col span={12}>
                <Card styles={cardStyles}>
                  <div>网络增值服务</div>
                  <CheckCard.Group size="small">
                    {netAddServiceOptions.map((item: any) => (
                      <CheckCard ghost {...item} key={item.value} className={styles.checkedCard} />
                    ))}
                  </CheckCard.Group>
                </Card>
              </Col>
            </Row>
            <Divider />
            <ProForm
              submitter={{
                render: () => {
                  return (
                    <Space size={'large'}>
                      <Button type="primary" onClick={() => navigate('/mall/shopping-car')}>
                        加入购物车
                      </Button>
                      <Button type="primary" onClick={() => navigate('/mall/confirm-order')}>
                        立即购买
                      </Button>
                    </Space>
                  );
                },
              }}
            >
              <ProForm.Group>
                <ProFormSelect
                  label="起购周期"
                  name="mallPeriod"
                  valueEnum={{
                    6: '6个月',
                    12: '12个月',
                  }}
                />
                <ProFormSelect
                  name="queitPeriod"
                  label="沉默期"
                  valueEnum={{
                    3: '3个月',
                  }}
                />
              </ProForm.Group>
              <ProForm.Group>
                <ProFormDigit label="总周期" name="totalPeriod" addonAfter="月" />
                <ProFormDigit label="卡片数量" name="count" addonAfter="张" />
              </ProForm.Group>
            </ProForm>
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};
export default Commodity;
