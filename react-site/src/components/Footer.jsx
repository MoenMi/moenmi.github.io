import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a
        className="social-icon"
        href="https://www.facebook.com/mtmoen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/facebook_icon.png" alt="Facebook" />
      </a>
      <a
        className="social-icon"
        href="https://www.instagram.com/mtmoen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/instagram_icon.png" alt="Instagram" />
      </a>
      <a
        className="social-icon"
        href="https://www.linkedin.com/in/mtmoen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/linkedin_icon.png" alt="LinkedIn" />
      </a>
      <a
        className="social-icon"
        href="https://github.com/MoenMi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/github_icon.png" alt="GitHub" />
      </a>
      <a
        className="social-icon"
        href="https://orcid.org/0009-0002-3683-9791"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/orcid_icon.png" alt="ORCID" />
      </a>
    </div>
  );
}

export default Footer;
