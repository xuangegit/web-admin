import { InfoCircleOutlined } from '@ant-design/icons';
import { Column } from '@ant-design/plots';
import { Button, Col, Flex, Progress, Row, Tooltip } from 'antd';
import numeral from 'numeral';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import Yuan from '../utils/Yuan';
import { ChartCard, Field } from './Charts';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: {
    marginBottom: 24,
  },
};
const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: DataItem[] }) => {
  const { styles } = useStyles();
  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title="账户余额"
          action={
            <Tooltip title="账户余额">
              <InfoCircleOutlined />
            </Tooltip>
          }
          loading={loading}
          total={() => <Yuan>126560</Yuan>}
          footer={
            <Flex gap={10}>
              <a>充值记录</a>
              <a>去充值</a>
            </Flex>
          }
          contentHeight={46}
        >
          <Field label="上月充值" value={<Yuan>1245</Yuan>} />
        </ChartCard>
      </Col>

      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="总卡数"
          action={
            <Tooltip title="总卡数">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(8846).format('0,0')}
          footer={
            <Flex gap={10}>
            <a>查看详情</a>
            <a>去购卡</a>
          </Flex>
          }
          contentHeight={46}
        >
          <div></div>
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="本月到期卡"
          action={
            <Tooltip title="本月到期卡">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(6560).format('0,0')}
          footer={ <Flex gap={10}>
          <a>下载明细</a>
          <a>去续费</a>
        </Flex>}
          contentHeight={46}
        >
         <Field label="续费金额" value={<Yuan>1245</Yuan>} />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={loading}
          title="预销户卡"
          action={
            <Tooltip title="预销户卡">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(6560).format('0,0')}
          footer={<a>查看详情</a>}
          contentHeight={46}
        >
          <Column
            xField="x"
            yField="y"
            padding={-20}
            axis={false}
            height={46}
            data={visitData}
            scale={{ x: { paddingInner: 0.4 } }}
          />
        </ChartCard>
      </Col>
    </Row>
  );
};
export default IntroduceRow;
