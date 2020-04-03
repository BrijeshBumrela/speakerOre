import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Form, DatePicker, Input, Button } from 'antd';

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

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 10
  }
};

export class event_basic_details extends Component {
  onFinish = values => {
    console.log('Received values of form: ', values);
    // this.props.submittedValues(values);
    this.props.nextStep();
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

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
    const { handleChange, handleChangeDate } = this.props;
    return (
      <Form
        {...formItemLayout}
        name='basic'
        size={'middle'}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        scrollToFirstError
        initialValues={{
          eventName: eventName,
          start_date_moment: start_date_moment,
          end_date_moment: end_date_moment,
          street: street,
          city: city,
          state: state,
          country: country,
          postalcode: postalcode
        }}
      >
        <Form.Item
          name='eventName'
          label={'Event Name'}
          rules={[
            {
              required: true,
              message: 'Please fill in event name'
            }
          ]}
        >
          <Input
            onChange={handleChange('eventName')}
            defaultValue={eventName}
            placeholder='Event Name'
          />
        </Form.Item>

        <Form.Item
          name='start_date_moment'
          label='Start Date'
          rules={[
            {
              required: true,
              message: 'Please fill in event date'
            }
          ]}
        >
          <DatePicker
            style={{ width: '345px' }}
            size='small'
            onChange={handleChangeDate('start_date')}
            defaultValue={start_date_moment}
            placeholder='Start date'
          />
        </Form.Item>
        <Form.Item name='end_date_moment' label='End Date'>
          <DatePicker
            style={{ width: '345px' }}
            size='small'
            onChange={handleChangeDate('end_date')}
            defaultValue={end_date_moment}
            placeholder='End date'
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
          <Input
            onChange={handleChange('street')}
            defaultValue={street}
            placeholder='street'
          />
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
          <Input
            onChange={handleChange('city')}
            defaultValue={city}
            placeholder='City'
          />
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
          <Input
            onChange={handleChange('state')}
            defaultValue={state}
            placeholder='State'
          />
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
          <Input
            onChange={handleChange('country')}
            defaultValue={country}
            placeholder='Country'
          />
        </Form.Item>
        <Form.Item
          name='postalcode'
          label={'Postal code'}
          rules={[
            {
              required: true,
              message: 'Postal code is required'
            }
          ]}
        >
          <Input
            onChange={handleChange('postalcode')}
            defaultValue={postalcode}
            placeholder='Postal code'
          />
        </Form.Item>
        <div className='steps-action'>
          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Next
            </Button>
          </Form.Item>
        </div>
      </Form>
    );
  }
}

export default event_basic_details;
