import {
  ModalForm,
  ProFormCheckbox,
  ProFormItem,
  ProFormSelect,
  ProFormSwitch,
} from '@ant-design/pro-components';
import { Alert, Button, Divider, Flex } from 'antd';
import React from 'react';

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
  const {  open, onClose, info } = props;
  const { isAllowAutoRecharge,iccids } = info;

  return (
    <ModalForm
      title="续费短信包"
      layout="horizontal"
      width={560}
      {...formLayout}
      open={open}
      modalProps={{
        onCancel: onClose,
        destroyOnClose: true,
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
              let iccids = getFieldValue('iccids') || [];
              return <Alert message={`当前有效ICCID${iccids.length}个`}></Alert>;
            }}
          </ProFormItem>
        </Flex>
      </ProFormItem>
      <ProFormSelect
        rules={[{ required: true, message: '请选择续费方式' }]}
        label="续费方式"
        name="renewType"
        options={[
          { label: '月包', value: 'month' },
          { label: '年包', value: 'year' },
        ]}
      />

      <ProFormItem noStyle>
        <Flex vertical>
          <div>
            1、短信包都以自然月的方式进行结算；开通当月为一个自然月，算入短信包周期内。即月包当月末到期。
          </div>
          <div>2、当前未开通短信包的卡，在续费后需要1-2个工作日后方可使用。</div>
        </Flex>
      </ProFormItem>
      <Divider />
      <ProFormItem shouldUpdate>
        {({ getFieldValue }) => {
          let count = getFieldValue('iccids')?.length;
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
