// Footer with quick contact and copyright note
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>Let\'s build something great together.</p>
        <div className="footer__links">
          <a href="mailto:hello@example.com" className="link">
            Email
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="link">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="link">
            GitHub
          </a>
        </div>
      </div>
      <p className="footer__note">© {new Date().getFullYear()} Your Name</p>
    </footer>
  );
};

export default Footer;
