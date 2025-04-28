"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import "./SignUpPage.css";
import Link from "next/link"; 

interface SignUpPageProps {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ setActivePage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true); // Show spinner
    setTimeout(() => {
      setLoading(false);
      setActivePage("login"); // Redirect to login after delay
    }, 2000);
  };

  return (
    <div className="signup-container">
      {/* Left Side Form */}
      <div className="signup-form-section">
        <div className="logo">
          <Image
            src="/guudlogo.png"
            alt="The Social Good Co. Logo"
            width={120}
            height={120}
            priority
          />
        </div>
        <h1 className="form-title">Sign up for free!</h1>

        <form className="signup-form" onSubmit={handleSignUp}>
          <input type="email" placeholder="Email address" required />
          <input type="text" placeholder="Full name" required />
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="password-toggle"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <p className="privacy-text">
            I agree to the <a href="#">privacy policy</a> and{" "}
            <a href="#">terms of service</a>
          </p>

          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <p className="login-link">
            Already have an account?{" "}
            <Link href="/login">
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side Image */}
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

export default SignUpPage;
