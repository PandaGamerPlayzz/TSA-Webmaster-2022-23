import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
    useEffect(() => {
        document.addEventListener("click", handleOutsideClick, true);
    });

    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleHamburger = (event) => {
        if(event.target) {
            let hamburger = event.target;
            if(hamburger.parentNode.classList.contains("hamburger-icon-container")) hamburger = hamburger.parentNode;

            hamburger.classList.toggle("hamburger-active");

            let menu = document.getElementById("nav-menu");
            menu.classList.toggle("menu-active");

            let body = document.getElementsByTagName("body")[0];
            body.classList.toggle("disable-scroll");
        }
    }

    const handleOutsideClick = (event) => {
        if(!menuRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
            let hamburger = document.getElementsByClassName("hamburger-icon-container")[0];
            hamburger.classList.remove("hamburger-active");

            let menu = document.getElementById("nav-menu");
            menu.classList.remove("menu-active");

            let body = document.getElementsByTagName("body")[0];
            body.classList.remove("disable-scroll");
        }
    }

    return (
        <>
            <nav className="nav-bar sticky">
                <ul>
                    <li className="nav-float-left"><Link id="nav-link-home" className="nav-logo" to={"/"}>Project Astra</Link></li>
                    <li className="nav-center">
                        <ul>
                            <li className="nav-float-left"><Link id="nav-link-project-terra" to={"/project-terra"}><span>01</span> Project Terra</Link></li>
                            <li className="nav-float-left"><Link id="nav-link-project-luna" to={"/project-luna"}><span>02</span> Project Luna</Link></li>
                        </ul>
                    </li>
                    <li className="nav-float-right">
                        <div className="hamburger-icon-container" ref={hamburgerRef} onClick={event => toggleHamburger(event)}>
                            <div className="hamburger-icon-bar1"></div>
                            <div className="hamburger-icon-bar2"></div>
                            <div className="hamburger-icon-bar3"></div>
                        </div>
                    </li>
                </ul>
            </nav>
            <div id="nav-menu" ref={menuRef}>
                <div className="nav-menu-spacing"></div>
                <div className="nav-menu-links">
                    <ul>
                        <li><Link id="nav-link-home" className="nav-menu-link" to={"/"}><span>00</span> Home</Link><hr /></li>
                        <li><Link id="nav-link-project-earth" className="nav-menu-link" to={"/project-terra"}><span>01</span> Project Terra</Link><hr /></li>
                        <li><Link id="nav-link-project-luna" className="nav-menu-link" to={"/project-luna"}><span>02</span> Project Luna</Link><hr /></li>
                    </ul>
                </div>
            </div>       
        </>
    );
}

export default NavBar;