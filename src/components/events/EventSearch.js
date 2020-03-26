import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;

const EventSearch = () => {
  return (
    <Search
      size='default'
      placeholder='Search'
      onSearch={value => console.log(value)}
    />
  );
};

export default EventSearch;
