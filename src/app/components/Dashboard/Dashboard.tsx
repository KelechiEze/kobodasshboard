'use client';

import React from "react";
import "./Dashboard.css";
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
  FaExclamationTriangle
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Section 1 */}
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

      {/* Section 2 */}
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

      {/* Section 3 */}
      <div className="dashboard__row">
        <div className="dashboard__card gray">
          <FaUser className="icon" />
          <p>Drivers<br />0</p>
        </div>
      </div>

      {/* Section 4: Trips and Recent Income */}
      <TripsIncomeSection />
    </div>
  );
};

export default Dashboard;
