'use client'

import React from "react";
import "./Header.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">ANALYTICS</h1>

      <div className="header__right">
        <div className="header__profile-img">
          <Image src="/proff.png" alt="Profile" width={32} height={32} />
        </div>
        <div className="header__logo">
          <Image src="/logo-text.png" alt="Kobo Logo" width={60} height={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
