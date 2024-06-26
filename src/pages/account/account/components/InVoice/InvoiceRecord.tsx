import React from 'react';
import {ProTable} from '@ant-design/pro-components';
const InvoiceRecord: React.FC = () => {
  return (
    <div>
      <ProTable
        ghost
        headerTitle="发票记录"
        rowKey="key"
        search={false}
        dateFormatter="string"
        options={false}
        columns={[
          {
            title: '发票号',
            dataIndex: 'voiceNum',
            key: 'voiceNum',
            hideInSearch:true
          },
          {
            title: '申请时间',
            dataIndex: 'applyTime',
            valueType:'dateTime',
            key: 'applyTime',
            hideInSearch:true
          },
          {
            title: '发票金额',
            dataIndex: 'voiceAmount',
            key: 'voiceAmount',
            valueType:'money',
            hideInSearch:true
          },
          {
            title: '发票类型',
            dataIndex: 'voiceType',
            valueType: 'select',
            valueEnum: {
              1: {
                text: '增值税专用发票',
                status: 'success',
              },
              2: {
                text: '增值税普通发票',
                status: 'error',
              },
              3: {
                text: '电子发票',
                status: 'warning',
              },
              4: {
                text: '卷式发票',
               }
            },

            key: 'voiceType',
            hideInSearch:true
          },
          {
            title: '发票信息',
            dataIndex: 'voiceInfo',
            key: 'voiceInfo',
            hideInSearch:true
          },
          {
            title: '状态',
            dataIndex: 'status',
            valueType: 'select',
            valueEnum:{
                1: {
                    text: '待审核',
                    status: 'processing',
                },
                2: {
                    text: '审核不通过',
                    status: 'error',
                },
                3: {
                    text: '审核通过',
                    status: 'success',
                },
                4: {
                    text: 'success',
                }
            },
            key: 'status',
            hideInSearch:true,
          },
          {
            title: '备注',
            dataIndex: 'remark',
            key: 'remark',
            hideInSearch:true,
          },
        ]
        }
        />
      </div>  
    )
}
export default InvoiceRecord