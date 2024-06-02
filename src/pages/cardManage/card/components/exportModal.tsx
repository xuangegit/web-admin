import { ModalForm, ProFormDatePicker } from '@ant-design/pro-components';
import { Button } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
const ExportModal: React.FC = () => {
  return (
    <ModalForm
      title="选择导出月份"
      width={420}
      trigger={<div>导出历史数据</div>}
      onFinish={async (values) => {
        console.log(values);
      }}
    >
      <ProFormDatePicker
        name="date"
        fieldProps={{
          format:'YYYY-MM',
          picker:"month",
          disabledDate: (current) => {
            return current && current >dayjs().endOf('day');
          },
        }}
      />
    </ModalForm>
  );
};
export default ExportModal;
