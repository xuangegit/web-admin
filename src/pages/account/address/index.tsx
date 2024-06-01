import type { ActionType,  } from '@ant-design/pro-components';
import {
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Space,Switch } from 'antd';
import React, { useRef, useState } from 'react';
import {columns} from './config'
import { rule } from '@/pages/cardManage/card/service';
import AddOrEdit from './components/addOrEdit';
const Address: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [editModalConfig,setEditModalConfig] = useState<{visible:boolean,id?:string}>({visible:false})
  return (
    <PageContainer
      ghost
      fixedHeader
    >
      <ProTable
        actionRef={actionRef}
        rowKey="key"
        search={false}
        dateFormatter="string"
        options={false}
        toolBarRender={() => [
          <Button key='add' type="primary" onClick={()=>setEditModalConfig({visible:true})}>新增</Button>,
        ]}
        request={rule}
        scroll={{
          x: 1000,
        }}
        columns={[...columns,{
          title: '操作',
          dataIndex: 'option',
          key:'option',
          fixed:'right',
          width:240,
          render: (_, record) => {
            return <Space>
              <Switch unCheckedChildren='设为默认' checkedChildren='取消默认'/>
              <Button  size="small" type="text" onClick={()=>setEditModalConfig({visible:true,id:'3424'})}>编辑</Button>
              <Button size="small" type="text" danger>删除</Button>
            </Space>
          }
        }]}
       
      />
      

        <AddOrEdit {...editModalConfig} onClose={()=>setEditModalConfig({visible:false})} />
    </PageContainer>
  );
};

export default Address;
