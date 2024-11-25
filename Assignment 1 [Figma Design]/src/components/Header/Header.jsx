import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div id="__header">
      <div className="__left">
        <h1>PubGrowth.</h1>
      </div>

      <div className="__middle">
        <ul>
          <li>Adtech</li>
          <li>Hosting</li>
          <li>Publishing</li>
          <li>Deals</li>
          <li>Monetization</li>
          <li>Blog</li>
          <li>
            <div className="__search-box">
              <input type="text" placeholder="Search anything" />
              <i className="bx bx-search"></i>
            </div>
          </li>
        </ul>
      </div>

      <div className="__right">
        <button type="button" className="btn-1">Login</button>
        <button type="button" className="btn-2">Signup Now</button>
      </div>
    </div>
  );
};

export default Header;
