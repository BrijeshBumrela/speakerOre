import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import FooterSection from '../layout/FooterSection';

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
      <FooterSection />
    </Fragment>
  );
};

export default About;
