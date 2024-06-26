import {FC} from 'react';
import {ProForm,ProFormRadio,ProFormItem,ProFormDigit,ProFormDependency,ProFormText} from '@ant-design/pro-components';
import {Button, Form, Input, Select,Radio,Flex,Card} from 'antd';
const InvoiceApply:FC = () => {
    return (<>
            <ProForm>
                <ProFormItem
                    label="发票类型"
                    name="invoiceType"
                    rules={[{ required: true, message: '请选择发票类型' }]}
                    initialValue={'normal'}
                >
                     <Radio.Group onChange={(v)=>{
                        console.log('v',v)
                     }}>
                        <Radio.Button value="normal">普通发票</Radio.Button>
                        <Radio.Button value='special'>增值税专用发票</Radio.Button>
                    </Radio.Group>
                </ProFormItem>
                <ProFormItem
                   
                    label="发票金额"
                    rules={[{ required: true, }]}
                >
                    <Flex>
                        <ProFormDigit  name="invoiceAmount" rules={[{ required: true, validator: (_, value) => { 
                            if(value && value > 0){
                                return Promise.resolve()
                            }else{
                                return Promise.reject(new Error('发票金额必须大于0'))
                            }
                        }}]}/>
                        <Button type='link' onClick={()=>{}}>选择开票金额</Button>
                    </Flex>
                </ProFormItem>
                <ProFormDependency name={['invoiceType']}>
                    {({ invoiceType }) => {
                        
                        return invoiceType==='normal'?(
                            <>
                                <ProFormText
                                    name="invoiceTitle"
                                    label={`发票抬头`}
                                    rules={[{ required: true, message: '请输入发票抬头' }]}
                                />
                                <ProFormText
                                    name="taxpayerIdentificationNum"
                                    label={`纳税人识别号`}
                                    rules={[{ required: true, message: '请输入' }]}
                                    placeholder={`企业纳税人识别号或者统一社会信用代码`}
                                />
                            </>
                        ):(
                            <>
                                <ProFormItem  label="增值资质">
                                    <Card title='增值资质信息核对'>
                                        增值资质信息核对
                                    </Card>
                                </ProFormItem> 
                            </>
                        );
                    }}
                </ProFormDependency>
                <ProFormText
                    name="invoiceContent"
                    label={`发票内容`}
                    rules={[{ required: true, message: '请输入' }]}
                    placeholder={`请输入发票内容`}
                />
                <ProFormText
                    name="invoiceContent"
                    label={`收件邮箱`}
                    rules={[{ required: true, message: '请输入' }]}
                    placeholder={`请输入收件邮箱`}
                />                
            </ProForm>   
           
    </>)
}
export default InvoiceApply;