import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./styles/NavBar.css";

const NavBar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <header className="background-header">
      <div className="header-container">

        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="white" onClick = {() => {
          setIsNavExpanded(!isNavExpanded);
        }}/>
          <span>Menu</span>
        </div>

        <div className="logo-container">
          <img src={require("../img/logoNWorld.png")} alt="logo" />
        </div>

        <nav className={ isNavExpanded ? "expanded" : "" }>
          <ul className="nav-container">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Game</a>
            </li>
            <li>
              <a href="/">Consoles</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>

        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
