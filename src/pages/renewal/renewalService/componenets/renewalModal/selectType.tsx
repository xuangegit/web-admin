import { ModalForm, ProCard } from '@ant-design/pro-components';
import { Button, Divider, Flex, Form } from 'antd';
import React, { useMemo, useRef, useState } from 'react';
import { TypeDes, TypeName } from '../../interface.d';
import FinalRenew from '../finalRenew';
import styles from './index.module.less';
type SelectTypeProps = {
  open: boolean;
  onClose: () => void;
  onOk?: () => void;
};

const SelectType: React.FC<SelectTypeProps> = (props) => {
  const [finalOpen, setFinalOpen] = useState(false);
  const [type, setType] = useState('');
  const [info, setInfo] = useState<any>({});
  const { open, onClose } = props;
  const formRef = useRef();
  const [form] = Form.useForm();
  const [data, setData] = useState<any>({
    package: {},
    sms: {
      '0': {
        iccids: [
          '89860467092090035302',
          '89860467092090035473',
          '89860467092090035910',
          '89860467092090035988',
          '89860467092090036385',
          '89860467092090036464',
          '89860467092090036546',
          '89860467092090036554',
          '89860467092090036557',
          '89860467092090036600',
          '89860467092090036668',
          '89860467092090036672',
          '89860467092090036695',
          '89860467092090036845',
          '89860467092090036846',
          '89860467092090037140',
          '89860467092090037145',
          '89860467092090037519',
          '89860467092090037640',
          '89860467092090037642',
          '89860467092090037765',
          '89860467092090037786',
          '89860467092090037803',
          '89860467092090037806',
          '89860467092090037899',
          '89860467092090037949',
          '89860467092090037980',
          '89860467092090038465',
          '89860467092090038505',
          '89860467092090039014',
          '89860467092090039121',
          '89860467092090039430',
          '89860467092090039934',
          '89860467092090039977',
        ],
      },
    },
    period: {
      '84': {
        iccids: [
          '89860467092090237715',
          '89860467092090237721',
          '89860467092090237726',
          '89860467092090237727',
          '89860467092090237730',
          '89860467092090237752',
          '89860467092090237834',
          '89860467092090237838',
          '89860467092090237839',
          '89860467092090237841',
          '89860467092090237842',
          '89860467092090237846',
          '89860467092090237851',
          '89860467092090237873',
          '89860467092090237874',
          '89860467092090237876',
          '89860467092090237884',
          '89860467092090237889',
          '89860467092090237891',
          '89860467092090237893',
          '89860467092090237895',
          '89860467092090237904',
          '89860467092090237907',
          '89860467092090237920',
          '89860467092090237931',
          '89860467092090237942',
          '89860467092090237944',
          '89860467092090237946',
          '89860467092090237951',
          '89860467092090237954',
          '89860467092090237957',
          '89860467092090237959',
          '89860467092090237960',
          '89860467092090237961',
          '89860467092090237962',
          '89860467092090237963',
          '89860467092090237964',
          '89860467092090237966',
          '89860467092090237968',
          '89860467092090237975',
          '89860467092090237981',
          '89860467092090237986',
          '89860467092090237988',
          '89860467092090237991',
          '89860467092090237992',
          '89860467092090237993',
          '89860467092090237999',
        ],
        name: '移动CTBOSS套餐卡',
        type: 'CUSTOM',
        isAllowAutoRecharge: true,
      },
      '96': {
        iccids: [
          '89860467092090035302',
          '89860467092090035473',
          '89860467092090035910',
          '89860467092090035988',
          '89860467092090036385',
          '89860467092090036464',
          '89860467092090036546',
          '89860467092090036554',
          '89860467092090036557',
          '89860467092090036600',
          '89860467092090036668',
          '89860467092090036672',
          '89860467092090036695',
          '89860467092090036845',
          '89860467092090036846',
          '89860467092090037140',
          '89860467092090037145',
          '89860467092090037519',
          '89860467092090037640',
          '89860467092090037642',
          '89860467092090037765',
          '89860467092090037786',
          '89860467092090037803',
          '89860467092090037806',
          '89860467092090037899',
          '89860467092090037949',
          '89860467092090037980',
          '89860467092090038465',
          '89860467092090038505',
          '89860467092090039014',
          '89860467092090039121',
          '89860467092090039430',
          '89860467092090039934',
          '89860467092090039977',
        ],
        name: '中国移动CTBOSS套餐卡',
        type: 'CUSTOM',
        isAllowAutoRecharge: true,
      },
    },
    variableRatePlan: {
      '96': {
        iccids: [
          '89860467092090035302',
          '89860467092090035473',
          '89860467092090035910',
          '89860467092090035988',
          '89860467092090036385',
          '89860467092090036464',
          '89860467092090036546',
          '89860467092090036554',
          '89860467092090036557',
          '89860467092090036600',
          '89860467092090036668',
          '89860467092090036672',
          '89860467092090036695',
          '89860467092090036845',
          '89860467092090036846',
          '89860467092090037140',
          '89860467092090037145',
          '89860467092090037519',
          '89860467092090037640',
          '89860467092090037642',
          '89860467092090037765',
          '89860467092090037786',
          '89860467092090037803',
          '89860467092090037806',
          '89860467092090037899',
          '89860467092090037949',
          '89860467092090037980',
          '89860467092090038465',
          '89860467092090038505',
          '89860467092090039014',
          '89860467092090039121',
          '89860467092090039430',
          '89860467092090039934',
          '89860467092090039977',
        ],
        name: '中国移动CTBOSS套餐卡',
        type: 'CUSTOM',
        isAllowAutoRecharge: true,
      },
    },
  });

  const list = useMemo(() => {
    const result: Record<string, any>[] = [];
    Object.keys(data).forEach((key: string) => {
      let childKeys = Object.keys(data[key]);
      let child = data[key];
      let size = 0;
      child.info = [];
      if (childKeys.length > 0) {
        for (let i = 0; i < childKeys.length; i++) {
          let secondChild = child[childKeys[i]] || {};
          console.log('secondChild', secondChild);
          secondChild.size = secondChild?.iccids?.length || 0;
          size += secondChild.size;
          child.info.push({ ...secondChild, key: childKeys[i] });
        }
        child.size = size;
      }
      result.push({ ...child, key: key, name: TypeName[key], desc: TypeDes[key] });
    });
    console.log('result', result);
    return result;
  }, [data]);
  const GotoFinal = (type: string, info: any) => {
    console.log('type', type);
    console.log('info', info);
    onClose();
    setType(type);
    setInfo(info);
    setFinalOpen(true);
  };
  return (
    <>
      <ModalForm
        form={form}
        formRef={formRef}
        modalProps={{ onCancel: onClose, destroyOnClose: true }}
        title="续费"
        width={1200}
        open={open}
        submitter={false}
        onFinish={async () => {
          onClose();
          // return true;
        }}
      >
        <Flex gap={10}>
          {list?.map((item: any) => (
            <ProCard
              key={item.key}
              title={item.name}
              hoverable={item.size}
              bordered
              headerBordered
              style={{
                backgroundColor: item.size ? 'transparent' : '#ddd',
                width: '25%',
              }}
            >
              <div className={styles.desc}>{item.desc}</div>
              <div className={styles.cardInfo}>
                {item?.size && <h3>共{item.size}张</h3>}
                <div>物联网卡{item.size ? '' : '不'}符合要求</div>
              </div>
              <Divider />
              {item?.info.map((it: any) => (
                <div key={it.key}>
                  {it?.size && (
                    <Flex align="center">
                      <div className={styles.ellipsis} title={`${it?.size}张${it.name}`}>
                        {it?.size}张{it?.name}
                      </div>

                      <Button
                        type="link"
                        style={{ flex: '0 0 60px' }}
                        onClick={() => {
                          GotoFinal(item.key, it);
                        }}
                      >
                        去续费
                      </Button>
                    </Flex>
                  )}
                </div>
              ))}
            </ProCard>
          ))}
        </Flex>
      </ModalForm>
      {finalOpen && (
        <FinalRenew open={finalOpen} info={info} type={type} onClose={() => setFinalOpen(false)} />
      )}
    </>
  );
};
export default SelectType;
