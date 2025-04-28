'use client';

import './StatsSection.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-left">
        <h2>Products shipped across</h2>
        <p>
          Agro & Agro-Allied, Chemical, Oil & Gas, FMCG, Manufacturing,<br />
          Construction & Mining, Maritime, Special Project Logistics.
        </p>
      </div>

      <div className="stats-right">
        <div className="stat-item">
          <h2>9 Billion Kg+</h2>
          <span>Weight of<br /></span>
          <p className="span1">Goods moved</p>
        </div>
        <div className="stat-item">
          <h2>50,000+</h2>
          <span>Registered<br /></span>
          <p className="span1">Truck Assets</p>
        </div>
        <div className="stat-item">
          <h2>700+</h2>
          <span>Number of<br /></span>
          <p className="span1">Enterprises Serviced</p>
        </div>
        <div className="stat-item">
          <h2>150,000</h2>
          <span>Number of<br /></span>
          <p className="span1">Jobs Created</p>
        </div>
        <div className="stat-item">
          <h2>7</h2>
          <span>Physical Presence<br /></span>
          <p className="span1">In Countries</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
