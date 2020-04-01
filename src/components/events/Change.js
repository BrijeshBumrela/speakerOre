import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Modal, Button } from 'antd';

const Change = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal
      title='Basic Drawer'
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout='vertical' name='userForm'>
        <Form.Item
          name='name'
          label='User Name'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='message'
          label='Message'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Change;
