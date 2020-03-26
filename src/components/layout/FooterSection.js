import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './style.css';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  MailOutlined
} from '@ant-design/icons';

import { Layout } from 'antd';

const { Footer } = Layout;

const FooterSection = () => {
  return (
    <Footer className='footer-distributed'>
      <div className='footer-left'>
        <h3>
          © Speaker<span>Ore</span>
        </h3>
        <p className='footer-links'>
          <a href='/'>Home</a>
          <br />
          <a href='/about'>About Us</a>
          <br />
          <a href='/add_event'>Add Event</a>
          <br />
          <a href='/events'>Events</a>
          <br />
          <a href='/subscribe'>Subscribe</a>
          <br />
          <a href='/help'>Help</a>
        </p>
      </div>

      <div className='footer-center'>
        <div>
          <MailOutlined className='footer-icons' />
          &nbsp;
          <p>
            <a href='mailto:support@speakerore.com'>support@speakerore.com</a>
          </p>
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Link to='/' className='footer-center'>
            Download the app
          </Link>
        </div>
      </div>

      <div className='footer-right'>
        <p className='footer-company-about'>
          <span>About the company</span>
          Hey wassup.
        </p>
        <div className='footer-icons'>
          <a href='#'>
            <FacebookOutlined />
          </a>
          <a href='#'>
            <TwitterOutlined />
          </a>
          <a href='#'>
            <InstagramOutlined />
          </a>
          <a href='#'>
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </Footer>
  );
};

export default FooterSection;
