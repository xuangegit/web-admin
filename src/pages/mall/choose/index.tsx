import { PageContainer } from '@ant-design/pro-components';
import { Col, Flex, Row } from 'antd';
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
const Commodity: React.FC = () => {
  const [currentSrc, setCurrentSrc] = useState(srcList[0]);
  const properties = {
    zoomStyle: 'border-radius:6px;box-shadow:0 0 1px #1890ff;',
    zoomLensStyle:'background-color:#ccc;opacity:0.1',
    width: 300,
    // height: 300,
    // zoomWidth: 500,
    // zoomHeight: 500,
    offset: { vertical: 0, horizontal: 10 },
    img: `/carsImg/${currentSrc}`,
    
  };
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col flex="0 0 400px">
          <Flex vertical align="center" justify="center" gap={16}>
            <ReactImageZoom {...properties} />
            <div>
              <Flex wrap gap={10} justify="center">
                {srcList.map((item) => (
                  <img
                    width={40}     
                    className={item === currentSrc ? styles.actived : styles.img}
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
          </Flex>
        </Col>
        <Col flex={1}></Col>
      </Row>
    </PageContainer>
  );
};
export default Commodity;
