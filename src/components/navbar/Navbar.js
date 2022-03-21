import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="mid">
        <ul className="navbar">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/todos">To do list</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
