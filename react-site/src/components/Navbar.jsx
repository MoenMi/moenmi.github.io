import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Michael Moen
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" end>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link" end>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://resume.mtmoen.com/Michael%20Moen%20-%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://notes.mtmoen.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
