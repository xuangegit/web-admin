  import {
    ProFormCheckbox,
    ProFormItem,
    ProFormTextArea,
    StepsForm,
    ProFormSelect
  } from '@ant-design/pro-components';
  import { Modal, Button, Alert,Flex,Divider} from 'antd';
  import React ,{useRef,useEffect}from 'react';
  import { useNavigate } from '@umijs/max';
 
  export type ShutdownProtectionProps = {
    onCancel: () => void;
    onSubmit?: (values?: any) => Promise<void>;
    visible: boolean;
    values?: { [key: string]: any };
    selectedRowsState?:any[]
  };
  const price = 6.5
  const ShutdownProtection: React.FC<ShutdownProtectionProps> = (props) => {
    const navigate = useNavigate();
    const stepFormRef = useRef();
    const {selectedRowsState} = props
    return (
      <StepsForm
        formRef={stepFormRef}
        stepsProps={
          {
            // size: 'small',
          }
        }
        
        stepsFormRender={(dom, submitter) => {
            console.log('dom',dom);
            console.log('submitter',submitter);
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
              title="停机保号"
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
        onFinish={()=>{
            console.log('onFinish',stepFormRef.current);
        }}
      >
        <StepsForm.StepForm
          initialValues={{
            name: props?.values?.baseInfo,
            type: 0,
          }}
          name="baseInfo"
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
          title="卡片信息"
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
          <ProFormItem label="ICCID" tooltip="这里只显示有效的iccid"  required style={{marginBottom:0}}>
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
            <ProFormSelect label='停机保号月数' name="monthCount" valueEnum={{1:'一个月',2:'两个月'}} rules={[{ required: true, message: '请选择停机保号月数'}]}/>
            
            <Flex vertical>
                <div>1、不可对已销卡、已提交销卡的卡进行停机保号设置； </div>
                <div>2、不可对NB卡进行停机保号设置；</div>
                <div>3、未过期卡，停机保号在卡过期后开始生效，已过期卡立即生效；</div>
                <div>4、每张卡在每次过期后仅可开通过一次停机保号功能，且每次最多只开通2个月；</div>
                <div>5、处于停机保号状态卡，仍可续费，剩余停机保号时间自动推迟到续费套餐结束后生效；</div>
                <div>6、开通停机保号不影响自动续费，若需要进入停机保号请手工关闭自动续费。</div>
            </Flex> 
            <Divider/>           
            <ProFormItem dependencies={['target','monthCount']}>
                {({ getFieldValue }) => {
                    let target = getFieldValue('target') || [];
                    let count = target.length;
                    let monthCount = getFieldValue('monthCount') || 0;
                    return (
                        <Flex vertical gap={8} style={{ fontWeight: 'bolder', fontSize: 16, marginLeft: 20 }}>
                            <div>
                                停号保机单价：<label>￥{price}</label>
                            </div>
                            <div>
                                应付金额：<label>￥{price * count * monthCount}</label>
                            </div>
                            <div>
                                账户余额：<label>￥20.20</label>
                            <span style={{ fontWeight: 'normal', fontSize: 14, color: 'red' }}>
                                &nbsp;&nbsp;余额不足?<Button type="link">去充值</Button>
                            </span>
                            </div>
                       </Flex>
                    )
                }}
            </ProFormItem>     
        </StepsForm.StepForm>
      </StepsForm>
    );
  };
  
  export default ShutdownProtection;
  