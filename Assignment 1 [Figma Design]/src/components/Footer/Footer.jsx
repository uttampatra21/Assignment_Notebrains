import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div id="__footer">
      <div className="__heading">
        <div className="__left">
          <h1>The Growth Acceleration Platform for Publishers</h1>
          <p>
            Publisher Growth is a community of publishers that helps you
            actively accelerate your revenue. This platform assists publishers
            in growing their traffic and revenue. As publishers, you can share
            and read reviews of ad networks and hosting companies. You can
            connect with other publishers to build links for growth and
            monetization hacks and more. This platform will help you stay up to
            date with the advertising and publisher ecosystem.
          </p>
        </div>

        <div className="__right">
          <button type="button">Get Started</button>
        </div>
      </div>

      <div className="__footer-links">
        <ul>
          <h4>Adtech Categories</h4>
          <li>Programmatic Advertising</li>
          <li>Header Bidding Platforms</li>
          <li>Video Ad Networks</li>
          <li>Native Advertising</li>
          <li>Affiliate Marketing Networks</li>
        </ul>
        <ul>
          <h4>Hosting Services</h4>
          <li>Shared Hosting</li>
          <li>VPS Hosting</li>
          <li>Dedicated Servers</li>
          <li>Cloud Hosting</li>
          <li>WordPress Hosting</li>
        </ul>
        <ul>
          <h4>Resources</h4>
          <li>Blog</li>
          <li>Case Studies</li>
          <li>Webinars</li>
          <li>Guides & Tutorials</li>
          <li>FAQs</li>
        </ul>
        <ul>
          <h4>Email Support</h4>
          <li>contact@publishergrowth.com</li>
          <li>support@publishergrowth.com</li>
          <li>
            <div className="__social">
              <h4>Follow Us</h4>
              <i className="bx bxl-facebook-circle"></i>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-linkedin"></i>
              <i className="bx bxl-instagram"></i>
            </div>
          </li>
        </ul>
      </div>

      <div className="__end">
        <p>© 2024 PublisherGrowth - Proudly Crafted By <span>Notebrains</span></p>
      </div>
    </div>
  );
};

export default Footer;
