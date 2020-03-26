import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

import AuthContext from '../context/auth/authContext';

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
        style={{ textAlign: 'center' }}
        closable
        maskClosable={true}
        onCancel={closeModal}
        destroyOnClose={true}
        footer={null}
      >
        <h1>Welcome back</h1>
        <div>Sign in to know more..</div>
        <br />
        <Button
          style={{ width: '200px' }}
          icon={<GoogleOutlined />}
          type='ghost'
          onClick={signIn_google}
        >
          Sign in with Google
        </Button>
        <br />
        <br />
        <Button
          style={{ width: '200px' }}
          icon={<FacebookOutlined />}
          type='ghost'
          onClick={signIn_fb}
        >
          Sign in with Facebook
        </Button>
      </Modal>
    </div>
  );
};

export default Login;
