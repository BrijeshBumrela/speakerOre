import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Table, Badge } from 'antd';
import AuthContext from '../context/auth/authContext';

const MyEvents = () => {
  const authContext = useContext(AuthContext);
  const { events } = authContext;

  const columns = [
    { title: 'Event Name', dataIndex: 'name', key: 'name' },
    { title: 'Event Date', dataIndex: 'start_date', key: 'start_date' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <span>
          {status === 'accepted' && <Badge status='success' text='Accepted' />}
          {status === 'declined' && <Badge status='error' text='Declined' />}
          {status === 'pending' && <Badge status='processing' text='Pending' />}
        </span>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a style={{ marginRight: 16, color: '#0f74a8' }}>Edit</a>
          <a>Delete</a>
        </span>
      )
    }
  ];

  return <Table columns={columns} dataSource={events} />;
};

export default MyEvents;
