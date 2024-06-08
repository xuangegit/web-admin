import {
  ProFormCheckbox,
  ProFormItem,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-components';
import { Alert, Button, Flex, Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

export type ShutdownProtectionProps = {
  onCancel: () => void;
  onSubmit?: (values?: any) => Promise<void>;
  visible: boolean;
  values?: { [key: string]: any };
  selectedRowsState: any[];
};
const NetConfigModal: React.FC<ShutdownProtectionProps> = (props) => {
  const stepFormRef = useRef();
  const { selectedRowsState, type } = props;
  console.log('selectedRowsState', selectedRowsState);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setCurrent(selectedRowsState?.length ? 1 : 0);
  }, [selectedRowsState]);
  console.log('current', current);
  return (
    <StepsForm
      formRef={stepFormRef}
      current={current}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={660}
            styles={{
              body: {
                // padding: '32px 40px 48px',
                padding: '10px',
              },
            }}
            destroyOnClose
            title={type === 'open' ? '打开网络' : '关闭网络'}
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
      submitter={{
        onReset: () => {
          setCurrent(current - 1);
        },
        render: (props, dom) => {
          console.log('props', props);
          console.log('dom', dom);
          if (props.step === 1 && selectedRowsState?.length > 0) {
            return;
            <Button
              type="primary"
              onClick={() => {
                props?.onSubmit();
              }}
            >
              {' '}
              提交
            </Button>;
          }
          return dom;
        },
      }}
      onFinish={async (values) => {
        console.log('values');
        console.log('onFinish', stepFormRef.current);
        setTimeout(() => {
          return new Promise((resolve, reject) => {
            resolve(true);
            props.onCancel();
          });
        }, 1000);
      }}
    >
      <StepsForm.StepForm
        initialValues={{
          name: props?.values?.baseInfo,
          type: 0,
        }}
        name="baseInfo"
        layout="horizontal"
        labelCol={{
          xs: 24,
          sm: 7,
          md: 4,
        }}
        wrapperCol={{
          xs: 24,
          sm: 13,
          md: 20,
        }}
        title="卡片信息"
        onFinish={async (values) => {
          const reg = /\s*(\r|\n)\s*/g;
          const content = values.iccids.trim().replace(reg, ',').split(',');
          console.log('content', content);
          //   setCurrent(1);
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(true);
              setCurrent(current + 1);
            }, 1000);
          });
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
      </StepsForm.StepForm>
      <StepsForm.StepForm
        layout="horizontal"
        name="sms"
        labelCol={{
          xs: 24,
          sm: 7,
          md: 4,
        }}
        wrapperCol={{
          xs: 24,
          sm: 13,
          md: 20,
        }}
        initialValues={{
          target: ['0', '1'],
          template: '0',
        }}
        title="信息确认"
      >
        <ProFormItem
          label="ICCID"
          tooltip="这里只显示有效的iccid"
          required
          style={{ marginBottom: 0 }}
        >
          <Flex vertical gap={6}>
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
            <ProFormItem dependencies={['iccids']}>
              {({ getFieldValue }) => {
                let iccids = getFieldValue('iccids') || [];
                return <Alert message={`当前有效ICCID${iccids.length}个`}></Alert>;
              }}
            </ProFormItem>
          </Flex>
        </ProFormItem>
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default NetConfigModal;
