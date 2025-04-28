'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { List, X } from 'phosphor-react';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Image src="/images/logo-text.png" alt="Kobo Logo" width={120} height={40} />
      </div>

      <ul className="nav-links">
        <li className="nav-item">
          ABOUT US
          <div className="dropdown">
            <p>Who We Are</p>
          </div>
        </li>
        <li className="nav-item">
          CARGO OWNERS
          <div className="dropdown">
            <p>Register</p>
            <p>Sign In</p>
            <p>Request a quote</p>
          </div>
        </li>
        <li className="nav-item">
          TRANSPORTERS
          <div className="dropdown">
            <p>Register</p>
            <p>Login</p>
          </div>
        </li>
        <li className="nav-item">
          VAS
          <div className="dropdown">
            <p>Kobocare</p>
            <p>Kobosafe</p>
            <p>Payfasta</p>
          </div>
        </li>
        <li className="nav-item">
          RESOURCES
          <div className="dropdown">
            <p>Careers</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
        </li>
      </ul>

      <div className="nav-actions">
        <div className="custom-select">
          <button className="select-btn">🌐 Language</button>
          <div className="select-dropdown">
            <p>🇺🇸 English</p>
            <p>🇫🇷 French</p>
            <p>🇪🇸 Spanish</p>
            <p>🇨🇳 Chinese</p>
            <p>🇩🇪 German</p>
            <p>🇳🇬 Yoruba</p>
          </div>
        </div>

        <div className="custom-select">
          <button className="select-btn">🌍 Country</button>
          <div className="select-dropdown">
            <p>🇳🇬 Nigeria</p>
            <p>🇺🇸 USA</p>
            <p>🇬🇧 United Kingdom</p>
            <p>🇨🇦 Canada</p>
            <p>🇰🇪 Kenya</p>
            <p>🇿🇦 South Africa</p>
            <p>🇬🇭 Ghana</p>
            <p>🇺🇬 Uganda</p>
            <p>🇪🇬 Egypt</p>
            <p>🇧🇷 Brazil</p>
            <p>🇦🇪 UAE</p>
            <p>🇮🇳 India</p>
            <p>🇨🇳 China</p>
            <p>🇫🇷 France</p>
            <p>🇩🇪 Germany</p>
            <p>🇮🇹 Italy</p>
            <p>🇯🇵 Japan</p>
            <p>🇷🇺 Russia</p>
            <p>🇸🇦 Saudi Arabia</p>
            <p>🇹🇷 Turkey</p>
          </div>
        </div>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <X size={24} /> : <List size={24} />}
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>ABOUT US</li>
            <li>CARGO OWNERS</li>
            <li>TRANSPORTERS</li>
            <li>VAS</li>
            <li>RESOURCES</li>
          </ul>
          <div className="mobile-actions">
            <select>
              <option>EN</option>
              <option>FR</option>
            </select>
            <select>
              <option>State</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
