import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

import AuthContext from '../context/auth/authContext';
import logo from '../../static/logo.png';

const Login = () => {
  const authContext = useContext(AuthContext);
  const {
    signIn_fb,
    signIn_google,
    close_modal,
    auth_modal_show
  } = authContext;

  const closeModal = () => {
    close_modal();
  };

  return (
    <div>
      <Modal
        visible={true}
        style={{ borderRadius: '25px', borderTopColor: '#d39e00' }}
        bodyStyle={{
          textAlign: 'center',
          borderTop: '#d39e00'
        }}
        closable
        maskClosable={true}
        onCancel={closeModal}
        destroyOnClose={true}
        footer={null}
        width='350px'
      >
        <h2>Hello again!</h2>
        <h2>Sign in to</h2>
        <div style={{ padding: '0 0', margin: '0 0' }}>
          <img
            src={logo}
            style={{ height: '170px', width: '300px' }}
            alt={
              <div>
                <strong style={{ color: '#0f74a8' }}>Speaker</strong>
                <span style={{ color: '#d39e00' }}>Ore</span>
              </div>
            }
          />
        </div>
        <br />
        <Button
          style={{
            width: '200px',
            borderColor: '#0f74a8',
            boxShadow: '0 8px 6px -6px black'
          }}
          icon={<GoogleOutlined />}
          type='ghost'
          onClick={signIn_google}
          shape='rounded'
          size='large'
          block='true'
        >
          Google
        </Button>
        <br />
        <br />
        <Button
          style={{
            width: '200px',
            boxShadow: '0 8px 6px -6px black'
          }}
          icon={<FacebookOutlined />}
          type='primary'
          onClick={signIn_fb}
          shape='omitted'
          size='large'
          block='true'
        >
          Facebook
        </Button>
      </Modal>
    </div>
  );
};

export default Login;
