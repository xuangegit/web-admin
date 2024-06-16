import { Pie } from '@ant-design/plots';
import { Card, Typography } from 'antd';
import type { DataItem } from '../data.d';

const { Text } = Typography;
const CarrieCrRestriction = ({ loading, data }: { loading: boolean; data: DataItem[] }) => {
  return (
    <Card
      loading={loading}
      bordered={false}
      title="运营商限制"
      style={{
        height: '100%',
      }}
    >
      <div>
        {/* <Flex gap={16} justify="space-around">
          <Text>当前套餐:移动包月300M</Text>
          <Text>套餐周期:6个月</Text>
        </Flex> */}

        <Pie
          height={300}
          radius={0.8}
          innerRadius={0.5}
          angleField="value"
          colorField="type"
          data={data as any}
          //   legend={false}
          annotations={[
            {
              type: 'text',
              style: {
                text: '套餐与流量',
                x: '50%',
                y: '50%',
                textAlign: 'center',
                fontSize: '2rem',
                fontStyle: 'bold',
              },
            },
          ]}
          legend={{
            color: {
              title: false,
              position: 'bottom',
              rowPadding: 5,
            },
          }}
          //   label={{
          //     position: 'spider',
          //     text: (item: { type: number; value: number }) => {
          //       return `${item.type}: ${numeral(item.value).format('0,0')}`;
          //     },
          //   }}
          label={{
            text: 'value',
            style: {
              fontWeight: 'bold',
            },
          }}
        />
      </div>
    </Card>
  );
};
export default CarrieCrRestriction;
