import {
  ModalForm,
  ProFormDigit,
  ProFormItem,
  ProFormSelect,
  ProFormSwitch,
} from '@ant-design/pro-components';
import { Button, Divider, Flex, Space, Table } from 'antd';
import { useRef, useState } from 'react';

const columns = [
  { title: '序号', dataIndex: 'index' },
  { title: '卡号', dataIndex: 'iccid' },
  { title: '电话号码', dataIndex: 'phone' },
];
const OffNetSetting = () => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const formRef = useRef();
  const [data, setData] = useState([{ index: 1, id: 1, iccid: '231312', phone: 18626789876 }]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <ModalForm
      title="断网设置"
      width={620}
      formRef={formRef}
      layout="horizontal"
      //   labelCol={{span:4}}
      trigger={<Button type="primary">断网设置</Button>}
      modalProps={{
        destroyOnClose: true,
        onCancel: () => console.log('run'),
      }}
    >
      <ProFormSwitch
        tooltip="由于运营商断网/停卡不及时带来的超额流量费用将由您自己来承担"
        label="断网规则"
        name="flag"
        fieldProps={{
          onChange: (checked) => {
            console.log('e', checked);
            setChecked(checked);
            // if (checked) {
            //     formRef.current?.setFieldsValue({
            //     count: 0,
            //     unit: 'MB',
            //   });
            // }
          },
        }}
      />

      <ProFormItem
        dependencies={['flag']}
        extra="注意：由于运营商断网/停卡不及时带来的超额流量费用将由您自己来承担"
        style={{ marginBottom: 0 }}
        noStyle={!checked}
      >
        {({ getFieldValue }) => {
          let flag = getFieldValue('flag');
          return flag ? (
            <Flex gap={5} align="center">
              <div style={{ marginBottom: 20 }}>单卡使用量超过</div>
              <ProFormDigit name="count" width={100} />
              <ProFormSelect
                name="unit"
                width={100}
                valueEnum={{ MB: 'MB', GB: 'GB' }}
                style={{ width: 100, marginBottom: 0 }}
              />
              <div style={{ marginBottom: 20 }}>进行断网</div>
            </Flex>
          ) : null;
        }}
      </ProFormItem>
      <Divider />
      <Button
        type="link"
        onClick={() => setVisible((p) => !p)}
      >{`${visible ? '收起' : '显示'}达量断网白名单列表`}</Button>
      {visible && (
        <div>
          <Flex justify="end">
            <Space>
              <Button>删除</Button> <Button type="primary">添加</Button>
            </Space>
          </Flex>
          <Table
            rowKey={'id'}
            columns={columns}
            dataSource={data}
            rowSelection={rowSelection}
          ></Table>
        </div>
      )}
    </ModalForm>
  );
};
export default OffNetSetting;
