import React from 'react';
import './TripsIncomeSection.css';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', totalTrips: 15, deliveredTrips: 12 },
  { month: 'Feb', totalTrips: 22, deliveredTrips: 20 },
  { month: 'Mar', totalTrips: 18, deliveredTrips: 16 },
  { month: 'Apr', totalTrips: 25, deliveredTrips: 23 },
  { month: 'May', totalTrips: 30, deliveredTrips: 27 },
  { month: 'Jun', totalTrips: 28, deliveredTrips: 26 },
  { month: 'Jul', totalTrips: 20, deliveredTrips: 18 },
  { month: 'Aug', totalTrips: 24, deliveredTrips: 22 },
  { month: 'Sep', totalTrips: 26, deliveredTrips: 25 },
  { month: 'Oct', totalTrips: 32, deliveredTrips: 30 },
  { month: 'Nov', totalTrips: 29, deliveredTrips: 28 },
  { month: 'Dec', totalTrips: 27, deliveredTrips: 26 },
];

const TripsIncomeSection = () => {
  return (
    <div className="trips-income-wrapper">
      <div className="chart-container">
        <h4>Trips in the last six months</h4>
        <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis
    dataKey="month"
    stroke="#888"
    tick={{ fill: '#333', fontSize: 12 }}
  />
  <YAxis
    stroke="#888"
    tick={{ fill: '#333', fontSize: 12 }}
  />
  <Tooltip
    contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc' }}
    labelStyle={{ color: '#333' }}
    cursor={{ fill: 'rgba(0,0,0,0.05)' }}
  />
  <Legend
    formatter={(value) => (
      <span style={{ color: '#333', fontWeight: 500 }}>{value}</span>
    )}
  />

  {/* Total Trips */}
  <Bar dataKey="totalTrips" name="Total Trips">
    {data.map((entry, index) => (
      <Cell
        key={`cell-total-${index}`}
        fill={
          entry.month === 'May'
            ? '#ff7f0e'
            : entry.month === 'Oct'
            ? '#d62728'
            : '#003f5c'
        }
      />
    ))}
  </Bar>

  {/* Delivered Trips */}
  <Bar dataKey="deliveredTrips" name="Delivered Trips">
    {data.map((entry, index) => (
      <Cell
        key={`cell-delivered-${index}`}
        fill={
          entry.month === 'May'
            ? '#ffc658'
            : entry.month === 'Oct'
            ? '#ff9896'
            : entry.month === 'Dec'
            ? '#00c49f'
            : '#2f4b7c'
        }
      />
    ))}
  </Bar>
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
