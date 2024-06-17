import { Column } from '@ant-design/plots';
import type { RadioChangeEvent } from 'antd';
import { Card, DatePicker, Flex, Radio } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
const CardUsedStatics: React.FC = () => {
  const data = [
    {
      type: 'Jan',
      value: 100,
    },
    {
      type: 'Feb',
      value: 120,
    },
    {
      type: 'Mar',
      value: 140,
    },
    {
      type: 'Apr',
      value: 160,
    },
  ];
  const oneDay = 24 * 60 * 60 * 1000;
  const [type, setType] = useState('week');
  const [date, setDate] = useState<(dayjs.Dayjs | null | undefined)[]>([
    dayjs(new Date().getTime() - 7 * oneDay),
    dayjs(),
  ]);
  useEffect(() => {
    if (type === 'month') {
      setDate([dayjs(new Date().getTime() - 30 * oneDay), dayjs()]);
    } else {
      setDate([dayjs(new Date().getTime() - 7 * oneDay), dayjs()]);
    }
  }, [type]);
  const onChange = (value: (dayjs.Dayjs | null | undefined)[]) => {
    console.log('value', value);
    setDate(value);
  };
  return (
    <>
      <Card title="物联网卡用量统计" style={{ marginTop: 16 }}>
        <Flex gap={16} align="center">
          <Radio.Group
            value={type}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            onChange={(e: RadioChangeEvent) => {
              setType(e.target.value);
            }}
          >
            <Flex gap={10}>
              <Radio.Button key="week" value="week">
                近一周
              </Radio.Button>
              <Radio.Button key="month" value="month">
                近一个月
              </Radio.Button>
            </Flex>
          </Radio.Group>
          <DatePicker.RangePicker value={date} onChange={onChange} />
        </Flex>
        <Column
          data={data}
          xField="type"
          yField="value"
          height={300}
          xAxis={{
            label: {
              autoHide: true,
              autoRotate: false,
            },
          }}
          tooltip={{
            name: '使用量',
            channel: 'y',
          }}
          style={{
            minWidth: 50,
            width: 60,
            textAlign: 'center',
          }}
          meta={{
            type: {
              alias: '月份',
            },
            value: {
              alias: '数量',
            },
          }}
        ></Column>
      </Card>
    </>
  );
};
export default CardUsedStatics;
