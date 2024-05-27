import React,{} from 'react';
import { ModalForm,ProFormTextArea } from '@ant-design/pro-components';
const Manual:React.FC = () => {
  return (
    <ModalForm
      title="续费卡片"
      width={600}
      submitter={{
        searchConfig: {
          submitText: '下一步',
        },
        // render: (_, dom) => dom[1],
      }}
      onFinish={async () => {
        return true;
      }}
    >
       <ProFormTextArea
          name="baseInfo"
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