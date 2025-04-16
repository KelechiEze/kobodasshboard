'use client';

import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

const HomePage = () => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <>
      <Sidebar setActivePage={setActivePage} />
      {activePage === "dashboard" && <Header />}
      <Dashboard activePage={activePage} />
    </>
  );
};

export default HomePage;
