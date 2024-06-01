import type { ActionType,  } from '@ant-design/pro-components';
import {
  ProTable,
} from '@ant-design/pro-components';
import { Button, Tooltip } from 'antd';
import React, { useRef,useState  } from 'react';
import {ExportOutlined} from '@ant-design/icons'
import {columns} from './config'
import { rule } from '@/pages/cardManage/card/service';
import NetConfigModal from './netConfigModal';
const HistoryList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState(false);
  const [netConfig,setNetConfig] = useState({type:'open',visible:false})
  return (
    <>
      <ProTable
        style={{marginTop:10}}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 'auto',
          // filterType: 'light',
        }}
        dateFormatter="string"
        options={{
          density: false,
          fullScreen: false,
          setting: true,
          reload: false,
        }}
        toolBarRender={() => [
          <Button key="opennet" type='primary' onClick={() => setNetConfig({type:'open',visible:true})} >打开网络</Button>,
          <Button key="closesnet" type='primary' onClick={() => setNetConfig({type:'close',visible:true})} >关闭网络</Button>,
          <Tooltip title="批量导出" key="export">
             <Button key="export" type='primary' icon={<ExportOutlined />} onClick={() => {}} >导出</Button>
          </Tooltip>,
        ]}
        request={rule}
        scroll={{
          x: 1000,
        }}
        columns={columns}
      />
      <NetConfigModal {...netConfig} onCancel={()=>setNetConfig({type:'',visible:false})} selectedRowsState={[]}/>
    </>
  );
};

export default HistoryList;
