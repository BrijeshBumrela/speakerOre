import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import Login from './Login';
import './style.css';
import AuthContext from '../context/auth/authContext';
import Background from '../../static/nav_bg.jpg';
import logo from '../../static/logo.png';

const wimg = {
  backgroundImage: `url(${Background})`,
  minHeight: '180px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative'
};

const nav_style = {
  border: 'none',
  color: '#ffffff',
  background: 'transparent',
  zIndex: '100',
  transition: 'background-color 1s ease 0s',
  fontSize: '15px',
  paddingLeft: '80px',
  paddingRight: '100px'
};

const bg = {
  border: 'none',
  color: '#ffffff',
  background: 'transparent',
  zIndex: '100',
  transition: 'background-color 1s ease 0s',
  fontSize: '15px',
  paddingLeft: '80px',
  paddingRight: '100px'
};

const a_style = {
  color: '#0f74a8'
};

const { SubMenu } = Menu;

const Navbar = ({ title, isHome, heading }) => {
  const authContext = useContext(AuthContext);

  const {
    isAuthenticated,
    show_modal,
    auth_modal_visible,
    loadUser,
    logout
  } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const showModal = () => {
    show_modal();
  };

  const isSubscribed = true;

  const authLinks = (
    <div style={isHome ? {} : wimg}>
      <Menu mode='horizontal' style={isHome ? nav_style : bg}>
        <Menu.Item key='logo' style={{ textDecoration: 'none' }}>
          <Link to='/' style={a_style}>
            SpeakerOre
          </Link>
        </Menu.Item>

        <SubMenu
          title={
            <span className='submenu-title-wrapper'>
              <Link to={'/profile'} style={a_style}>
                Profile
              </Link>
            </span>
          }
          style={{ float: 'right' }}
        >
          <Menu.ItemGroup>
            <Menu.Item key='settings'>Settings</Menu.Item>
            <Menu.Item key='logout' onClick={logout}>
              Logout
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key='about' style={{ float: 'right' }}>
          <Link to='/about' style={a_style}>
            About
          </Link>
        </Menu.Item>
        <Menu.Item key='add_event' style={{ float: 'right' }}>
          <Link to='/add_event' style={a_style}>
            Add Event
          </Link>
        </Menu.Item>
        <Menu.Item key='subscribe' style={{ float: 'right' }}>
          <Link to='/subscribe' style={a_style}>
            Subscribe
          </Link>
        </Menu.Item>
        {isSubscribed && (
          <Menu.Item key='events' style={{ float: 'right' }}>
            <Link to='/events' style={a_style}>
              Events
            </Link>
          </Menu.Item>
        )}
      </Menu>
      {!isHome && (
        <div>
          <div className='text-block'>
            <h4>{heading}</h4>
          </div>
        </div>
      )}
    </div>
  );

  const guestLinks = (
    <div style={isHome ? {} : null}>
      <Menu mode='horizontal' style={isHome ? nav_style : bg}>
        <Menu.Item key='logo' style={{ textDecoration: 'none' }}>
          <Link to='/' style={a_style}>
            <strong style={{ color: '#0f74a8' }}>Speaker</strong>
            <span style={{ color: '#d39e00' }}>Ore</span>
          </Link>
        </Menu.Item>
        <Menu.SubMenu
          onTitleClick={showModal}
          title={'Login'}
          style={{ float: 'right' }}
        ></Menu.SubMenu>
        <Menu.Item key='about' style={{ float: 'right' }}>
          <Link to='/about' style={a_style}>
            About
          </Link>
        </Menu.Item>
        <Menu.Item key='events' style={{ float: 'right' }}>
          <Link to='/events' style={a_style}>
            Events
          </Link>
        </Menu.Item>
        <Menu.Item key='add_event' style={{ float: 'right' }}>
          <Link to='/add_event' style={a_style}>
            Add Event
          </Link>
        </Menu.Item>
        <Menu.Item key='subscribe' style={{ float: 'right' }}>
          <Link to='/subscribe' style={a_style}>
            Subscribe
          </Link>
        </Menu.Item>
      </Menu>
      {!isHome &&
        // <div>
        //   <div className='text-block'>
        //     <h4>{heading}</h4>
        //   </div>
        // </div>
        null}
    </div>
  );

  return (
    <Fragment>
      {isAuthenticated ? authLinks : guestLinks}
      {auth_modal_visible && <Login />}
    </Fragment>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  isHome: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'SpeakerOre',
  isHome: false,
  heading: ''
};

export default Navbar;
