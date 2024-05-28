import { PageContainer, ProCard, StatisticCard } from '@ant-design/pro-components';
import { Alert, Button, Col, Flex, Row } from 'antd';
import { useNavigate } from '@umijs/max';
import React,{useState} from 'react';
import RenewalModal from './componenets/renewalModal';
const { Divider } = StatisticCard;
const RenewalService: React.FC = () => {
  const navigate = useNavigate()
  const spanConfig = {
    span: 8,
    xs: 24,
    sm: 24,
    md: 12,
    lg: 8,
    xl: 8,
    xxl: 6,
  };
  const [RenewalModalOpen, setRenewalModalOpen] = useState(false)
 
  return (
    <PageContainer extra={<Button type='primary' onClick={()=>navigate('/renewal/automatic')}>自动续费设置</Button>}>
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
            <Col {...spanConfig}>
              <ProCard
                // style={{backgroundColor: '#f0f2f5'}}
                bordered
                headerBordered
                hoverable
                title="中国移动本月套餐续费提醒"
                extra={<Button type="primary" onClick={()=>setRenewalModalOpen(true)}>续费</Button>}
              >
                <Flex gap={16} vertical>
                  <div>套餐名称：移动4G</div>
                  <div>套餐金额：25.00元</div>
                </Flex>
              </ProCard>
            </Col>
            <Col {...spanConfig}>
              <ProCard
                // style={{backgroundColor: '#f0f2f5'}}
                headerBordered
                bordered
                hoverable
                title="中国移动本月套餐续费提醒"
                extra={<Button type="primary" onClick={()=>setRenewalModalOpen(true)}>续费</Button>}
              >
                <Flex gap={16} vertical>
                  <div>套餐名称：移动4G</div>
                  <div>套餐金额：25.00元</div>
                </Flex>
              </ProCard>
            </Col>
            <Col {...spanConfig}>
              <ProCard
                // style={{backgroundColor: '#f0f2f5'}}
                bordered
                headerBordered
                hoverable
                title="中国移动本月套餐续费提醒"
                extra={<Button type="primary" onClick={()=>setRenewalModalOpen(true)}>续费</Button>}
              >
                <Flex gap={16} vertical>
                  <div>套餐名称：移动4G</div>
                  <div>套餐金额：25.00元</div>
                </Flex>
              </ProCard>
            </Col>
          </Row>
        </>
      </ProCard>
      <RenewalModal open={RenewalModalOpen} type={'selected'} onClose={()=>setRenewalModalOpen(false)}/>
    </PageContainer>
  );
};
export default RenewalService;
