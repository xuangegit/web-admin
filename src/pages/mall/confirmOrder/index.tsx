import { data } from '@/pages/mall/shoppingCar/mock';
import {
  CheckCard,
  PageContainer,
  ProCard,
  ProFormCheckbox,
  ProFormItem,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Button, Flex, Form, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { addressOptions, tableData } from './mock';
import { useNavigate } from '@umijs/max';
const ConfirmOrder: React.FC = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(true);
  const [addressList, setAddressList] = useState(addressOptions);

  const [dataSource, setDataSource] = React.useState(tableData);
  useEffect(() => {
    let temp = {
      name: '商品名称1',
      price: 100,
      id: 1,
      quietPeriod: 3,
      totalPeriod: 6,
      carPrice: 5,
      num: 16,
      totalMoney: 500,
    };
    setDataSource(data.map((item) => ({ ...temp, ...item })));
  }, []);
  return (
    <PageContainer>
      <Form>
        <ProCard title="收货地址" bordered={false} extra={<Button type="link">新增地址</Button>}>
          <Form.Item name="address" className={styles.normalItem}>
            <Space>
              <CheckCard.Group>
                {addressList.map((item) => (
                  <CheckCard
                    title={item.name}
                    description={item.address + ' ' + item.phone}
                    value={item.id}
                    extra={<Button type="link">修改</Button>}
                    key={item.id}
                  />
                ))}
              </CheckCard.Group>
              <Button
                type="link"
                onClick={() => {
                  if (showMore) {
                    let temp = {
                      name: '花美男',
                      phone: '1234567890',
                      address: '上海市松江区莘砖公路576号双子楼B座19层',
                    };
                    let arr = [];
                    let l = addressList.length;
                    for (let i = l; i < l + 6; i++) {
                      arr.push({ ...temp, id: i + 1 });
                    }
                    setAddressList([...addressList, ...arr]);
                  } else {
                    setAddressList(addressOptions);
                  }
                  setShowMore(!showMore);
                }}
              >
                {showMore ? '查看更多' : '收起'}
              </Button>
            </Space>
          </Form.Item>
        </ProCard>
        <ProCard
          title="送货清单"
          extra={<Button type="link" onClick={()=> navigate('/mall/shopping-car')}>返回购物车</Button>}
          bordered={false}
          style={{ marginTop: 12 }}
        >
          <Table
            rowKey="id"
            columns={[
              {
                title: '商品名称',
                dataIndex: ['priceOffer', 'name'],
                key: 'name',
              },
              {
                title: '价格',
                dataIndex: 'price',
                key: 'price',
              },
              {
                title: '沉默期',
                dataIndex: 'quietPeriod',
                key: 'quietPeriod',
              },
              {
                title: '总周期',
                dataIndex: 'totalPeriod',
                key: 'totalPeriod',
              },
              {
                title: '单张卡费',
                dataIndex: 'carPrice',
                key: 'carPrice',
              },
              {
                title: '商品数量',
                dataIndex: 'num',
                key: 'num',
              },
              {
                title: '商品总价',
                dataIndex: 'totalMoney',
                key: 'totalMoney',
                render: (text, record) => {
                  return `￥${record?.price * record?.num}`;
                },
              },
            ]}
            dataSource={dataSource}
            pagination={false}
          />
        </ProCard>
        <div style={{ marginTop: 18 }}>
          <ProFormTextArea
            label="订单备注"
            name="remark"
            placeholder="请输入订单备注"
            width={600}
          />
          <ProFormItem
            name="sendType"
            label="配送方式"
            extra={
              <>因疫情原因，国内部分区域物流受影响，快递时效可能无法保障，造成不便，敬请谅解</>
            }
          >
            <CheckCard.Group size="small">
              <CheckCard title="中通快递" description="快递费5元" value="express" defaultChecked />
              <CheckCard title="顺非快递" description="快递费5元" value="express2" />
            </CheckCard.Group>
          </ProFormItem>
          <ProFormCheckbox label="附加功能">
            为购买卡片开启自动续费 <Button type="link">了解更多</Button>
          </ProFormCheckbox>
        </div>
        <ProCard ghost>
          <Flex vertical gap={4} style={{ padding: '0 16px' }}>
            <div className={styles.sumaryItem}>
              <label>卡数</label>
              <div className={styles.count}>3</div>
            </div>
            <div className={styles.sumaryItem}>
              <label>总商品金额</label>
              <div className={styles.count}>￥352.52</div>
            </div>
            <div className={styles.sumaryItem}>
              <label>运费</label>
              <div className={styles.count}>￥10</div>
            </div>
          </Flex>
          <div className={styles.sumary_wrapper}>
            <Flex gap={4} vertical>
              <div className={styles.sumaryItem}>
                <label>应付总额</label>
                <div className={`${styles.count} ${styles.total}`}>￥362.52</div>
              </div>
              <div className={styles.userInfo}>
                寄送至： 上海 松江区 车墩镇 上海市松江区善德苑23栋1304室 收货人：轩乾辉 183****3010
              </div>
            </Flex>
          </div>
          <div style={{ textAlign: 'right', marginTop: 12 }}>
            {' '}
            <Button size="large" type="primary">
              提交订单
            </Button>
          </div>
        </ProCard>
      </Form>
    </PageContainer>
  );
};
export default ConfirmOrder;
