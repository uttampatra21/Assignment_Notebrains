import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { cookiesService } from "../../shared/_session/cookies";

const Header = () => {
  const token = cookiesService.getItem("accessToken");

  return (
    <div id="__header">
      <div className="__left">
        <Link to="/">
          <h1>PubGrowth.</h1>
        </Link>
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
        {token ? (
          <Link to="/profile">
            <button type="button" className="btn-3">
              <i className="bx bx-user userIcon"></i>
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button type="button" className="btn-1">
              Login
            </button>
          </Link>
        )}

        <Link to="register">
          <button type="button" className="btn-2">
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
