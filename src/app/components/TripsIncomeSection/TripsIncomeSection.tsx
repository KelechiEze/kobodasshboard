import React from 'react';
import './TripsIncomeSection.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', totalTrips: 15, deliveredTrips: 12 },
    { month: 'Feb', totalTrips: 22, deliveredTrips: 20 },
    { month: 'Mar', totalTrips: 18, deliveredTrips: 16 },
    { month: 'Apr', totalTrips: 25, deliveredTrips: 23 },
    { month: 'May', totalTrips: 30, deliveredTrips: 27 },
    { month: 'Jun', totalTrips: 28, deliveredTrips: 26 },
  ];
  

const TripsIncomeSection = () => {
  return (
    <div className="trips-income-wrapper">
      <div className="chart-container">
        <h4>Trips in the last six months</h4>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalTrips" fill="#003f5c" name="Total Trips" />
            <Bar dataKey="deliveredTrips" fill="#2f4b7c" name="Delivered Trips" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="income-container">
        <h4>Your Recent Income (Dollars)</h4>
        <div className="income-placeholder">
          <p>No income data available</p>
        </div>
      </div>
    </div>
  );
};

export default TripsIncomeSection;
