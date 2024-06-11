import { Avatar, Card, List } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import type { DataItem } from '../data.d';

const TopSearch = ({
  loading,
  searchData,
  dropdownGroup,
}: {
  loading: boolean;
  dropdownGroup?: React.ReactNode;
  searchData: DataItem[];
}) => {
  console.log('searchData', searchData);
  return (
    <Card
      loading={loading}
      bordered={false}
      title="公告"
      extra={dropdownGroup}
      style={{
        height: '100%',
      }}
    >
      <List
        dataSource={searchData.slice(0, 6)}
        renderItem={(item) => (
          <List.Item key={item.index}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'}
                />
              }
              title={<a href="https://ant.design">{item.keyword}</a>}
              // description={Date.now()}
            />
            <div>{dayjs().fromNow()}</div>
          </List.Item>
        )}
      />
    </Card>
  );
};
export default TopSearch;
