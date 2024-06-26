import  React,{useState} from 'react';
import {Tabs} from  'antd';
import type { TabsProps } from 'antd';
import InvoiceApply from './InvoiceApply';
import InvoiceRecord from './InvoiceRecord';
const Invoice: React.FC = () => {
    const [activeKey, setActiveKey] = useState('1');
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: '发票申请',
          children: <InvoiceApply/>,
        },
        {
          key: '2',
          label: '发票记录',
          children: <InvoiceRecord/>,
        },   
    ];
    const tabChange=(key:string)=>{
        setActiveKey(key)
    }
    return (
        <>
          <Tabs defaultActiveKey="1" items={items}  onChange={tabChange}/>     
        </>
   )
}   
export default Invoice;