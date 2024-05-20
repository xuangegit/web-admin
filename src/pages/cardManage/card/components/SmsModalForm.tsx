import {
  ProFormCheckbox,
  ProFormItem,
  ProFormSelect,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import React from 'react';
import type { TableListItem } from '../data';

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
              body:{
                // padding: '32px 40px 48px',
                padding:'10px'
              }
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
          rules={[
            {
              required: true,
              message: '请输入！',
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        layout="horizontal"
        initialValues={{
          target: ['0', '1'],
          template: '0',
        }}
        title="短信发送"
      >
        <ProFormItem label="ICCID" tooltip='这里只显示有效的iccid'>
          <div style={{
            border:'1px solid #ccc',
            padding:'10px 15px',
            borderRadius:5,
            maxHeight:150,
            overflowY:'auto'
          }}>
            <ProFormCheckbox.Group
              name="target"
              // label="监控对象"
              rules={[{required:true,message:'请选择至少一个iccid'}]}
              options={[
                {
                  label: '13131234243234243123111表一',
                  value: '0',
                },
                {
                  label: '11312312423423423431231表二',
                  value: '1',
                },
                {
                  label: '1132131224234242424211312表2',
                  value: '2',
                },
                {
                  label: '11312314242342342424231312表3',
                  value: '3',
                },
                {
                  label: '11342344234234234234412313表4',
                  value: '4',
                },
                {
                  label: '1111242424234234242312313表5',
                  value: '5',
                },
                {
                  label: '11342344234234234234412313表4',
                  value: '6',
                },
                {
                  label: '1111242424234234242312313表5',
                  value: '7',
                },
                {
                  label: '11342344234234234234412313表4',
                  value: '8',
                },
                {
                  label: '1111242424234234242312313表5',
                  value: '9',
                },
              ]}
            />
          </div>
        </ProFormItem>
        <ProFormTextArea name="smsContent" label="短信内容" />
        <ProFormSelect
          name="template"
          width="md"
          label="规则模板"
          valueEnum={{
            0: '规则模板一',
            1: '规则模板二',
          }}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
