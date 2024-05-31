import { ModalForm, ProFormSwitch } from '@ant-design/pro-components';
import { Button, Flex } from 'antd';
const RenewalModal = () => {
  return (
    <ModalForm
      title="自动续池"
      width={620}
      layout="horizontal"
      //   labelCol={{span:4}}
      trigger={<Button type="primary">自动续池</Button>}
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
    >
      <ProFormSwitch label="自动续费流量池叠加包" name="flag" />
      <Flex vertical>
        <div>1.开启功能后，流量池使用量达到100%时，会自动续费流量池叠加包保证流量池卡正常使用。 </div>
        <div>2.账户余额为负时，无法自动续费。</div>
      </Flex>
    </ModalForm>
  );
};
export default RenewalModal;
