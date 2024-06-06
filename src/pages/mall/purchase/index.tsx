import { InfoCircleOutlined } from '@ant-design/icons';
import { PageContainer, ProFormCheckbox } from '@ant-design/pro-components';
import { Card, Col, Form, Row, Select, Space, Tooltip,Checkbox} from 'antd';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import List from './components/List';
import { categoryOptions } from './mock';
import { priceData } from './mock';
const spanConfig = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 8,
    xl: 8,
    xxl: 8,
  };

const FormItem = Form.Item;
const owners = [
  {
    id: 'wzj',
    name: '我自己',
  },
  {
    id: 'wjh',
    name: '吴家豪',
  },
  {
    id: 'zxx',
    name: '周星星',
  },
  {
    id: 'zly',
    name: '赵丽颖',
  },
  {
    id: 'ym',
    name: '姚明',
  },
];
const cardTypeOptions = [
  {
    value: 'normal',
    label: '普通物联网卡',
  },
  {
    value: 'nb-iot',
    label: 'NB-IoT卡',
  },
];
const packageTypeOptions = [
  {
    value: 'month',
    label: '按月套餐',
  },
  {
    value: 'custom',
    label: '自定义套餐',
  },
];
export default () => {
  const [form] = Form.useForm();
  const reload = () => {};
  const formItemLayout = {
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 12 },
    },
  };
  return (
    <PageContainer>
      <Card bordered={false}>
        <Form
          layout="inline"
          form={form}
          initialValues={{
            owner: ['wjh', 'zxx'],
          }}
          onFinish={(values) => {
            console.log('values', values);
          }}
          onValuesChange={(values) => {
            console.log('values--change', values);
          }}
        >
          <StandardFormRow title="卡类型" block style={{ paddingBottom: 10 }}>
            <FormItem name="cardType">
              <TagSelect expandable={false}>
                {cardTypeOptions.map((category) => (
                  <TagSelect.Option value={category.value!} key={category.value}>
                    {category.label}
                  </TagSelect.Option>
                ))}
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="套餐类型" block style={{ paddingBottom: 10 }}>
            <FormItem name="packageType">
              <TagSelect expandable={false}>
                {packageTypeOptions.map((category) => (
                  <TagSelect.Option value={category.value!} key={category.value}>
                    {category.label}
                  </TagSelect.Option>
                ))}
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="所属类目" block style={{ paddingBottom: 10 }}>
            <FormItem name="category">
              <TagSelect expandable>
                {categoryOptions.map((category) => (
                  <TagSelect.Option value={category.value!} key={category.value}>
                    {category.label}
                  </TagSelect.Option>
                ))}
              </TagSelect>
            </FormItem>
          </StandardFormRow>
          <StandardFormRow title="网络" block last>
            <FormItem name="network">
              <Checkbox.Group >
                <Space>
                  <Checkbox value={1}>
                    公网卡
                  </Checkbox>
                  <Checkbox value={2}>
                    公网白名单 &nbsp;
                    <Tooltip title="所有可以做公网白名单的套餐，包括公网卡和专网卡">
                        <InfoCircleOutlined />
                    </Tooltip>
                  </Checkbox>
                  <Checkbox value={3}>
                    专网卡(VPDN卡)
                  </Checkbox>
                </Space>
              </Checkbox.Group>
            </FormItem>
            {/* <a className={styles.selfTrigger} onClick={setOwner}>
              只看自己的
            </a> */}
          </StandardFormRow>
          {/* <StandardFormRow title="其它选项" grid last>
            <Row gutter={16}>
              <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                <FormItem {...formItemLayout} label="活跃用户" name="user">
                  <Select
                    placeholder="不限"
                    style={{ maxWidth: 200, width: '100%' }}
                    options={[
                      {
                        label: '李三',
                        value: 'lisa',
                      },
                    ]}
                  />
                </FormItem>
              </Col>
              <Col xl={8} lg={10} md={12} sm={24} xs={24}>
                <FormItem {...formItemLayout} label="好评度" name="rate">
                  <Select
                    placeholder="不限"
                    style={{ maxWidth: 200, width: '100%' }}
                    options={[
                      {
                        label: '优秀',
                        value: 'good',
                      },
                    ]}
                  />
                </FormItem>
              </Col>
            </Row>
          </StandardFormRow> */}
        </Form>
      </Card>
      <Row gutter={[12,12]} style={{marginTop: 10}}>
        <Col span={8} {...spanConfig}>
        <Card 
        title={
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src='/icons/zhongguoyidong.svg' style={{marginRight: 10}} width='20px' /> 中国移动
            </div>
        } 
        bordered={false}>
            <List data={priceData.cmcc}></List>

        </Card>
        </Col>
        <Col span={8} {...spanConfig}>
        <Card 
            title={
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src='/icons/liantong.svg' style={{marginRight: 10}} width='20px' /> 中国联通
                </div>
            } 
            bordered={false}
        >
            <List data={priceData.unicom}></List>

        </Card>
        </Col>
        <Col span={8} {...spanConfig}>
        <Card 
            bordered={false}
            title={
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src='/icons/dianxin.svg' style={{marginRight: 10}} width='20px' /> 中国电信
                </div>
            } 
        >
             <List data={priceData.chinanet}></List>
        </Card>
        </Col>
    </Row>
    </PageContainer>
  );
};
