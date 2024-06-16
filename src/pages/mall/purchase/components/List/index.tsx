import { useNavigate } from '@umijs/max';
import { List } from 'antd';
import React from 'react';
import styles from './index.less';
interface IProps {
  data: Record<string, any>[];
}
const ListView: React.FC<IProps> = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <List
      dataSource={data}
      rowKey="id"
      className={styles.listContainer}
      renderItem={(item) => {
        return (
          <div
            className={styles.listItem}
            key={item.id}
            onClick={() => {
              navigate(`/mall/choose?id=${item.id}`);
            }}
          >
            <h3>{item.name}</h3>
            <div>
              <span>￥{item.price}</span>起
            </div>
          </div>
        );
      }}
    ></List>
  );
};
export default ListView;
