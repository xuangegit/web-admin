import React,{useState,useEffect} from 'react';
import { PageContainer,ProForm,CheckCard } from '@ant-design/pro-components';
import { Card, Col, Row, Space, Button,Form } from 'antd';

const addressOptions = [
    {name:'小哥哥',phone:'1234567890',address:'上海市浦东新区，中心校区23号楼1501室',id:1},
    {name:'张俊',phone:'1234567890',address:'上海市浦东新区，中心校区23号楼1501室',id:2},
    {name:'小姐姐',phone:'1234567890',address:'上海市浦东新区，中心校区23号楼1501室',id:3},
    {name:'花美男',phone:'1234567890',address:'上海市松江区莘砖公路576号双子楼B座19层',id:4},
]


const ConfirmOrder: React.FC = () => {
    const [showMore,setShowMore] = useState(true);
    const  [addressList,setAddressList] = useState(addressOptions);
    return (
        <PageContainer>
            <Form layout='vertical'>
                <Form.Item label='收货人信息' name='address'>
                    <Space>
                        <CheckCard.Group>
                            {addressList.map(item=>(<CheckCard title={item.name} description={item.address+' '+item.phone} value={item.id} extra={<Button type="link">修改</Button>} key={item.id}/>))}
                        </CheckCard.Group>
                        <Button type='link' onClick={()=>{
                            if(showMore) {
                               let temp = {name:'花美男',phone:'1234567890',address:'上海市松江区莘砖公路576号双子楼B座19层'};
                                let arr=[];
                                let l=addressList.length;
                                for(let i=l;i<l+6;i++) {
                                    arr.push({...temp,id:i+1}); 
                                
                                }
                                setAddressList([...addressList,...arr]);

                            } else {
                                setAddressList(addressOptions)
                            }
                            setShowMore(!showMore);
                        }}>{showMore?'查看更多':'收起'}</Button>
                    </Space>
                </Form.Item>
            </Form>
        </PageContainer>
    )
}
export default ConfirmOrder;