import React, { useContext, Fragment } from 'react';
import EventContext from '../context/events/eventContext';
import Navbar from '../layout/Navbar';
import { Breadcrumb, PageHeader, Card, Button, Tag, Layout, Row } from 'antd';
import { HomeOutlined, HeartTwoTone } from '@ant-design/icons';
import Paragraph from 'antd/lib/skeleton/Paragraph';

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
    country,
    start_date,
    end_date,
    categories,
    tags,
    description,
    phone,
    email,
    website
  } = events[0];

  return (
    <Fragment>
      <Navbar heading={'Event Detail ' + event_id} />
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
      <Content>
        <PageHeader
          title={name}
          className='site-page-header'
          extra={[
            <Button key='1'>
              {
                <span>
                  <HeartTwoTone /> Bookmark
                </span>
              }
            </Button>
          ]}
        >
          {' '}
          <Content>
            <Paragraph>
              <Row>{about}</Row>
            </Paragraph>

            <Paragraph>{description}</Paragraph>
          </Content>
        </PageHeader>
      </Content>
    </Fragment>
  );
};

export default Event;
