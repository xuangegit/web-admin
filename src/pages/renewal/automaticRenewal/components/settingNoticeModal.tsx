import { useNavigate } from '@umijs/max';
import { Button, Flex, Modal, Switch } from 'antd';
import React from 'react';
import styles from '../index.less';
interface NoticeProps {
  open: boolean;
  onClose: () => void;
}
const SettingNoticeModal: React.FC<NoticeProps> = (props: NoticeProps) => {
  const { open, onClose } = props;
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(true);
  const switchChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    setChecked(checked);
  };
  const goSetting = () => {
    navigate('/account/settings');
  };
  return (
    <Modal title="自动续通知设置" open={open} onCancel={onClose} footer={false}>
      <div className={styles['notice-switch_wrapper']}>
        {' '}
        <label>自动续费通知：</label>
        <Switch onChange={switchChange} checked={checked} />{' '}
      </div>
      <ul className={`${styles.ul} ${styles.notice_desc}`}>
        <li>1. 该功能默认开启</li>
        <li>2. 通知内容为：本月自动续费卡数，以及预计扣除金额，如余额不足，会提醒您充值</li>
        <li>3. 请在15号之前核对当月续费数据，如金额有问题请及时联系商务经理</li>
      </ul>
      <div>
        <h3>通知设置</h3>
        <Flex vertical>
          <div>
            设置接收余额提醒的手机号{' '}
            <Button type="link" onClick={goSetting}>
              去设置
            </Button>
          </div>
          <div>
            绑定微信公众号接受提醒{' '}
            <Button type="link" onClick={goSetting}>
              去绑定
            </Button>
          </div>
        </Flex>
      </div>
    </Modal>
  );
};
export default SettingNoticeModal;
