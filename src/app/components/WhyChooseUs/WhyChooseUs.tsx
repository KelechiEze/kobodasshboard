'use client';

import {
  Globe,
  Cpu,
  MapPin,
  Clock
} from 'phosphor-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="features">
        <div className="feature">
          <Globe className="icon" size={32} color="#fbbf24" weight="bold" />
          <h3>Unrivaled capacity and coverage</h3>
          <p>
            Our services are powered by over 50,000 truck owners and delivery partners who are eager
            to deliver your freight to where it needs to be. Our network enables you move freight
            seamlessly across the continent.
          </p>
        </div>

        <div className="feature">
          <Cpu className="icon" size={32} color="#fbbf24" weight="bold" />
          <h3>Game-changing innovation and automation</h3>
          <p>
            Our technology creates value for both customers and truck owners through an all-in-one
            simplified digital ecosystem that connects owners to shippers giving you access to the
            largest network of registered drivers, trucks and end-to-end digital visibility.
          </p>
        </div>

        <div className="feature">
          <MapPin className="icon" size={32} color="#fbbf24" weight="bold" />
          <h3>Advanced tracking and visibility</h3>
          <p>
            No matter what you are hauling, Kobo gives you 360° visibility and real-time insights on
            the status of your haulage on every delivery.
          </p>
        </div>

        <div className="feature">
          <Clock className="icon" size={32} color="#fbbf24" weight="bold" />
          <h3>Timely delivery</h3>
          <p>
            Our customers say we deliver 3x faster than industry standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
