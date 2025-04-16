// components/CustomerRequests.tsx
import React from 'react';
import './CustomerRequests.css'; // Optional styling

const CustomerRequests = () => {
  return (
    <div className="customer-requests">
      <h2>Customer Requests</h2>
      <p>Here you&apos;ll find a list of customer transport or service requests.</p>

      <div className="request-card">
        <h4>Request #1001</h4>
        <p>Customer: John Doe</p>
        <p>Status: Pending</p>
      </div>

      <div className="request-card">
        <h4>Request #1002</h4>
        <p>Customer: Jane Smith</p>
        <p>Status: Approved</p>
      </div>
    </div>
  );
};

export default CustomerRequests;
