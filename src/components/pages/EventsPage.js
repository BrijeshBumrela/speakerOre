import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Events from '../events/Events';
import EventSearch from '../events/EventSearch';
import EventFilter from '../events/EventFilter';
import AuthContext from '../context/auth/authContext';
import Navbar from '../layout/Navbar';
import FooterSection from '../layout/FooterSection';
import 'antd/dist/antd.css';
import './style.css';
import { Layout, Breadcrumb, Button, Radio } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { Content } = Layout;

const EventsPage = () => {
  const authContext = useContext(AuthContext);
  const { isSubscribed, role } = authContext;

  const [option, setOption] = useState('all');

  const onChange = e => {
    setOption(e.target.value);
    console.log(e.target.value);
  };

  const subscribedUser = (
    <Fragment>
      <Navbar heading={'Events'} />
      <Breadcrumb style={{ margin: '16px 0', padding: '10px 100px' }}>
        <Breadcrumb.Item>
          <a href='/'>
            <HomeOutlined />
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Events</Breadcrumb.Item>
      </Breadcrumb>
      <Content className='site-layout' style={{ padding: '0 100px' }}>
        <Layout
          className='site-layout-background'
          style={{ padding: '35px 48px' }}
        >
          <EventFilter />
          <Content
            style={{
              padding: '0 5px 0 50px',
              minHeight: 780,
              float: 'right'
            }}
          >
            <Radio.Group defaultValue='all' onChange={onChange}>
              <Radio.Button value='all'>All</Radio.Button>
              <Radio.Button value='bookmarked'>Bookmarked</Radio.Button>
              <Radio.Button value='my_events'>My Events</Radio.Button>
              {role === 'RDTEAM' && (
                <Radio.Button value='archived'>Archived</Radio.Button>
              )}
            </Radio.Group>
            <br />
            <br />
            <EventSearch />
            <br />
            <br />
            {option === 'all' && <Events />}
            {option === 'bookmarked' && <p>{'Bookmarked'}</p>}
            {option === 'my_events' && <p>{'My Events'}</p>}
          </Content>
        </Layout>
      </Content>
      <FooterSection />
    </Fragment>
  );

  const user = (
    <Fragment>
      <Navbar heading={'Events'} />
      <Breadcrumb style={{ margin: '16px 0', padding: '10px 100px' }}>
        <Breadcrumb.Item>
          <a href='/'>
            <HomeOutlined />
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Events</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className='site-layout'
        style={{
          padding: '0 100px',
          filter: 'blur(8px)',
          WebkitFilter: 'blur(8px)'
        }}
      >
        <Layout
          className='site-layout-background'
          style={{ padding: '35px 48px' }}
        >
          <EventFilter />
          <Content
            style={{
              padding: '0 5px 0 50px',
              minHeight: 780,
              float: 'right'
            }}
          >
            <EventSearch />
            <br />
            <br />
            <Events />
          </Content>
        </Layout>
      </Content>
      <div className='bg-text'>
        <Button size='large' href='/subscribe'>
          {'Subscribe to check out events'}
        </Button>
        <br />
        <br />
        <a href='/'>Already Subscribed? Log in here</a>
      </div>
      <FooterSection />
    </Fragment>
  );

  return <Fragment>{isSubscribed ? subscribedUser : user}</Fragment>;
};

export default EventsPage;
