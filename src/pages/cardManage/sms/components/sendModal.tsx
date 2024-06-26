import { ModalForm, ProFormItem, ProFormTextArea } from '@ant-design/pro-components';
import { Alert, Button, message } from 'antd';
import React from 'react';
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
const sendSmsModal: React.FC = () => {
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };
  return (
    <ModalForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      title="短信发送"
      trigger={<Button type="primary"> 发送短信</Button>}
      {...formItemLayout}
      layout={'horizontal'}
      // submitter={{
      //   render: (props, doms) => {
      //     return (
      //       <Row>
      //         <Col span={14} offset={4}>
      //           <Space>{doms}</Space>
      //         </Col>
      //       </Row>
      //     );
      //   },
      // }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values);
        message.success('提交成功');
      }}
      params={{}}
      request={async () => {
        await waitTime(100);
        return {
          name: '蚂蚁设计有限公司',
          useMode: 'chapter',
        };
      }}
    >
      <ProFormTextArea
        name="baseInfo"
        label="ICCID/MSISDN"
        tooltip="请输入ICCID/MSISDN,一行一个,可复制excell中iccid列数据"
        placeholder="请输入ICCID,一行一个"
        fieldProps={{
          autoSize: { minRows: 3, maxRows: 8 },
          count: {
            show: ({ count }) => <>{count}个物联网卡</>,
          },
        }}
        rules={[
          {
            required: true,
            message: '请输入ICCID！',
          },
        ]}
      />
      <ProFormItem label="短信内容" required>
        <ProFormTextArea
          name="smsContent"
          rules={[{ required: true, message: '请输入短信内容' }]}
          placeholder="每64个字增加一条短信计数，内容长度不能超过160"
          fieldProps={{
            count: {
              max: 160,
              // show:true,
              show: ({
                count,
                maxLength,
              }: {
                value: string;
                count: number;
                maxLength?: number;
              }) => {
                return <div>{`${count}/${maxLength}，${Math.ceil(count / 64)}条`}</div>;
              },
            },
          }}
        />
        <Alert
          type="warning"
          message="中国移动物联网卡在短信内容有中文时发送前会带有如【xxxxxxxx】的签名字样。"
        ></Alert>
      </ProFormItem>
    </ModalForm>
  );
};
export default sendSmsModal;
