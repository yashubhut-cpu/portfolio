import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer transition">
      <div className="footer-content container">
        <p className="footer-copy">© 2026 Yash Bhut. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link transition">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link transition">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
