'use client'

import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import {
  FaChartBar, FaUsers, FaTruck, FaMoneyCheckAlt,
  FaClipboardList, FaRegUser, FaBars, FaTimes
} from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setSidebarOpen(true); // ensure visible on desktop
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Hamburger Menu */}
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
          <SidebarSection title="Analytics" items={[{ icon: <FaChartBar />, label: "Analytics" }]} />
          <SidebarSection title="Operations" items={[
            { icon: <FaClipboardList />, label: "Customer Requests" },
            { icon: <FaClipboardList />, label: "Accepted Requests" },
            { icon: <FaTruck />, label: "Allocated Trucks" },
            { icon: <FaClipboardList />, label: "Trips" },
            { icon: <FaMoneyCheckAlt />, label: "Income Transactions" },
          ]} />
          <SidebarSection title="Fleet Management" items={[
            { icon: <FaUsers />, label: "Customers" },
            { icon: <FaRegUser />, label: "Drivers" },
            { icon: <FaTruck />, label: "Trucks" },
            { icon: <FaClipboardList />, label: "Issues" },
            { icon: <FaMoneyCheckAlt />, label: "Costs" },
          ]} />
          <SidebarSection title="Insurance" items={[
            { icon: <FaClipboardList />, label: "Policy Request" },
            { icon: <FaClipboardList />, label: "Subscriptions" },
          ]} />
          <SidebarSection title="Support" items={[
            { icon: <MdOutlineSupportAgent />, label: "Support" },
          ]} />
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

const SidebarSection = ({ title, items }) => (
  <div className="sidebar__section">
    <p className="sidebar__section-title">{title}</p>
    {items.map((item, idx) => (
      <div className="sidebar__link" key={idx}>
        {item.icon}
        <span>{item.label}</span>
      </div>
    ))}
  </div>
);

export default Sidebar;
