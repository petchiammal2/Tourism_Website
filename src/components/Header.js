Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [activeLink, setActiveLink] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMenuOpen(false); // Close menu when a link is clicked
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header>
            <nav>
                <div className="logo">TourNest.com</div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                    <li
                        className={activeLink === "Home" ? "active" : ""}
                        onClick={() => handleLinkClick("Home")}
                    >
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        className={activeLink === "About" ? "active" : ""}
                        onClick={() => handleLinkClick("About")}
                    >
                        <Link to="/about">About</Link>
                    </li>
                    <li
                        className={activeLink === "Services" ? "active" : ""}
                        onClick={() => handleLinkClick("Services")}
                    >
                        <Link to="/services">Services</Link>
                    </li>
                    <li
                        className={activeLink === "Blog" ? "active" : ""}
                        onClick={() => handleLinkClick("Blog")}
                    >
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li
                        className={activeLink === "Contact" ? "active" : ""}
                        onClick={() => handleLinkClick("Contact")}
                    >
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
