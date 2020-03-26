import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import Event_details from './event_details';
import Navbar from '../layout/Navbar';
import Confirmation from './confirm';
import Event_basic_details from './event_basic_details';
import { Steps, message, Button, Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import FooterSection from '../layout/FooterSection';
import moment from 'moment';

const { Step } = Steps;

const steps = [
  {
    title: 'Event Preliminary Details',
    content: 'First-content'
  },
  {
    title: 'Event Details',
    content: 'Second-content'
  },
  {
    title: 'Confirmation',
    content: 'Last-content'
  }
];

export class form extends Component {
  state = {
    step: 0,
    eventName: '',
    start_date: '',
    start_date_moment: '',
    end_date: '',
    end_date_moment: '',
    // location: [],
    // address: '',
    street: '',
    city: '',
    state: '',
    country: '',
    postalcode: '',
    about: '',
    tags: '',
    email: '',
    phone: '',
    website: ''
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  handleChangeDate = input => (dates, dateString) => {
    if (input === 'start_date') {
      this.setState({
        [input]: dateString
      });
      this.setState({
        start_date_moment: dates
      });
    } else {
      this.setState({
        [input]: dateString
      });
      this.setState({
        end_date_moment: dates
      });
    }
  };

  handleChangeLoc = input => loc => {
    this.setState({
      [input]: loc
    });
  };

  submit = values => {
    console.log('values: ', values);
    message.success('Processing complete!');
  };

  render() {
    const { step } = this.state;
    const {
      eventName,
      start_date,
      end_date,
      start_date_moment,
      end_date_moment,
      street,
      city,
      state,
      country,
      postalcode,
      about,
      tags,
      phone,
      website,
      email
    } = this.state;
    const values1 = {
      eventName,
      start_date,
      end_date,
      start_date_moment,
      end_date_moment,
      street,
      city,
      state,
      country,
      postalcode
    };
    const values2 = { about, tags, phone, website, email };
    const values3 = {
      eventName,
      start_date,
      end_date,
      street,
      city,
      state,
      country,
      postalcode,
      about,
      tags,
      phone,
      website,
      email
    };
    switch (step) {
      case 0:
        return (
          <Fragment>
            <Navbar heading={'Add Event'} />
            <Breadcrumb style={{ margin: '16px 0', padding: '10px 100px' }}>
              <Breadcrumb.Item>
                <a href='/'>
                  <HomeOutlined />
                </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Add Event</Breadcrumb.Item>
            </Breadcrumb>
            <div id='container' style={{ padding: '10px 200px' }}>
              <Steps current={step} style={{ margin: '16px 0' }}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <div className='steps-content'>
                <Event_basic_details
                  handleChange={this.handleChange}
                  handleChangeDate={this.handleChangeDate}
                  handleChangeLoc={this.handleChangeLoc}
                  values={values1}
                ></Event_basic_details>
              </div>
              <div className='steps-action'>
                {step < steps.length - 1 && (
                  <Button type='primary' onClick={this.nextStep}>
                    Next
                  </Button>
                )}
                {step === steps.length - 1 && (
                  <Button type='primary' onClick={this.submit}>
                    Done
                  </Button>
                )}
                {step > 0 && (
                  <Button style={{ margin: 8 }} onClick={this.prevStep}>
                    Previous
                  </Button>
                )}
              </div>
            </div>
            <FooterSection />
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
            <Navbar heading={'Add Event'} />
            <Breadcrumb style={{ margin: '16px 0', padding: '10px 100px' }}>
              <Breadcrumb.Item>
                <a href='/'>
                  <HomeOutlined />
                </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Add Event</Breadcrumb.Item>
            </Breadcrumb>
            <div id='container' style={{ padding: '10px 200px' }}>
              <Steps current={step} style={{ margin: '16px 0' }}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <div className='steps-content'>
                <Event_details
                  handleChange={this.handleChange}
                  handleChangeLoc={this.handleChangeLoc}
                  values={values2}
                />
              </div>
              <div className='steps-action'>
                {step < steps.length - 1 && (
                  <Button type='primary' onClick={this.nextStep}>
                    Next
                  </Button>
                )}
                {step === steps.length - 1 && (
                  <Button type='primary' onClick={this.submit}>
                    Done
                  </Button>
                )}
                {step > 0 && (
                  <Button style={{ margin: 8 }} onClick={this.prevStep}>
                    Previous
                  </Button>
                )}
              </div>
            </div>
            <FooterSection />
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <Navbar heading={'Add Event'} />
            <Breadcrumb style={{ margin: '16px 0', padding: '10px 100px' }}>
              <Breadcrumb.Item>
                <a href='/'>
                  <HomeOutlined />
                </a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Add Event</Breadcrumb.Item>
            </Breadcrumb>
            <div id='container' style={{ padding: '10px 200px' }}>
              <Steps current={step} style={{ margin: '16px 0' }}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <div className='steps-content'>
                {' '}
                <Confirmation
                  handleChange={this.handleChange}
                  values={values3}
                ></Confirmation>
              </div>
              <div className='steps-action'>
                {step < steps.length - 1 && (
                  <Button type='primary' onClick={this.nextStep}>
                    Next
                  </Button>
                )}
                {step === steps.length - 1 && (
                  <Button type='primary' onClick={this.submit}>
                    Done
                  </Button>
                )}
                {step > 0 && (
                  <Button style={{ margin: 8 }} onClick={this.prevStep}>
                    Previous
                  </Button>
                )}
              </div>
            </div>
            <FooterSection />
          </Fragment>
        );
    }
  }
}

export default form;
