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
            href="https://github.com/yashubhut-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yash-bhut/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link transition"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/mr._yash_bhut/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link transition"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/918460800817"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
