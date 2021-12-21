import React from "react";
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Vintage tech" className="logo"/>
      <nav>
        <ul>
          <div>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </div>
          <div>
          <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
