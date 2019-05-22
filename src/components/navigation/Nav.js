import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="cyan">
        <div className="nav-wrapper container">
          <Link to="/">
            <div className="brand-logo left">
              <i className="material-icons">code</i>
            </div>
          </Link>
          <ul className="right">
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
          <ul className="right">
            <Link to="/about">
              <li>Info</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
