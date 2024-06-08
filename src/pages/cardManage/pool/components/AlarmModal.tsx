import { ModalForm, ProForm, ProFormDigit, ProFormList } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { Alert, Button, Flex } from 'antd';
import React from 'react';
const AlarmModal: React.FC = () => {
  const onFinish = (values: Record<string, any>): Promise<any> => {
    console.log('values', values);
    return new Promise((resolve, reject) => {
      reject('true');
    });
  };
  const navigate = useNavigate();
  const gotoBasePage = () => {
    navigate('/account/settings');
  };
  return (
    <ModalForm
      title="告警提醒"
      onFinish={onFinish}
      width={560}
      trigger={<Button type="primary">告警提醒</Button>}
    >
      <Alert
        message={
          <>
            告警值设置(每个设置触发通知一次)
            <br />
            流量池爆池停卡后，如需恢复需要一定的时间，
            具体时间会受流量池卡数和运营商接口速度影响。故建议尽早通知和续费
          </>
        }
      ></Alert>
      <br />
      <ProFormList
        name="alarmConfig"
        initialValue={[
          {
            useMode: 'chapter',
          },
        ]}
        creatorButtonProps={{
          position: 'bottom',
          creatorButtonText: '新增一条',
        }}
        creatorRecord={{
          useMode: 'none',
          value: '',
        }}
      >
        <ProForm.Item noStyle>
          <Flex align="baseline">
            <div>流量使用率超过</div>
            <div>
              <ProFormDigit name="value" max={100} addonAfter="%" />
            </div>
            <div>进行通知</div>
          </Flex>
        </ProForm.Item>
      </ProFormList>
      <div>
        <div>
          设置接收告警短信的手机号{' '}
          <Button type="link" onClick={gotoBasePage}>
            去设置
          </Button>
        </div>
        <div>
          绑定微信公众号接受提醒{' '}
          <Button type="link" onClick={gotoBasePage}>
            去绑定
          </Button>
        </div>
      </div>
    </ModalForm>
  );
};
export default AlarmModal;
