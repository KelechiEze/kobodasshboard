'use client';

import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import SignUpPage from './components/SignUp/SignUpPage';
import Login from './components/Login/Login';
import PasswordRecovery from './components/PasswordReset/PasswordRecovery';

const HomePage: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('signup'); // Default page

  return (
    <>
      {activePage === 'signup' ? (
        <SignUpPage setActivePage={setActivePage} />
      ) : activePage === 'login' ? (
        <Login setActivePage={setActivePage} />
      ) : activePage === 'passwordrecovery' ? (
        <PasswordRecovery setActivePage={setActivePage} />
      ) : (
        <>
          <Sidebar setActivePage={setActivePage} />
          {activePage === 'dashboard' && <Header />}
          <Dashboard activePage={activePage} />
        </>
      )}
    </>
  );
};

export default HomePage;
