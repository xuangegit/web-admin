import {
  ProFormCheckbox,
  ProFormItem,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Modal ,Alert} from 'antd';
import React ,{useRef}from 'react';
import type { TableListItem } from '../data';
import { useNavigate } from '@umijs/max';
export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<TableListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values?: FormValueType) => Promise<void>;
  visible: boolean;
  values: { [key: string]: any };
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const navigate = useNavigate();
  const baseRef = useRef<any>();
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
            title="发送短信"
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
      onFinish={props.onSubmit}
    >
      <StepsForm.StepForm
        initialValues={{
          name: props?.values?.baseInfo,
          type: 0,
        }}
        layout='horizontal'
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
        title="基本信息"
      >
        {/* <ProFormRadio.Group
          name="type"
          label="录入方式"
          options={[
            {
              value: '0',
              label: '手动',
            },
            {
              value: '1',
              label: '文件',
            },
          ]}
        /> */}
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
        title="短信发送"
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
        
        <ProFormItem  label="短信内容" required>
          <ProFormTextArea
            name="smsContent"
            rules={[{required: true, message: '请输入短信内容'}]}
            placeholder='每64个字增加一条短信计数，内容长度不能超过160'
            fieldProps={{
              count: {
                max:160,
                // show:true,
                show:({count,maxLength}: { value: string; count: number; maxLength?: number })=>{
                  return <div style={{fontWeight:'bold'}}>
                    {`${count}/${maxLength}，${Math.ceil(count/64)}条`}
                  </div>
                }
              },
            }}
          />
          <Alert type='warning'  message='中国移动物联网卡在短信内容有中文时发送前会带有如【xxxxxxxx】的签名字样。'></Alert>
        </ProFormItem>
        {/* <ProFormSelect
          name="template"
          width="md"
          label="规则模板"
          valueEnum={{
            0: '规则模板一',
            1: '规则模板二',
          }}
        /> */}
        <ProFormItem label='应付金额'>
          <span style={{color:'red',fontWeight:'bold'}}>￥140.00</span>
        </ProFormItem>
        <ProFormItem label='账户余额'>
          <span style={{color:'#1890ff',fontWeight:'bold',marginRight:8}}>￥80</span> 
          <span>余额不足！<a onClick={()=>navigate('/recharge')}>去充值</a></span>
        </ProFormItem>
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
