'use client';

import React, { useState } from 'react';
import './Login.css';
import Image from 'next/image';

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
        <div className="logo">
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
              <a href="#" onClick={() => setActivePage('passwordrecovery')}>
                Forgot password?
              </a>
            </div>
            <button type="submit">Login</button>
          </form>
        )}

        {!isLoading && (
          <p>
            Don’t have an account?{' '}
            <a href="#" onClick={() => setActivePage('signup')}>
              Sign Up Free!
            </a>
          </p>
        )}
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

export default Login;
