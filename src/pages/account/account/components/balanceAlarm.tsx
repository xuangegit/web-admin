import {
  ModalForm,
  ProFormDependency,
  ProFormDigit,
  ProFormSwitch,
} from '@ant-design/pro-components';
import { Button, Divider, Flex } from 'antd';
import React from 'react';
const BalanceAlarm: React.FC = () => {
  return (
    <ModalForm title="余额提醒设置" width={600} trigger={<Button>余额提醒</Button>}>
      <ProFormSwitch
        label="余额短信提醒"
        name="alarmStatus"
        tooltip="该设置开关不影响公众号推送"
      ></ProFormSwitch>
      <ProFormDependency name={['alarmStatus']}>
        {({ alarmStatus }) => {
          return alarmStatus ? (
            <Flex align="center" gap={5}>
              <div style={{ marginBottom: 24 }}>余额低于</div>
              <ProFormDigit
                name="alarmMoney"
                addonAfter="元"
                tooltip="余额低于该金额时，会发送短信提醒"
              />
              <div style={{ marginBottom: 24 }}>进行通知</div>
            </Flex>
          ) : null;
        }}
      </ProFormDependency>
      <Divider />
      <div>
        <h4>通知设置</h4>
        <div>
          设置接收余额提醒的手机号 <Button type="link">去设置</Button>
        </div>
        <div>
          绑定微信公众号接受提醒 <Button type="link">去绑定</Button>
        </div>
      </div>
    </ModalForm>
  );
};
export default BalanceAlarm;
