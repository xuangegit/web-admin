import { ModalForm, ProFormDigit, ProFormItem } from '@ant-design/pro-components';
import { Button, Divider, Flex } from 'antd';
const RenewalModal = () => {
  const price = 30;
  return (
    <ModalForm
      title="续费"
      width={620}
      layout='horizontal'
    //   labelCol={{span:4}}
      trigger={<Button type="primary">续费</Button>}
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
    >
      <ProFormDigit label="流量池增加" name="count" addonAfter="100M" />
      <ProFormItem label="流量池剩余">24.823G</ProFormItem>
      <Flex vertical>
        <div>1、每份流量池叠加包大小同流量池规格，比如30M的流量池，每份流量池叠加包为30M； </div>
        <div>2、流量池叠加包续费后立即生效，仅当月有效，按月清零；</div>
        <div>3、流量池用超后，续费流量池叠加包会优先抵扣超额流量；</div>
        <div>
          4、流量池用超后，续费流量池叠加包至流量池正常状态，所有物联网卡将在一定时间内逐渐恢复；
        </div>
      </Flex>
      <Divider />
      <ProFormItem dependencies={['count']}>
        {({ getFieldValue }) => {
          let count = getFieldValue('count');
          return (
            <Flex vertical gap={8} style={{ fontWeight: 'bolder', fontSize: 16, marginLeft: 20 }}>
              <div>
                单价：<label>￥{price}/100M</label>
              </div>
              <div>
                应付金额：<label>￥{price * count|0}</label>
              </div>
              <div>
                账户余额：<label>￥20.20</label>
                <span style={{ fontWeight: 'normal', fontSize: 14, color: 'red' }}>
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
export default RenewalModal;
