import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <div>
            <h4>SECTIONS</h4>
            <ul>
              <li>Freelance</li>
              <li>Music & Audio</li>
              <li>Technology & Software</li>
              <li>Templates</li>
              <li>Digital Tools</li>
            </ul>
          </div>
          <div>
            <h4>MORE</h4>
            <ul>
              <li>Manage Account</li>
              <li>Study Materials</li>
              <li>Guides & Cartoons</li>
              <li>Tutorials & Guides</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <h4>Newsletters</h4>
            <ul>
              <li>Download App</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>F.A.Q.</li>
          <li>Media Kit</li>
          <li>Press</li>
          <li>Accessibility Help</li>
          <li>User Agreement</li>
          <li>Privacy Policy</li>
          <li>Your Florida Privacy Rights</li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2025 CreatorsFIU. All rights reserved. CreatorsFIU may earn a portion of sales from products that are purchased through our site as part of our Affiliate Partnerships with retailers.</p>
        <div className="footer-icons">
          <span>🌕</span>
          <span>📘</span>
          <span>🐦</span>
          <span>📷</span>
        </div>
      </div>

      <div className="footer-extra">
        <img src="/assets/walking.gif" alt="Walking animation" />
        <button>↑ Back to Top</button>
        <div className="privacy-toggle">
          <span>⚪ Your Privacy Choices</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
