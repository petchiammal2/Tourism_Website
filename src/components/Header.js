import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [activeLink, setActiveLink] = useState("Home");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <header>
            <nav>
                <div className="logo">TourNest.com</div>
                <ul className="nav-links">
                    <li
                        className={activeLink === "Home" ? "active" : ""}
                        onClick={() => handleLinkClick("Home")}
                    >
                        Home
                    </li>
                    <li
                        className={activeLink === "About" ? "active" : ""}
                        onClick={() => handleLinkClick("About")}
                    >
                        About
                    </li>
                    <li
                        className={activeLink === "Services" ? "active" : ""}
                        onClick={() => handleLinkClick("Services")}
                    >
                        Services
                    </li>
                    <li
                        className={activeLink === "Blog" ? "active" : ""}
                        onClick={() => handleLinkClick("Blog")}
                    >
                        Blog
                    </li>
                    <li
                        className={activeLink === "Contact" ? "active" : ""}
                        onClick={() => handleLinkClick("Contact")}
                    >
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
