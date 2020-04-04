import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import media from '../../static/helping.mp4';
import logo from '../../static/logo.png';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import './style.css';

const button_style = {
  fontFamily: 'sans-serif, Raleway',
  color: '#d3d3d3',
  WebkitTransition: 'all .4s',
  transition: 'all .4s'
};

const Video = () => {
  return (
    <>
      <div className="video_wrapper">
          <ReactPlayer
            playsinline
            url={media}
            poster={logo}
            playing
            loop={true}
            muted
            width="100%"
            height="100%"
          />
      </div>

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
    </>
  );
};

export default Video;
