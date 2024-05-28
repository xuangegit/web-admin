import { ModalForm, ProFormCheckbox, ProFormDigit, ProFormItem } from '@ant-design/pro-components';
import { Alert, Button, Divider, Flex } from 'antd';
import React from 'react';

const PackageModalForm: React.FC<any> = (props) => {
  const {
    iccids = [
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
    ],
    open,
    onClose,
  } = props;
  return (
    <ModalForm
      title="续套餐周期 - 自定义套餐卡"
      layout="horizontal"
      width={560}
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
      open={open}
      modalProps={{
        onCancel: onClose,
      }}
    >
      <ProFormItem label="ICCID" tooltip="这里只显示有效的iccid" required>
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
            name="iccids"
            initialValue={iccids}
            rules={[{ required: true, message: '请选择至少一个iccid' }]}
            options={iccids}
          />
        </div>
        <Alert message="当前有效ICCID8个"></Alert>
      </ProFormItem>
      <ProFormItem label="选择套餐">当前套餐</ProFormItem>
      <ProFormItem label="续费周期">
        <Flex align="center" gap={10}>
          <ProFormDigit label="" name='count' addonAfter="份" />
          <ProFormItem shouldUpdate>
            {({ getFieldValue }) => {
              const iccids = getFieldValue('iccids');
              let count = iccids.length + 1;
              return <div>最多可续{count}份</div>;
            }}
          </ProFormItem>
        </Flex>
      </ProFormItem>
      <ProFormItem>
        <Flex vertical>
          <div>1、若卡已停卡，续费后卡具体激活时间受运营商接口速度影响，月初预计2-4小时恢复。</div>
          <div>
            2、续费成功后，卡计划套餐将在一定时间内完成添加，过期时间会在计划套餐添加完成后变更。
          </div>
        </Flex>
      </ProFormItem>
      <Divider />
      <ProFormItem shouldUpdate>
        {({ getFieldValue }) => {
          let count = getFieldValue('iccids').length;
          let money = count * 12.5;
          return (
            <Flex vertical gap={8} style={{fontWeight:'bolder',fontSize:16}}>
              <div>
                套餐金额：<label>￥{money}</label>
              </div>
              <div>
                应付金额：<label>￥{money}</label>
              </div>
              <div>
                账户余额：<label>￥{money}</label>
                <span style={{fontWeight:'normal',fontSize:14,color:'red'}}>
                  &nbsp;&nbsp;余额不足?<Button type="link">去充值</Button>
                </span>
              </div>
            </Flex>
          );
        }}
      </ProFormItem>
     
    </ModalForm>
  );
};
export default PackageModalForm;
