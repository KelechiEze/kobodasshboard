'use client';

import React from "react";
import "./TestimonialCard.css";
import { Quotes } from "phosphor-react";

const TestimonialCard = () => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-card">
        <Quotes size={32} weight="fill" color="#fbbf24" className="quote-icon" />
        <p className="testimonial-text">
          So pleased to see the partnership between Unilever Nigeria and Kobo360 continue
          to grow sustainably. Looking forward to what the future holds as there&apos;s certainly
          more to come.&quot;
        </p>
      </div>
      <div className="testimonial-author">
        <p className="author-name">Tobi Adeniyi</p>
        <p className="author-title">Supply Chain Director, Unilever</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
