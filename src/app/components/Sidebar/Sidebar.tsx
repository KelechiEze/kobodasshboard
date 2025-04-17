'use client'

import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import {
  FaChartBar, FaUsers, FaTruck, FaMoneyCheckAlt,
  FaClipboardList, FaRegUser, FaBars, FaTimes
} from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

interface SidebarProps {
  setActivePage: (page: string) => void;
}

interface SidebarSectionProps {
  title: string;
  items: { icon: React.ReactNode; label: string; href: string }[];
  onItemClick: (page: string) => void;
  activePage: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items, onItemClick, activePage }) => (
  <div className="sidebar__section">
    <p className="sidebar__section-title">{title}</p>
    {items.map((item, idx) => (
      <div
        key={idx}
        className={`sidebar__link ${activePage === item.href ? "active" : ""}`}
        onClick={() => onItemClick(item.href)}
      >
        {item.icon}
        <span>{item.label}</span>
      </div>
    ))}
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ setActivePage }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activePage, setCurrentPage] = useState<string>("dashboard");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setSidebarOpen(true);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (page: string) => {
    setCurrentPage(page);
    setActivePage(page);
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <>
      {isMobile && (
        <button className="hamburger" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      <div className={`sidebar ${isSidebarOpen ? "show" : "hide"}`}>
        <div className="sidebar__top">
          <h2>HEALTHYOURSELF AFRICA</h2>
          <p>ID 8758</p>
        </div>

        <nav className="sidebar__nav">
          <SidebarSection
            title="Analytics"
            items={[{ icon: <FaChartBar />, label: "Analytics", href: "dashboard" }]}
            onItemClick={handleItemClick}
            activePage={activePage}
          />
          <SidebarSection
            title="Operations"
            items={[
              { icon: <FaClipboardList />, label: "Customer Requests", href: "customer-requests" },
              { icon: <FaClipboardList />, label: "Accepted Requests", href: "accepted-requests" },
              { icon: <FaTruck />, label: "Allocated Trucks", href: "allocated-trucks" },
              { icon: <FaClipboardList />, label: "Trips", href: "trips" },
              { icon: <FaMoneyCheckAlt />, label: "Income Transactions", href: "income" },
            ]}
            onItemClick={handleItemClick}
            activePage={activePage}
          />
          <SidebarSection
            title="Fleet Management"
            items={[
              { icon: <FaUsers />, label: "Customers", href: "customers" },
              { icon: <FaRegUser />, label: "Drivers", href: "drivers" },
              { icon: <FaTruck />, label: "Trucks", href: "trucks" },
              { icon: <FaClipboardList />, label: "Issues", href: "issues" },
              { icon: <FaMoneyCheckAlt />, label: "Costs", href: "costs" },
            ]}
            onItemClick={handleItemClick}
            activePage={activePage}
          />
          <SidebarSection
            title="Insurance"
            items={[
              { icon: <FaClipboardList />, label: "Policy Request", href: "policy-request" },
              { icon: <FaClipboardList />, label: "Subscriptions", href: "subscriptions" },
            ]}
            onItemClick={handleItemClick}
            activePage={activePage}
          />
          <SidebarSection
            title="Support"
            items={[
              { icon: <MdOutlineSupportAgent />, label: "Support", href: "support" },
            ]}
            onItemClick={handleItemClick}
            activePage={activePage}
          />
        </nav>

        <div className="sidebar__bottom">
          <select>
            <option value="en">ENGLISH</option>
            <option value="fr">FRENCH</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
