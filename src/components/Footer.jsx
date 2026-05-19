import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer transition">
      <div className="footer-content container">
        <div>
          <p className="footer-copy">
            © {year} Yash Bhut. Crafted with React & precision.
          </p>
          <p className="footer-subcopy">
            Building reliable digital experiences for ambitious teams.
          </p>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link transition"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
