import {Modal,Flex,Switch,Button,Input,Form,InputNumber} from 'antd';
import React from 'react';
interface NoticeProps {
    open: boolean;
    
}
const SettingNoticeModal:React.FC<NoticeProps> = (props:NoticeProps) => {
    const {open} = props;
    const switchChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    }
    return (
        <Modal title="自动续通知设置">
            <div><label>自动续费通知：</label><Switch onChange={switchChange}/>  </div>
            <ul>
                <li>1. 该功能默认开启</li>
                <li>2. 通知内容为：本月自动续费卡数，以及预计扣除金额，如余额不足，会提醒您充值</li>
                <li>3. 请在15号之前核对当月续费数据，如金额有问题请及时联系商务经理</li>
            </ul>
        <div>
            <h3>通知设置</h3>
            <Flex vertical>
                <div>设置接收余额提醒的手机号 <Botton type="link">去设置</Botton></div>
                <div>设置接收余额提醒的手机号 <Botton type='link'>去绑定</Botton></div>
            </Flex>
        </div>
        </Modal>
    )
}
export default SettingNoticeModal;