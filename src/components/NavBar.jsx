import React from 'react';
import { Link } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
    const toggleHamburger = (event) => {
        if(event.target) {
            let hamburger = event.target;
            if(!hamburger.classList.contains("hamburger-icon-container")) hamburger = hamburger.parentNode;

            hamburger.classList.toggle("hamburger-active");

            let menu = document.getElementById("nav-menu");
            menu.classList.toggle("menu-active");

            let body = document.getElementsByTagName("body")[0];
            body.classList.toggle("disable-scroll");
        }
    }

    return (
        <header className="header">
            <nav className="nav-bar sticky">
                <ul>
                    <li className="nav-float-left"><Link id="nav-link-home" className="nav-logo" to={"/"}>Project Astra</Link></li>
                    <li className="nav-center">
                        <ul>
                            <li className="nav-float-left"><Link id="nav-link-project-earth" to={"/project-earth"}>Project Earth</Link></li>
                            <li className="nav-float-left"><Link id="nav-link-project-moon" to={"/project-moon"}>Project Moon</Link></li>
                        </ul>
                    </li>
                    <li className="nav-float-right">
                        <div className="hamburger-icon-container" onClick={event => toggleHamburger(event)}>
                            <div className="hamburger-icon-bar1"></div>
                            <div className="hamburger-icon-bar2"></div>
                            <div className="hamburger-icon-bar3"></div>
                        </div>
                    </li>
                </ul>
            </nav>
            <div id="nav-menu">
                <div className="nav-menu-spacing"></div>
                <div className="nav-menu-links">
                    <ul>
                        <li><Link id="nav-link-project-earth" className="nav-menu-link" to={"/"}>Home</Link><hr /></li>
                        <li><Link id="nav-link-project-earth" className="nav-menu-link" to={"/project-earth"}>Project Earth</Link><hr /></li>
                        <li><Link id="nav-link-project-moon" className="nav-menu-link" to={"/project-moon"}>Project Moon</Link><hr /></li>
                    </ul>
                </div>
            </div>       
        </header>
    );
}

export default NavBar;