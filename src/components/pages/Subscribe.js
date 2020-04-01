import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { Breadcrumb, Card, Row, Col, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import FooterSection from '../layout/FooterSection';
import './style.css';

const About = () => {
  return (
    <Fragment>
      <Navbar heading={'Subscribe'} />
      <Breadcrumb style={{ margin: '16px 0', padding: '10px 100px' }}>
        <Breadcrumb.Item>
          <a href='/'>
            <HomeOutlined />
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Subscribe</Breadcrumb.Item>
      </Breadcrumb>

      <div className='site-card-wrapper'>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              bodyStyle={{ textAlign: 'center', height: '200px' }}
              title='Monthly'
              bordered={false}
              extra={<Button type='primary'>GET IT</Button>}
            >
              Content
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bodyStyle={{ textAlign: 'center', height: '200px' }}
              title='Quaterly'
              bordered={false}
              extra={<Button type='primary'>GET IT</Button>}
            >
              Content
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bodyStyle={{ textAlign: 'center', height: '200px' }}
              title='Yearly'
              bordered={false}
              extra={<Button type='primary'>GET IT</Button>}
            >
              Content
            </Card>
          </Col>
        </Row>
      </div>

      <FooterSection />
    </Fragment>
  );
};

export default About;
