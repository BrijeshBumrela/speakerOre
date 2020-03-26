import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, DatePicker, Input } from 'antd';

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

export class event_basic_details extends Component {
  render() {
    const {
      eventName,
      start_date_moment,
      end_date_moment,
      street,
      city,
      state,
      country,
      postalcode
    } = this.props.values;
    const { handleChange, handleChangeDate, handleChangeLoc } = this.props;
    return (
      <Form name='basic' {...formItemLayout}>
        <Form.Item
          name='eventName'
          label={'Event Name'}
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input
            onChange={handleChange('eventName')}
            defaultValue={eventName}
          />
        </Form.Item>

        <Form.Item
          name='start_date'
          label='Start Date'
          rules={[
            {
              required: true
            }
          ]}
        >
          <DatePicker
            style={{ width: '345px' }}
            size='small'
            onChange={handleChangeDate('start_date')}
            defaultValue={start_date_moment}
          />
        </Form.Item>
        <Form.Item name='end_date' label='End Date'>
          <DatePicker
            style={{ width: '345px' }}
            size='small'
            onChange={handleChangeDate('end_date')}
            defaultValue={end_date_moment}
          />
        </Form.Item>
        <Form.Item
          name='street'
          label={'Street'}
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input onChange={handleChange('street')} defaultValue={street} />
        </Form.Item>
        <Form.Item
          name='city'
          label={'City'}
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input onChange={handleChange('city')} defaultValue={city} />
        </Form.Item>
        <Form.Item
          name='state'
          label={'State'}
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input onChange={handleChange('state')} defaultValue={state} />
        </Form.Item>
        <Form.Item
          name='country'
          label={'Country'}
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input onChange={handleChange('country')} defaultValue={country} />
        </Form.Item>
        <Form.Item
          name='postalcode'
          label={'Postalcode'}
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input
            onChange={handleChange('postalcode')}
            defaultValue={postalcode}
          />
        </Form.Item>
      </Form>
    );
  }
}

export default event_basic_details;
