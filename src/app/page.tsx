'use client';

import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Dashboard />
    </>
  );
};

export default HomePage;
