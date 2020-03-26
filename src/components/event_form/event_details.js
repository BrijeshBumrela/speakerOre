import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Select, AutoComplete } from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 15
    },
    sm: {
      span: 10
    }
  }
};

export class event_details extends Component {
  prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value='91'>+91</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  );
  children = [];

  render() {
    const { about, tags, phone, website, email } = this.props;
    const { handleChange, handleChangeLoc } = this.props;
    return (
      <Form {...formItemLayout} name='contact_detail'>
        <Form.Item name='tags' label='Tags'>
          <Select
            mode='tags'
            style={{ width: '100%' }}
            tokenSeparators={[',']}
            size='small'
            defaultValue={tags}
            onChange={handleChangeLoc('tags')}
          >
            {this.children}
          </Select>
        </Form.Item>
        <Form.Item
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            {
              required: true,
              message: 'Please input your E-mail!'
            }
          ]}
        >
          <Input onChange={handleChange('email')} defaultValue={email} />
        </Form.Item>
        <Form.Item
          name='phone'
          label='Phone Number'
          rules={[
            {
              required: true,
              message: 'Please input your phone number!'
            }
          ]}
        >
          <Input
            addonBefore={this.prefixSelector}
            style={{
              width: '100%'
            }}
            onChange={handleChange('phone')}
            defaultValue={phone}
          />
        </Form.Item>
        <Form.Item
          name='website'
          label='Website'
          rules={[
            {
              required: true,
              message: 'Please input website!'
            }
          ]}
        >
          <AutoComplete placeholder='website'>
            <Input onChange={handleChange('website')} defaultValue={website} />
          </AutoComplete>
        </Form.Item>
        <Form.Item name='about' label='About'>
          <Input.TextArea
            onChange={handleChange('about')}
            defaultValue={about}
          />
        </Form.Item>
      </Form>
    );
  }
}

export default event_details;
