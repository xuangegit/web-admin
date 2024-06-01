import { queryCity, queryProvince } from '@/pages/account/settings/service';
import {
  ModalForm,
  ProForm,
  ProFormDependency,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import React from 'react';
const AddOrEdit: React.FC = (props: any) => {
  return (
    <ModalForm
    width={600}
      open={props?.visible}
      title={props?.id ? '编辑收货地址' : '新增收货地址'}
      modalProps={{
        onCancel: () => {
          props.onClose();
        },
      }}
    >
      <ProFormText
        width="md"
        name="name"
        label="收货人"
        rules={[
          {
            required: true,
            message: '请输入收货人!',
          },
        ]}
      />

      <ProForm.Group title="所在省市" size={8}>
        <ProFormSelect
          rules={[
            {
              required: true,
              message: '请输入您的所在省!',
            },
          ]}
          width="sm"
          fieldProps={{
            labelInValue: true,
          }}
          name="province"
          request={async () => {
            return queryProvince().then(({ data }) => {
              return data.map((item) => {
                return {
                  label: item.name,
                  value: item.id,
                };
              });
            });
          }}
        />
        <ProFormDependency name={['province']}>
          {({ province }) => {
            return (
              <ProFormSelect
                params={{
                  key: province?.value,
                }}
                name="city"
                width="sm"
                rules={[
                  {
                    required: true,
                    message: '请输入您的所在城市!',
                  },
                ]}
                disabled={!province}
                request={async () => {
                  if (!province?.key) {
                    return [];
                  }
                  return queryCity(province.key || '').then(({ data }) => {
                    return data.map((item) => {
                      return {
                        label: item.name,
                        value: item.id,
                      };
                    });
                  });
                }}
              />
            );
          }}
        </ProFormDependency>
      </ProForm.Group>
      <ProFormText
        width="md"
        name="address"
        label="街道地址"
        rules={[
          {
            required: true,
            message: '请输入您的街道地址!',
          },
        ]}
      />
      <ProFormText
        name="phone"
        label="联系电话"
        rules={[
          {
            required: true,
            message: '请输入您的联系电话!',
          },
          {
            pattern: /^1[3456789]\d{9}$/,
          },
        ]}
      />

      <ProFormTextArea name="mark" label="备注" placeholder="备注" />
    </ModalForm>
  );
};
export default AddOrEdit;
