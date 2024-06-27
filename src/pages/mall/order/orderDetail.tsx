import React ,{useState}from 'react';
import {ProForm,PageContainer,StepsForm} from '@ant-design/pro-components';
import {Steps,Divider,Flex,Table} from 'antd'
import {orderStatus} from './data.d'
import styles from './index.less';
const OrderDetail: React.FC = () => {
    const [data,setData] = useState({
        orderNum:new Date().getTime(),
        orderStatus:'1',
        expressCompany:'顺丰',
        LogisticsInfo:{
            expressCompany:'顺丰',
            trackingNum:'1234567890',
            freight:10,
        },
        consigneeInfo:{
            name:'张俊',
            address:'上海上海上海市松江区施园路299弄12号楼804 15711666132',
            phone:'15711666132'
        },
        needDeliveryNote:false,
        shippingList:[],
        remark:'订单备注',
        totalNum:3,
        price:100,
        discount:10,
        totalAmount:90,
        payType:1,
        payStatus:1,
        payTime:'2021-01-01 12:00:00',
        payAmount:100,
       
    })
    return (<PageContainer >
               <div className={styles.orderDetailContainer}>
               <Steps>
                    <Steps.Step title="提交订单" description="提交订单"/>
                    <Steps.Step title="支付成功" description="支付成功"/>
                    <Steps.Step title="审核成功" description="审核成功"/>
                    <Steps.Step title="包裹发出" description="包裹发出"/>
                    <Steps.Step title="成功" description="成功"/>
                </Steps> 
                <div className={styles.orderInfo}> 
                    <div className={styles.orderItem}><label>订单编号：</label>{data.orderNum}</div>
                    <div className={styles.orderItem}><label>订单状态：</label>待支付</div>
                    {/* <div>订单状态：{orderStatus[data.orderStatus]}</div> */}
                    <Flex gap={10} className={styles.orderItem}>
                        <div><label>快递公司：</label>{data.LogisticsInfo?.expressCompany}</div>
                        <div><label>货运单号：</label>{data.LogisticsInfo?.trackingNum}</div>
                        <div><label>运费：</label>{data.LogisticsInfo?.freight}</div>
                    </Flex>
                    <Divider/>
                    <div className={styles.orderItem}>
                        <label>收货人信息：</label>
                            {data?.consigneeInfo?.address} 
                        <a> {data?.consigneeInfo?.phone}</a>
                    </div>
                    <Divider/>
                    <div className={styles.orderItem}><label> 送货单：</label>{data.needDeliveryNote?'需要':'不需要'}</div>
                </div>
               </div>
    </PageContainer>)
}
export default OrderDetail;
