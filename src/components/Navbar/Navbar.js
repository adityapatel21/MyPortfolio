import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleReload = () => {
    window.location.reload();
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header className="header">
        <div className="logo" onClick={handleReload}>
          <img
            src="https://i.postimg.cc/q770Hw6h/profile-pic-1.png"
            alt="profile"
          />

          <h2>&lt;aditya/&gt;</h2>
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="nav-icons">
          <i
            onClick={handleClick}
            className="fa-solid fa-xmark"
            id={!clicked ? "disable-button" : ""}
          ></i>
          <i
            onClick={handleClick}
            className="fa-solid fa-bars"
            id={clicked ? "disable-button" : ""}
          ></i>
        </label>

        <nav className="navbar">
          <a className="navlink" href="/">
            Home
          </a>
          <a className="navlink" href="/#about">
            About
          </a>
          <a className="navlink" href="/#projects">
            Projects
          </a>
          <a className="navlink" href="/#contact">
            Contact
          </a>
        </nav>
      </header>
      {/* <nav>
        <div>
          <a className="nav-logo" href="./">
            &lt;<span className="logo-name">aditya</span>/&gt;
          </a>
        </div>
        <div>
          <ul id="navbar-links" className={clicked ? "active" : ""}>
            <li>
              <a href="./">Home</a>
            </li>

            <li>
              <a href="/#about">About</a>
            </li>

            <li>
              <a href="/#projects">Projects</a>
            </li>

            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <i
            onClick={handleClick}
            id="bar"
            className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
