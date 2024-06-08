import type { TableColumnsType } from 'antd';
import { Alert, Button, Checkbox, Flex, Modal, Table } from 'antd';
import { FC, useEffect, useMemo, useState } from 'react';
interface autoProps {
  open: boolean;
  data?: any[];
  onClose: () => void;
}
type itemType = {
  id: string;
  title: string;
  count: number;
};
const columns: TableColumnsType<itemType> = [
  {
    title: '序号',
    dataIndex: 'index',
  },
  {
    title: '套餐类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '数量（张）',
    dataIndex: 'count',
    key: 'count',
  },
];
const AutoRenewalModal: FC<autoProps> = (props) => {
  const { open, onClose, data } = props;
  const [tableData, setTableData] = useState<any[]>([]);
  const [checked, setChecked] = useState(false);
  const Message = useMemo(() => {
    if (data && data.length > 0)
      return '当前为按照查询条件勾选模式执行自动续费。若想选择全部物联网卡执行自动续费，请查询后直接点击“自动续费”即可。';
    else return '当前为按照查询条件全选模式执行自动续费。';
  }, [data]);

  useEffect(() => {
    setTableData([
      { id: '1', type: '移动CTBOSS套餐卡', count: 222, index: 1 },
      { id: '2', type: '中国移动CTBOSS套餐卡', count: 435, index: 2 },
    ]);
  }, []);
  const totalCount = useMemo(() => {
    let total = tableData.reduce((pre, cur) => {
      return pre + cur.count;
    }, 0);
    return total;
  }, [tableData]);
  const onChange = (e: any) => {
    setChecked(e.target.checked);
  };
  const submitHandler = (isOpen?: boolean) => {
    console.log('isopen', isOpen);
    console.log('data', data);
    onClose();
  };
  return (
    <Modal
      title="自动续费设置"
      width={600}
      open={open}
      destroyOnClose
      onCancel={onClose}
      footer={
        <Flex justify="end" gap={8}>
          <Button
            type="primary"
            disabled={!totalCount}
            onClick={() => {
              submitHandler(true);
            }}
          >
            开启自动续费
          </Button>
          <Button
            disabled={!totalCount}
            onClick={() => {
              submitHandler();
            }}
          >
            关闭自动续费
          </Button>
        </Flex>
      }
    >
      <Alert type="info" message={Message} showIcon></Alert>
      <Table columns={columns} dataSource={tableData} pagination={false} rowKey="id" />
      <Alert message={`当前有效ICCID共${totalCount}个`}></Alert>

      <Flex align="center" style={{ marginTop: 16 }}>
        <Checkbox checked={checked} onChange={onChange}>
          我已确认
        </Checkbox>
        <Button type="link">物联网卡自动续费规则</Button>
      </Flex>
    </Modal>
  );
};
export default AutoRenewalModal;
