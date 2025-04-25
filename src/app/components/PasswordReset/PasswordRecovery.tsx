'use client';

import React, { useState } from 'react';
import './PasswordRecovery.css';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

interface PasswordRecoveryProps {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({ setActivePage }) => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleRecovery = () => {
    if (!email) return;
    setIsSending(true);

    // Simulate email send
    setTimeout(() => {
      alert('Recovery instructions sent to your email.');
      setIsSending(false);
      setActivePage('login');
    }, 2000);
  };

  return (
    <div className="recovery-container">
      <div className="form-section">
        <div className="logo">
          <Image
            src="/guudlogo.png"
            alt="The Social Good Co. Logo"
            width={150}
            height={150}
            priority
          />
        </div>
        <h3>Recover your password</h3>
        <p>
          Fill in your e-mail address below and we’ll send
          you an email with instructions.
        </p>

        <input
          type="email"
          placeholder="Email address"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {isSending ? (
          <div className="spinner" />
        ) : (
          <button className="recovery-button" onClick={handleRecovery}>
            Recover your password
          </button>
        )}

        <div className="links">
          <a href="#" onClick={() => setActivePage('login')}>
            <FaArrowLeft /> Already have an account?
          </a>
          <a href="#" onClick={() => setActivePage('signup')}>
            <FaArrowLeft /> Don’t have an account?
          </a>
        </div>
      </div>

      <div className="signup-image-section">
        <Image
          src="/brownsmile.jpg"
          alt="Customer support agent"
          width={800}
          height={600}
          priority
          className="signup-image"
        />
      </div>
    </div>
  );
};

export default PasswordRecovery;
