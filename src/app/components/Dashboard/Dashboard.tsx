'use client';

import React from "react";
import "./Dashboard.css";
import CustomerRequests from "@/app/components/CustomerRequests";
import AcceptedRequests from "@/app/components/AcceptedRequests";

import TripsIncomeSection from "@/app/components/TripsIncomeSection/TripsIncomeSection";

import {
  FaWallet,
  FaHourglassHalf,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaBan,
  FaTruck,
  FaRoute,
  FaUser,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

interface DashboardProps {
  activePage: string;
}

const Dashboard: React.FC<DashboardProps> = ({ activePage }) => {
  return (
    <div className="dashboard">
      {activePage === "dashboard" && (
        <>

          <div className="dashboard__row">
            <div className="dashboard__card green">
              <FaWallet className="icon" />
              <p>Total Income</p>
            </div>
            <div className="dashboard__card brown">
              <FaHourglassHalf className="icon" />
              <p>Pending Income</p>
            </div>
            <div className="dashboard__card green">
              <FaMoneyBillWave className="icon" />
              <p>Paid Advance<br />NGN</p>
              <span className="link">Show Balance</span>
            </div>
            <div className="dashboard__card brown">
              <FaClipboardCheck className="icon" />
              <p>Receivable Advance<br />NGN 0</p>
              <span className="link">Show Balance</span>
            </div>
            <div className="dashboard__card red">
              <FaBan className="icon" />
              <p>Declined Advance<br />NGN</p>
            </div>
            <div className="dashboard__card blue">
              <FaClipboardCheck className="icon" />
              <p>Total Trips<br />0</p>
            </div>
          </div>

          <div className="dashboard__row">
            <div className="dashboard__card yellow">
              <FaRoute className="icon" />
              <p>Active Trips<br />0</p>
            </div>
            <div className="dashboard__card teal">
              <FaCheckCircle className="icon" />
              <p>Delivered Trips<br />0</p>
            </div>
            <div className="dashboard__card red">
              <FaExclamationTriangle className="icon" />
              <p>Flagged Trips<br />0</p>
            </div>
            <div className="dashboard__card light-blue">
              <FaTruck className="icon" />
              <p>Trucks<br />0</p>
            </div>
          </div>
          <div className="dashboard__row">
            <div className="dashboard__card gray">
              <FaUser className="icon" />
              <p>Drivers<br />0</p>
            </div>
          </div>

          <TripsIncomeSection />
        </>
      )}

      {activePage === "trips" && <h2>Trips Section</h2>}
      {activePage === "income" && <h2>Income Transactions</h2>}
      {activePage === "drivers" && <h2>Drivers Section</h2>}
      {activePage === "support" && <h2>Support Page</h2>}
      {activePage === "customer-requests" && <CustomerRequests />}
      {activePage === "accepted-requests" && <AcceptedRequests />}
    </div>
  );
};

export default Dashboard;
