import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Card, Divider, Empty, Flex, Form, Image, InputNumber, Modal, Space } from 'antd';
import { throttle } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import chinanetImg from './images/chinanet.png';
import cmccImg from './images/cmcc.png';
import styles from './index.less';
import { data } from './mock';
const ShoppingCar: React.FC = () => {
  const [modal, contextHolder] = Modal.useModal();
  const [selectRows, setSelectRows] = React.useState<any>([]);
  const [selectRowKeys, setSelectRowKeys] = useState<any[]>([]);
  const shopTotalCost = useMemo(() => {
    return selectRows.reduce((pre, cur) => {
      return pre + cur.price * cur.num;
    }, 0);
  }, [selectRows]);
  const discount = 0;
  const [form] = Form.useForm();
  console.log('throttle', throttle);
  const tableData = [
    {
      name: '商品名称1',
      price: 100,
      id: 1,
      quietPeriod: 3,
      totalPeriod: 6,
      carPrice: 5,
      num: 16,
      totalMoney: 500,
    },
    {
      name: '商品名称2',
      price: 100,
      id: 2,
      quietPeriod: 3,
      totalPeriod: 6,
      carPrice: 5,
      num: 25,
      totalMoney: 500,
    },
  ];
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
    setDataSource(data.map((item) => ({ ...temp, ...item, ...item })));
  }, []);

  const request = async (params: any) => {
    return {
      data: tableData,
      success: true,
      total: 100,
    };
  };
  const deleteHandler = () => {
    modal.confirm({
      title: '确定删除吗？',
      onOk: () => {
        console.log('删除成功');
        // 删除成功后刷新列表
      },
    });
  };
  return (
    <PageContainer>
      <ProTable
        rowKey="id"
        search={false}
        options={false}
        dataSource={dataSource}
        columns={[
          {
            title: '商品名称',
            dataIndex: ['priceOffer', 'name'],
            key: 'name',
          },
          {
            title: '价格',
            dataIndex: 'price',
            valueType: 'money',
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
            valueType: 'digit',
            key: 'num',
            render: (text, record, index) => {
              console.log('text&record', text, record, index);
              return (
                <InputNumber
                  min={1}
                  defaultValue={record?.num}
                  onChange={(value) => {
                    console.log('商品数量改变', value);
                    let arr = [...dataSource];
                    arr.splice(index, 1, { ...record, num: value });
                    setDataSource(arr);
                  }}
                />
              );
            },
          },
          {
            title: '商品总价',
            dataIndex: 'totalMoney',
            key: 'totalMoney',
            render: (text, record) => {
              return `￥${record?.price * record?.num}`;
            },
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <Button type="text" onClick={deleteHandler}>
                删除
              </Button>
            ),
          },
        ]}
        request={request}
        pagination={false}
        rowSelection={{
          selectedRowKeys: selectRowKeys,
          onChange: (selectedRowKeys, selectedRows, info) => {
            console.log('selectedRowKeys', selectedRowKeys, selectedRows, info);
            setSelectRowKeys(selectedRowKeys);
            setSelectRows(selectedRows);
          },
        }}
        tableAlertOptionRender={() => {
          return (
            <Space size={16}>
              <Button danger type="text" onClick={deleteHandler}>
                删除选中的商品
              </Button>
            </Space>
          );
        }}
      />
      <Card
        style={{ width: '50%', minWidth: 400, margin: '0 auto', marginTop: 20 }}
        title={
          <Flex gap={10} align="center">
            <div>结算明细</div>
            <div style={{ fontWeight: 'normal', fontSize: 14 }}>
              已经选中
              <span style={{ fontWeight: 600, fontSize: 18, color: '#1890ff' }}>
                {selectRows.length}
              </span>
              件商品
            </div>
          </Flex>
        }
      >
        {selectRows.length > 0 ? (
          <div>
            <Flex gap={16}>
              {selectRows.map((item, index) => {
                return (
                  <Image
                    width={80}
                    className={styles.selectShopImg}
                    src={item?.carrier === 'cmcc' ? cmccImg : chinanetImg}
                    key={item.id}
                  />
                );
              })}
            </Flex>
            <div style={{ marginTop: selectRows.length > 0 ? 20 : 0 }}>
              <div className={styles.shopInfo}>
                {' '}
                <label>商品总价</label>
                <span>
                  ￥<span className={styles.totalMoney}>{shopTotalCost}</span>
                </span>
              </div>
              <div className={styles.discountInfo}>
                <label>优惠</label>
                <span>￥0.00</span>
              </div>
            </div>
          </div>
        ) : (
          <Empty description="暂时没有选中的商品" />
        )}
        <Divider />
        <div className={styles.settleInfo}>
          <div className={styles.totalCost}>
            合计：￥
            <span className={styles.totalMoney}>
              <b>{shopTotalCost - discount}</b>
            </span>
          </div>
          <Button type="primary" size="large" onClick={() => {}}>
            结算
          </Button>
        </div>
      </Card>
      {contextHolder}
    </PageContainer>
  );
};
export default ShoppingCar;
