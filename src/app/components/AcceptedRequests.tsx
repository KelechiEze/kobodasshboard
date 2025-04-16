// components/AcceptedRequests.tsx
import React from 'react';
import './AcceptedRequests.css';
import { FaHandshake, FaCheckCircle } from 'react-icons/fa';

const AcceptedRequests = () => {
  return (
    <div className="accepted-requests">
      <div className="greeting">
        <FaHandshake className="greeting-icon" />
        <h2>Hello from Accepted Requests</h2>
      </div>

      <p className="subtext">Here are all your approved or accepted customer requests.</p>

      <div className="accepted-card">
        <div className="card-header">
          <FaCheckCircle className="status-icon" />
          <h4>Request #2023</h4>
        </div>
        <p>Customer: Michael Jordan</p>
        <p>Status: ✅ Accepted</p>
      </div>

      <div className="accepted-card">
        <div className="card-header">
          <FaCheckCircle className="status-icon" />
          <h4>Request #2024</h4>
        </div>
        <p>Customer: Serena Williams</p>
        <p>Status: ✅ Accepted</p>
      </div>
    </div>
  );
};

export default AcceptedRequests;
