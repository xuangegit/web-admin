import React,{} from 'react';
import { ModalForm,ProFormTextArea } from '@ant-design/pro-components';
type manualProps = {  
  open: boolean;
  onClose:()=>void,
  onOk:(p?:any)=>void,
};
const Manual:React.FC<manualProps> = (props) => {
  
  return (
    <ModalForm
      title="续费卡片"
      width={600}
      open={props.open}
      modalProps={{
        onCancel:props.onClose,
        destroyOnClose:true 
      }}
      submitter={{
        searchConfig: {
          submitText: '下一步',
        },
        // render: (_, dom) => dom[1],
      }}
      onFinish={async (values) => {
        // return true;
        console.log('values',values)
        props?.onOk && props?.onOk(values?.iccids)
       
      }}
    >
       <ProFormTextArea
          name="iccids"
          label="ICCID"
          tooltip="请输入ICCID,一行一个,可复制excell中iccid列数据"
          placeholder="请输入ICCID,一行一个"
          fieldProps={{
            autoSize: { minRows: 3, maxRows: 8 },
          }}
          rules={[
            {
              required: true,
              message: '请输入ICCID！',
            },
          ]}
        />
    </ModalForm>
  );
};
export default Manual;