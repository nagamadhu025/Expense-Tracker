import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaMoneyBillWave,
  FaRunning,
  FaTasks,
  FaUser,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* Logo */}
      <h2 className="sidebar-logo">MyTracker</h2>

      {/* Menu */}
      <ul className="sidebar-menu">

        <li>
          <NavLink to="/dashboard">
            <FaHome /> <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/expense">
            <FaMoneyBillWave /> <span>Expense</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/fitness">
            <FaRunning /> <span>Fitness</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/todo">
            <FaTasks /> <span>Todo</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile">
            <FaUser /> <span>Profile</span>
          </NavLink>
        </li>

      </ul>

      {/* Footer */}
      <div className="sidebar-footer">
        <p>© 2026 MyTracker</p>
      </div>

    </div>
  );
}

export default Sidebar;
