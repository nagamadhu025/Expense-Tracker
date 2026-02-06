import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      {/* Left Section */}
      <div className="navbar-left">
        <h3>Dashboard</h3>
      </div>

      {/* Right Section */}
      <div className="navbar-right">

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search"
        />

        {/* Profile */}
        <div className="navbar-profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />
          <span>Admin</span>
        </div>

      </div>

    </div>
  );
}

export default Navbar;
