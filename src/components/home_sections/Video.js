import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import media from '../../static/helping.mp4';
import logo from '../../static/logo.png';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import './style.css';

// const home = {
//   background: 'none',
//   height: '100%'
// };

// const home_bg_video = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   WebkitTransform: 'translateX(-50%) translateY(-50%)',
//   transform: 'translateX(-50%) translateY(-50%)',
//   minWidth: '100%',
//   minHeight: '100%',
//   width: 'auto',
//   height: 'auto',
//   // zIndex: '-1',
//   // background: 'url('../../static/logo.png') no-repeat',
//   backgroundSize: 'cover'
// };

const button_style = {
  fontFamily: 'sans-serif, Raleway',
  color: '#d3d3d3',
  WebkitTransition: 'all .4s',
  transition: 'all .4s'
};

const Video = () => {
  return (
    <section className='home'>
      <ReactPlayer
        playsinline
        url={media}
        poster={logo}
        playing
        loop={true}
        muted
        className='home_bg_video'
      />
      <div className='home_overlay'>
        <div className='home_content'>
          <div className='home_content_inner'>
            <div className='home_heading1'>
              <h1 className='home_heading1'>
                <span>
                  Speaker<span style={{ color: '#d39e00' }}>Ore</span>
                </span>
              </h1>
              <br />
              <h6 className='home_heading2'>Gold mine for speakers</h6>
            </div>
            <div>
              <Button
                shape='round'
                size='large'
                type='ghost'
                style={button_style}
              >
                Know more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
