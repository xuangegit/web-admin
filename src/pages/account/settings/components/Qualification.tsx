import {
  ProFormItem,
  ProFormText,
  ProFormUploadDragger,
  StepsForm,
} from '@ant-design/pro-components';
import { Button, message, Tag } from 'antd';
import React from 'react';
const Qualification: React.FC = () => {
  const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };
  const layoutWrapper = {
    labelCol: {
      span: 5,
    },
  };
  return (
    <>
      <StepsForm<{
        name: string;
      }>
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          message.success('提交成功');
        }}
        formProps={{
          validateMessages: {
            required: '此项为必填项',
          },
        }}
        submitter={{
          render: (props) => {
            if (props.step === 0) {
              return (
                <Button type="primary" onClick={() => props.onSubmit?.()}>
                  {/* 去第二步 {'>'} */}
                  提交审核
                </Button>
              );
            }

            if (props.step === 1) {
              return [
                <Button key="pre" onClick={() => props.onPre?.()}>
                  返回第一步
                </Button>,
                <Button type="primary" key="goToTree" onClick={() => props.onSubmit?.()}>
                  去第三步 {'>'}
                </Button>,
              ];
            }

            return [
              <Button key="gotoTwo" onClick={() => props.onPre?.()}>
                {'<'} 返回第二步
              </Button>,
              <Button type="primary" key="goToTree" onClick={() => props.onSubmit?.()}>
                提交 √
              </Button>,
            ];
          },
        }}
      >
        <StepsForm.StepForm<{
          name: string;
        }>
          name="base"
          layout="horizontal"
          {...layoutWrapper}
          title="基本信息"
          onFinish={async ({ name }) => {
            console.log(name);
            await waitTime(2000);
            return true;
          }}
        >
          <ProFormText
            name="companyName"
            label="企业全称"
            // width="md"
            tooltip="最长为 24 位，用于标定的唯一 id"
            placeholder="请输入名称"
            rules={[{ required: true }]}
          />
          <ProFormText
            name="businessLicenseNum"
            label="工商营业执照注册号"
            // width="md"
            extra={
              <>
                请输入15位工商营业执照注册号，或三证合一后18位的统一社会信用代码
                <Button type="link">查看事例</Button>
              </>
            }
            placeholder="请输入"
            rules={[{ required: true }]}
          />
          <ProFormUploadDragger
            name="businessLicensePicture"
            label="企业工商营业执照"
            rules={[{ required: false }]}
            extra={
              <>
                <Button type="link">查看事例</Button>
              </>
            }
          />
          <ProFormText
            name="corporate"
            label="法人"
            // extra={
            //   <>
            //     请输入15位工商营业执照注册号，或三证合一后18位的统一社会信用代码
            //     <Button type="link">查看事例</Button>
            //   </>
            // }
            placeholder="请输入"
            rules={[{ required: true }]}
          />
          <ProFormText
            name="corporateIdentityCard"
            label="法人身份证号码"
            // extra={
            //   <>
            //     请输入15位工商营业执照注册号，或三证合一后18位的统一社会信用代码
            //     <Button type="link">查看事例</Button>
            //   </>
            // }
            placeholder="请输入"
            rules={[{ required: true }]}
          />
          <ProFormUploadDragger
            name="fontPicture"
            label="法人身份证正面照"
            rules={[{ required: false }]}
            extra={
              <>
                <Button type="link">查看事例</Button>
              </>
            }
          />
          <ProFormUploadDragger
            name="backPicture"
            label="法人身份证反面照"
            rules={[{ required: false }]}
            extra={
              <>
                <Button type="link">查看事例</Button>
              </>
            }
          />
        </StepsForm.StepForm>
        <StepsForm.StepForm name="audit" title="资质审核">
          <ProFormItem>
            <Tag color="processing">审核中</Tag>
          </ProFormItem>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="审核结果">
          <ProFormItem label="">
            <Tag color="success">审核通过</Tag>
          </ProFormItem>
        </StepsForm.StepForm>
      </StepsForm>
    </>
  );
};
export default Qualification;
