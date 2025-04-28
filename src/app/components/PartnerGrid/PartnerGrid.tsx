import React from "react";
import Image from "next/image";
import "./PartnerGrid.css";

const logos = [
  "/images/olam.png",
  "/images/maersk.png",
  "/images/rubis.png",
  "/images/solevo.png",
  "/images/mouka.png",
  "/images/cimf.jpg",
  "/images/green.jpg",
  "/images/dangote.jpg",
  "/images/unilevert.png",
  "/images/kenya.png",
  "/images/maersk.png",
  "/images/cmacgm.jpg",
  "/images/cacovidd.jpg",
  "/images/lafarge.jpg",
  "/images/meru.png",
];

const PartnerGrid = () => {
  return (
    <section className="partner-section">
      <div className="partner-info">
        <h2 className="partner-count">700+</h2>
        <p className="partner-description">
          Businesses use Kobo360 to move their cargo across Africa.
        </p>
      </div>
      <div className="partner-grid">
        {logos.map((logo, index) => (
          <div className="partner-logo" key={index}>
            <Image
              src={logo}
              alt={`Partner ${index + 1}`}
              width={100}
              height={60}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerGrid;
