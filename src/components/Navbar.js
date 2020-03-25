import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;