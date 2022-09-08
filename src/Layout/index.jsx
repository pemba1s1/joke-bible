import React from 'react';
import MainTitle from '../Components/MainTitle';
import Navbar from '../Components/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MainTitle />
      {children}
    </div>
  );
};

export default Layout;
