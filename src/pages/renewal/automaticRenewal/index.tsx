import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button ,Divider,Flex} from 'antd';
import React from 'react';
import styles from './index.less'
const AutomaticRenewal: React.FC = () => {
  return (
    <PageContainer>
      <ProCard>
        <div>
          自动续费规则 <Button size='small'>设置通知</Button>
        </div>

        <ol className={styles.ol} style={{marginTop:10}}>
          <li className={styles.li}>
            <dl className={styles.dl}>
              <dt>1、目前仅支持非NB指定套餐卡支持自动续费</dt>
              <dd>自动续费卡范围为当月过期卡；</dd>
              <dd>平台将在 每月15-22日 （下午15点）执行自动续费操作；</dd>
              <dd>执行自动续费操作默认续当前套餐档位，加一个套餐周期；</dd>
              <dd>自动续费设置在 每月22日15点 之前修改则当月生效，之后修改则次月生效。</dd>
            </dl>
          </li>
          <li className={styles.li}>
            <dl className={styles.dl}>
              <dt>2、按月套餐卡自动续费</dt>
              <dd>自动续费卡范围为卡未过期并且当月过期卡或达量的卡；</dd>
              <dd>平台将在卡过期时间 小于5天大于2小时或卡达量 时进行自动续费；</dd>
              <dd>执行自动续费操作默认续当前套餐档位，加一个套餐周期；</dd>
              <dd>自动续费设置修改实时生效。</dd>
            </dl>
          </li>
          <li className={styles.li}>3、自定义套餐卡自动续费（过期自动续费，达量自动续费）</li>
          <li className={styles.li}>4、开启自动续费功能后，请保持账户余额充足</li>
          <li className={styles.li}>5、余额不足时不执行自动续费；平台会进行短信通知，请在收到短信后及时充值</li>
          <li className={styles.li}>
            6、如因账户余额不足未执行自动续费，用户可在套餐到期前进行账户余额充值并手动续费；（操作步骤：卡片列表导出自动续费卡清单、手动续费）
          </li>
          <li className={styles.li}>
            7、已划拨的卡无法开启自动续费，主账户只可手动续费，如需开启自动续费，请前往子账户开启。
          </li>
        </ol>
        <Divider type='horizontal'/>
        <Flex vertical gap={10} >
            <div>您有0张物联网卡已经开启自动续费！</div>
            <div>本月将自动续费0张卡，预计扣除0元</div>
        </Flex>
        <Flex gap={16} style={{marginTop:10}}>
            <Button type='primary'>开启自动续费</Button>
            <Button>关闭自动续费</Button>
        </Flex>
      </ProCard>
    </PageContainer>
  );
};
export default AutomaticRenewal;
