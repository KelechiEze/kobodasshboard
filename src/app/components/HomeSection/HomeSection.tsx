'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './HomeSection.css';

const HomeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="home-section">
      <div className="left-content">
        <h1>We Move You Forward</h1>
        <p>
          Kobo360 is Africa’s innovation leader in integrated logistics solutions and truck brokerage services.
        </p>
        <p>
          We aggregate end-to-end haulage operations to help cargo owners, truck owners, drivers, and cargo recipients
          achieve an efficient supply chain framework.
        </p>
        <div className="buttons">
          <button className="primary-btn">MOVE CARGO</button>
          <button className="outline-btn">REGISTER TRUCK</button>
        </div>

        <div className="carousel-logos">
          <div className="slide-track">
            <Image src="/images/neywell.png" alt="Neywell" width={100} height={40} />
            <Image src="/images/dhl.png" alt="DHL" width={100} height={40} />
            <Image src="/images/Dangote.png" alt="Dangote" width={100} height={40} />
            <Image src="/images/unilever.png" alt="Unilever" width={100} height={40} />
            {/* Duplicate for infinite scroll effect */}
            <Image src="/images/neywell.png" alt="Neywell" width={100} height={40} />
            <Image src="/images/dhl.png" alt="DHL" width={100} height={40} />
            <Image src="/images/Dangote.png" alt="Dangote" width={100} height={40} />
            <Image src="/images/unilever.png" alt="Unilever" width={100} height={40} />
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="main-image">
          <Image src="/images/truck.png" alt="Kobo Truck" width={500} height={300} />
        </div>
        <div className="bottom-row">
          <Image
            src="/images/howkoboworks.png"
            alt="How it works"
            width={180}
            height={100}
            className="clickable-image"
            onClick={openModal}
          />
          <div className="divider"></div>
          <Image src="/images/award1.png" alt="Award 1" width={180} height={100} />
          <Image src="/images/award2.png" alt="Award 2" width={180} height={100} />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <iframe
              src="https://www.youtube.com/embed/vAguJjobykU?si=xTK0_4AJy4ApC48c"
              title="Kobo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeSection;
