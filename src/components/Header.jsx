import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="py-20">
      <ul className="nav-header-ul flex">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
