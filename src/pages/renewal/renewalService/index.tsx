import { PageContainer, ProCard, StatisticCard } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { Alert, Button, Col, Flex, Row } from 'antd';
import React, { useState } from 'react';
import RenewalModal from './componenets/renewalModal';
const { Divider } = StatisticCard;
import { OperTypeNameEnum } from './interface.d';
const RenewalService: React.FC = () => {
  const navigate = useNavigate();
  const spanConfig = {
    span: 8,
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xl: 8,
    xxl: 6,
  };
  const [RenewalModalOpen, setRenewalModalOpen] = useState(false);
  const [data, setData] = useState({
    openedCard: {
      money: 1243,
      count: 55,
      info: [
        { type: 'cmcc', money: 132, count: 2 },
        { type: 'cucc', money: 334, count: 22 },
        { type: 'ctc', money: 831, count: 30 },
      ],
    },
  });
  return (
    <PageContainer
      extra={
        <Button type="primary" onClick={() => navigate('/renewal/automatic')}>
          自动续费设置
        </Button>
      }
    >
      <StatisticCard.Group>
        <StatisticCard
          statistic={{ title: '续费总金额', value: 24234, suffix: '元', precision: 2 }}
        ></StatisticCard>
        <Divider />
        <StatisticCard statistic={{ title: '续费总卡数', value: 24, suffix: '张' }}></StatisticCard>
      </StatisticCard.Group>
      <ProCard
        title="已开启自动续费的卡"
        bordered
        style={{ marginTop: 16, backgroundColor: 'transparent' }}
      >
        <>
          <Flex gap={16}>
            <div>续费金额：25.00元</div>
            <div>续费张数：42张</div>
          </Flex>
          <Alert message="本月自动续费时间已过，如需对「已开启自动续费」的卡进行续费，请通过下方按钮进行手动续费！！"></Alert>
          <Row gutter={[30, 16]} style={{ marginTop: 16 }}>
            {data.openedCard.info.map((item) => (
              <Col {...spanConfig} key={`opened${item.type}`}>
                <ProCard
                  // style={{backgroundColor: '#f0f2f5'}}
                  headerBordered
                  bordered
                  hoverable
                  title={`${OperTypeNameEnum[item.type]}本月套餐续费提醒`}
                  extra={
                    <Button type="primary" onClick={() => setRenewalModalOpen(true)}>
                      续费
                    </Button>
                  }
                >
                  <Flex gap={16} vertical>
                    <div>续费金额：{item.money}元</div>
                    <div>续费张数：{item.count}张</div>
                  </Flex>
                </ProCard>
              </Col>
            ))}
            
            
          </Row>
        </>
      </ProCard>
      <ProCard
        title="未开启自动续费的卡"
        bordered
        style={{ marginTop: 16, backgroundColor: 'transparent' }}
      >
        <>
          <Flex gap={16}>
            <div>续费金额：225.00元</div>
            <div>续费张数：49张</div>
          </Flex>
          <Row gutter={[30, 16]} style={{ marginTop: 16 }}>
            {data.openedCard.info.map((item) => (
              <Col {...spanConfig} key={`opened${item.type}`}>
                <ProCard
                  // style={{backgroundColor: '#f0f2f5'}}
                  headerBordered
                  bordered
                  hoverable
                  title={`${OperTypeNameEnum[item.type]}本月套餐续费提醒`}
                  extra={
                    <Button type="primary" onClick={() => setRenewalModalOpen(true)}>
                      续费
                    </Button>
                  }
                >
                  <Flex gap={16} vertical>
                    <div>续费金额：{item.money}元</div>
                    <div>续费张数：{item.count}张</div>
                  </Flex>
                </ProCard>
              </Col>
            ))}
            
            
          </Row>
        </>
      </ProCard>
      <RenewalModal
        open={RenewalModalOpen}
        type={'selected'}
        onClose={() => setRenewalModalOpen(false)}
      />
    </PageContainer>
  );
};
export default RenewalService;
