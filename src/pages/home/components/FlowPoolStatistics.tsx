import { Column,Liquid,Pie } from '@ant-design/plots';
import { Card, Col,  Row,Form ,Radio,Select} from 'antd';

import numeral from 'numeral';

import useStyles from '../style.style'


const rankingListData: {
  title: string;
  total: number;
}[] = [];

for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

const SalesCard = ({
  loading,
  salesPieData
}: {
  salesPieData: any[];
  loading: boolean;
 
}) => {
 const {styles}= useStyles()
  const [form] = Form.useForm();
  return (
    <Card
      style={{marginTop:16}}     
      loading={loading}
      bordered={false}
      title='流量池'
      bodyStyle={{
        padding: 0,
      }}
      extra={<Form form={form} layout='inline'>
        <Form.Item>
            <Radio.Group name="carrier" defaultValue="cmcc">
                <Radio.Button value='cmcc'>移动</Radio.Button>
                <Radio.Button value='cucc'>联通</Radio.Button>
                <Radio.Button value='ctcc'>电信</Radio.Button>    
            </Radio.Group>
        </Form.Item>
        <Form.Item name="pool">
            <Select placeholder="请选择流量池"></Select>
        </Form.Item>
      </Form>}
    >
      <div className={styles.salesCard}>
        <Row>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            <div className={styles.salesBar}>
               <Pie
                    height={340}
                    radius={0.8}
                    innerRadius={0.5}
                    angleField="y"
                    colorField="x"
                    data={salesPieData as any}
                    legend={false}
                    label={{
                        position: 'spider',
                        text: (item: { x: number; y: number }) => {
                        return `${item.x}: ${numeral(item.y).format('0,0')}`;
                        },
                    }}
                />
            </div>
          </Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            <div style={{padding:20}}>
                <Liquid  percent={0.35} height={280}/>
            </div>
          </Col>
          <Col xl={8} lg={8} md={8} sm={24} xs={24}>
            <div className={styles.salesRank} style={{padding:20}}>
              <h4 className={styles.rankingTitle}>Top流量池</h4>
              <ul className={styles.rankingList}>
                {rankingListData.map((item, i) => (
                  <li key={item.title}>
                    <span
                      className={`${styles.rankingItemNumber} ${
                        i < 3 ? styles.rankingItemNumberActive : ''
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className={styles.rankingItemTitle} title={item.title}>
                      {item.title}
                    </span>
                    <span>{numeral(item.total).format('0,0')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};
export default SalesCard;
