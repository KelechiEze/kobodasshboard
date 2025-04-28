'use client'; 

import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Dashboard from '../components/Dashboard/Dashboard';
import { useState } from 'react';

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("dashboard"); 

  return (
    <>
      <Sidebar setActivePage={setActivePage} /> {/* Passing setActivePage to Sidebar */}
      <Header />
      <Dashboard activePage={activePage} /> {/* Passing activePage prop */}
    </>
  );
}
