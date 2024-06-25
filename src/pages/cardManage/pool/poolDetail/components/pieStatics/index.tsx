import { StatisticCard } from '@ant-design/pro-components';
import React from 'react';
import { Pie } from '@ant-design/plots';
const {Divider} = StatisticCard;
const PieStatics:React.FC = ()=>{
    const config = {
        height: 280,
        data: [
          { type: '中国移动', value: 27 },
          { type: '中国联通', value: 25 },
          { type: '中国电信', value: 18 },
        //   { type: '分类四', value: 15 },
        //   { type: '分类五', value: 10 },
        //   { type: '其他', value: 5 },
        ],
        angleField: 'value',
        colorField: 'type',
        // paddingRight: 80,
        innerRadius: 0.6,
        label: {
          text: 'value',
          style: {
            fontWeight: 'bold',
          },
        },
        legend: {
          color: {
            title: false,
            position: 'right',
            rowPadding: 5,
          },
        },
        tooltip:{
            title:(d:any)=>{
                console.log('d',d)
                return d.type
            }
        }
        // annotations: [
        //   {
        //     type: 'text',
        //     style: {
        //       text: 'AntV\nCharts',
        //       x: '50%',
        //       y: '50%',
        //       textAlign: 'center',
        //       fontSize: 40,
        //       fontStyle: 'bold',
        //     },
        //   },
        // ],
      };
    return <>
    <StatisticCard.Group direction={ 'row'}>
        <StatisticCard
          title= '卡片使用情况'
          chart={
            <Pie {...config} />
          }
        />
        <Divider type={'vertical'} />
        <StatisticCard
          title='流量使用情况'
          chart={
            <Pie {...config} />
          }
         
        />
        <Divider type={'vertical'} />
        <StatisticCard
          title='流量组成情况'
          chart={
            <Pie {...config} />
          }
         
        />
      </StatisticCard.Group>
</>
}
export default PieStatics