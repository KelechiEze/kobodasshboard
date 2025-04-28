'use client';

import React, { useState } from 'react';
import './Login.css';
import Image from 'next/image';
import Link from 'next/link'; // Importing Link

interface LoginProps {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<LoginProps> = ({ setActivePage }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      setActivePage('dashboard');
    }, 5000);
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="logo-login">
          <Image
            src="/guudlogo.png"
            alt="The Social Good Co. Logo"
            width={150}
            height={150}
            priority
          />
        </div>
        <h3>Login to your account</h3>

        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <div className="form-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link href="/passwordrecovery">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="signup-button">Login</button>
          </form>
        )}

        {!isLoading && (
          <p>
            Don’t have an account?{' '}
            <Link href="/signup">
              Sign Up Free!
            </Link>
          </p>
        )}
      </div>

      <div className="login-image-section">
        <Image
          src="/brownsmile.jpg"
          alt="Customer support agent"
          width={800}
          height={600}
          priority
          className="login-image"
        />
      </div>
    </div>
  );
};

export default Login;
