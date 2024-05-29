import {
  ModalForm,
  ProFormCheckbox,
  ProFormDigit,
  ProFormItem,
  ProFormSelect,
  ProFormSwitch,
} from '@ant-design/pro-components';
import { Alert, Button, Divider, Flex } from 'antd';
import React from 'react';
import { getRatePlanList } from '../../mock';
const PackageModalForm: React.FC<any> = (props) => {
  const formLayout = {
    labelCol: {
      xs: 24,
      sm: 7,
      md: 4,
    },
    wrapperCol: {
      xs: 24,
      sm: 13,
      md: 20,
    },
  };
  const { open, onClose, info } = props;
  const { iccids, isAllowAutoRecharge } = info;
  return (
    <ModalForm
      title="修改套餐 - 自定义套餐卡"
      layout="horizontal"
      width={560}
      {...formLayout}
      open={open}
      modalProps={{
        onCancel: onClose,
      }}
    >
      <ProFormItem
        label="ICCID"
        tooltip="这里只显示有效的iccid"
        required
        style={{ marginBottom: 0 }}
      >
        <Flex gap={6} vertical>
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
          <ProFormItem dependencies={['iccids']}>
            {({ getFieldValue }) => {
              let iccids = getFieldValue('iccids');
              return <Alert message={`当前有效ICCID${iccids.length}个`}></Alert>;
            }}
          </ProFormItem>
        </Flex>
      </ProFormItem>
      <ProFormSelect
        label="选择套餐"
        name="planId"
        rules={[{ required: true, message: '请选择套餐' }]}
        options={getRatePlanList()}
      />
      <ProFormItem label="续费周期" required style={{ marginBottom: 0 }}>
        <Flex align="center" gap={10}>
          <ProFormDigit
            label=""
            name="count"
            addonAfter="份"
            rules={[{ required: true, message: '请输入续费份数' }]}
          />
          <ProFormItem shouldUpdate>
            {({ getFieldValue }) => {
              const iccids = getFieldValue('iccids');
              let count = iccids.length + 1;
              return <div>最多可续{count}份</div>;
            }}
          </ProFormItem>
        </Flex>
      </ProFormItem>
      <ProFormItem noStyle>
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
            <Flex vertical gap={8} style={{ fontWeight: 'bolder', fontSize: 16, marginLeft: 20 }}>
              <div>
                套餐金额：<label>￥{money}</label>
              </div>
              <div>
                应付金额：<label>￥{money}</label>
              </div>
              <div>
                账户余额：<label>￥{money}</label>
                <span style={{ fontWeight: 'normal', fontSize: 14, color: 'red' }}>
                  &nbsp;&nbsp;余额不足?<Button type="link">去充值</Button>
                </span>
              </div>
            </Flex>
          );
        }}
      </ProFormItem>
      {isAllowAutoRecharge && (
        <ProFormSwitch
          initialValue={true}
          checkedChildren="开启"
          unCheckedChildren="关闭"
          name="autoRecharge"
          label="自动续费"
          tooltip="为本次续费设置自动续费"
        />
      )}
    </ModalForm>
  );
};
export default PackageModalForm;
