import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Descriptions } from 'antd';
import EventContext from '../context/events/eventContext';

const Archives = () => {
  const eventContext = useContext(EventContext);
  const { archives } = eventContext;

  const columns = [
    { title: 'Event Name', dataIndex: 'name', key: 'name' },
    { title: 'Event Date', dataIndex: 'start_date', key: 'start_date' },
    { title: 'Event Location', dataIndex: 'city', key: 'city' },
    {
      title: 'Category',
      dataIndex: 'categories',
      key: 'categories',
      render: tags => (
        <span>
          {tags.map(tag => {
            return (
              <Tag color={'#d39e00'} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    }
  ];

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: record => (
          <p style={{ margin: 0, fontSize: '15px' }}>{record.about}</p>
        )
      }}
      dataSource={archives}
    />
  );
};

export default Archives;
