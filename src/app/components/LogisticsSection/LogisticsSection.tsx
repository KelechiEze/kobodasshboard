'use client';
import React from 'react';
import Image from 'next/image';
import './LogisticsSection.css';

const LogisticsSection = () => {
  return (
    <section className="logistics-section">
      <div className="image-container">
        <h2>360 Logistics<br />Operations</h2>
        <Image src="/images/truckks.jpg" alt="Smiling driver" className="driver-img" width={500} height={300} />
      </div>
      <div className="text-container">
        <div className="bg-overlay">
          <Image src="/images/koboblack.png" alt="Background pattern" className="bg-img" width={400} height={400} />
        </div>
        <p>
          Manage your entire logistics process with a simple-to-use tech platform that gives you real-time visibility
          and creates an effective value chain for all stakeholders in the supply chain.
        </p>
        <p>
          With our seamless mobile and web applications, Kobo360 innovates products and solutions that are robust and
          caters for all stakeholders in the supply chain network using big data and technology to reduce supply chain
          risks, logistics bottlenecks, manufacturing waste, low turn-around and loss of goods.
        </p>
      </div>
    </section>
  );
};

export default LogisticsSection;
