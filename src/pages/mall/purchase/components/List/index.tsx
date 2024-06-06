import React from 'react';
import {List,Flex } from 'antd';
import styles from './index.less';
interface IProps{
    data:Record<string,any>[]
}
const ListView :React.FC<IProps> = (props)=>{
    const {data} = props;
    return (
        <List dataSource={data} rowKey="id" className={styles.listContainer} renderItem={(item)=>{
            return (
                <div className={styles.listItem} key={item.id}>
                    <Flex justify='space-between' align="center"><h3>{item.name}</h3><div ><span>￥{item.price}</span>起</div></Flex>
                </div>)
        }}>

        </List>
    )
}  
export default ListView;