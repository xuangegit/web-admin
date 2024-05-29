import {
    ProFormCheckbox,
    ProFormItem,
    ProFormTextArea,
    StepsForm,  
  } from '@ant-design/pro-components';
  import { Modal ,Alert} from 'antd';
  import React ,{useRef}from 'react';
  
  export type UpdateFormProps = {
    onCancel: () => void;
    onSubmit?: (values?: any) => Promise<void>;
    visible: boolean;
    values?: { [key: string]: any };
    type?: number;
  };
  
  const AutoRenewalModal: React.FC<UpdateFormProps> = (props) => {
    return (
      <StepsForm
        stepsProps={
          {
            // size: 'small',
          }
        }
        stepsFormRender={(dom, submitter) => {
          return (
            <Modal
              width={700}
              styles={{
                body: {
                  // padding: '32px 40px 48px',
                  padding: '10px',
                },
              }}
              destroyOnClose
              title={props.type?'开启自动续费':'关闭自动续费'}
              open={props.visible}
              footer={submitter}
              onCancel={() => {
                props.onCancel();
              }}
            >
              {dom}
            </Modal>
          );
        }}
        onFinish={async(values)=>{
            console.log('values',values)
            props.onCancel()
        }}
      >
        <StepsForm.StepForm
          initialValues={{
            iccids: props?.values?.iccids,
          }}
          layout='horizontal'
          title="卡信息"
          name="baseInfo"
        >
         
          <ProFormTextArea
            name="iccids2"
            // label="ICCID"
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
        </StepsForm.StepForm>
        <StepsForm.StepForm
          layout="horizontal"
          name='sms'
          labelCol={
            {
              xs: 24,
              sm: 7,
              md:4,
            }
          }
          wrapperCol={
            {
              xs: 24,
              sm: 13,
              md: 20,
            }
          }
  
          initialValues={{
            target: ['0', '1'],
            template: '0',
          }}
          title="信息确认"
        >
          <ProFormItem label="ICCID" tooltip="这里只显示有效的iccid"  required>
            <div
              style={{
                border: '1px solid #ccc',
                padding: '10px 15px',
                borderRadius: 5,
                maxHeight: 150,
                overflowY: 'auto',
              }}
            >
              <ProFormCheckbox.Group
                name="target"
                // label="监控对象"
                rules={[{ required: true, message: '请选择至少一个iccid' }]}
                options={[
                  {
                    label: '131312342432342431231115',
                    value: '0',
                  },
                  {
                    label: '11312312423423423431231',
                    value: '1',
                  },
                  {
                    label: '113213122423424242421131',
                    value: '2',
                  },
                  {
                    label: '113123142423423424242313',
                    value: '3',
                  },
                  {
                    label: '113423442342342342344123',
                    value: '4',
                  },
                  {
                    label: '111124242423423424231231',
                    value: '5',
                  },
                  {
                    label: '113423442342342342344123',
                    value: '6',
                  },
                  {
                    label: '111124242423423424231231',
                    value: '7',
                  },
                  {
                    label: '113423442342342342344123',
                    value: '8',
                  },
                  {
                    label: '111124242423423424231231',
                    value: '9',
                  },
                ]}
              />
            </div>
            <Alert message='当前有效ICCID8个'></Alert>
          </ProFormItem>
          <ProFormCheckbox name='isConfirmRule'>我已确认物联网卡自动续费规则</ProFormCheckbox>
        </StepsForm.StepForm>
      </StepsForm>
    );
  };
  
  export default AutoRenewalModal;
  