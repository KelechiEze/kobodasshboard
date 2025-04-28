'use client';

import React from "react";
import Image from "next/image";
import "./Footer.css";

import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Social Section */}
        <div className="footer-brand">
          <Image src="/images/whitelogo.png" alt="Kobo Logo" width={100} height={30} />
          <p>Copyright © 2025 Kobo360 Inc.</p>
          <p>All rights reserved</p>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4>VAS</h4>
            <ul>
              <li>Kobocare</li>
              <li>Kobosafe</li>
              <li>Payfasta</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h4>Download our apps</h4>
            <div className="app-badges">
              <Image src="/images/apple.png" alt="App Store" width={120} height={40} />
              <Image src="/images/google.png" alt="Google Play" width={120} height={40} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
