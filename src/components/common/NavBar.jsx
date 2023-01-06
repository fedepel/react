import CartWidget from "./CartWidget";
import logo from "../assets/images/logoNWorld.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import "./styles/common.css";

const NavBar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <header className="background-header">
      <div className="header-container">

        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="black" onClick = {() => {
          setIsNavExpanded(!isNavExpanded);
        }}/>
          <span>Menu</span>
        </div>

        <div className="logo-container">
          <Link to='/'>
          <img src={logo} alt="logo" />
          </Link>
        </div>

        <nav className={ isNavExpanded ? "expanded" : "" }>
          <ul className="nav-container">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/category/game">Games</NavLink>
            </li>
            <li>
              <NavLink to="/category/console">Consoles</NavLink>
            </li>
          </ul>
        </nav>
        <Link to='/cart'>
        <CartWidget />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
