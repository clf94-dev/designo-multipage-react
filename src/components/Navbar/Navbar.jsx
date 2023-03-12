import React from "react";
import { NavLink } from "react-router-dom";
import NavbarLogo from '../../assets/shared/desktop/logo-dark.png';
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="container">
        <NavLink className="link" to="/">
            <img src={NavbarLogo} alt="logo" height="27px"/>
        </NavLink>
        
            <nav className="navbar-links">
                <NavLink className="link" to="/about">
                    <li>Our Company</li>
                </NavLink>
                <NavLink className="link" to="/locations">
                    <li>Locations</li>
                </NavLink>
                <NavLink className="link"  to="/contact">
                    <li>Contact</li>
                </NavLink>
            </nav>
        </div>
    );
    }

export default Navbar;
