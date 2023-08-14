import React from 'react';
import { Link } from 'react-router-dom';

const MyHeader = () => {
  return (
    <>
      <Link to="login">LOGIN</Link>
      <Link to="members">MEMBER</Link>
    </>
  );
};

export default MyHeader;
