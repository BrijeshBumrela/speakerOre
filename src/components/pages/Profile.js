import React, { Fragment, useContext } from 'react';
import Navbar from '../layout/Navbar';
import { PageHeader, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import FooterSection from '../layout/FooterSection';
import AuthContext from '../context/auth/authContext';

const Profile = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const { photoURL, displayName, email, phoneNumber } = user;

  return (
    <Fragment>
      <Navbar heading={'Profile'} />
      <Breadcrumb style={{ margin: '16px 0', padding: '10px 50px' }}>
        <Breadcrumb.Item>
          <a href='/'>
            <HomeOutlined />
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader
        title={displayName}
        className='site-page-header'
        subTitle={email}
        avatar={{ src: photoURL }}
      ></PageHeader>
      <FooterSection />
    </Fragment>
  );
};

export default Profile;
