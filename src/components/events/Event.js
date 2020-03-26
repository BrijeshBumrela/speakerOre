import React, { useContext, Fragment } from 'react';
import EventContext from '../context/events/eventContext';
import Navbar from '../layout/Navbar';
import FooterSection from '../layout/FooterSection';

import {
  Breadcrumb,
  PageHeader,
  Card,
  Button,
  Tag,
  Layout,
  Row,
  Descriptions
} from 'antd';
import { HomeOutlined, HeartTwoTone } from '@ant-design/icons';
import Paragraph from 'antd/lib/skeleton/Paragraph';

import './style.css';
import DescriptionsItem from 'antd/lib/descriptions/Item';
import Meta from 'antd/lib/card/Meta';

const { Content } = Layout;

const Event = ({ match }) => {
  const eventContext = useContext(EventContext);

  const {
    params: { event_id }
  } = match;

  const { events } = eventContext;

  const {
    id,
    name,
    about,
    street,
    city,
    state,
    country,
    postalcode,
    start_date,
    end_date,
    categories,
    tags,
    description,
    phone,
    email,
    website
  } = events[0];

  const loc =
    street + ', ' + city + ', ' + state + ', ' + country + '\n' + postalcode;

  return (
    <Fragment>
      <Navbar heading={'Event - ' + name} />
      <Breadcrumb style={{ margin: '16px 0', padding: '10px 100px' }}>
        <Breadcrumb.Item>
          <a href='/'>
            <HomeOutlined />
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href='/events'>Events</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{name}</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className='site-layout'
        style={{
          padding: '0 100px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Card
          className='site-layout-background'
          style={{
            padding: '15px',
            flex: '2 1 auto',
            margin: '0 5px 0 0'
          }}
        >
          <h1>{name}</h1>
          <Meta title='Start Date' description={start_date}></Meta>
          <br />
          <Meta title='End Date' description={end_date}></Meta>
          <br />
          <Meta title='About' description={description}></Meta>
          <br />
          <Meta title='Location' description={loc}></Meta>
          <br />
          <div>
            {tags.map((tag, index) => (
              <Tag color='#0f74a8' key={index}>
                {tag.toUpperCase()}
              </Tag>
            ))}
          </div>
        </Card>
        <Card
          className='site-layout-background'
          title={'Contact'}
          style={{
            padding: '5px',
            flex: '1 1 auto',
            margin: '0px 0 0 10px'
          }}
        >
          <Meta title='Website' description={website} />
          <br />
          <Meta title='Email' description={email} />
          <br />
          <Meta title='Phone' description={phone} />
        </Card>
      </Content>
      <FooterSection />
    </Fragment>
  );
};

export default Event;
