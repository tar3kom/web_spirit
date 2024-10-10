import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navebar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        <img src="/tinder.png" className="img" />
      </Link>
      <div className="size-searchbox">
        <input type="text" placeholder="Search" className="size-searchbox" />
      </div>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li>
          <NavLink to="/section">
            <img src="/tinder.png" className="size-sell" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">Trend</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
