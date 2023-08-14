import React from 'react';
import MyHeader from './MyHeader';
import { Outlet } from 'react-router-dom';
import MyFooter from './MyFooter';

const Template = () => {
  return (
    <>
      <MyHeader />
      <Outlet />
      <MyFooter />
    </>
  );
};

export default Template;
