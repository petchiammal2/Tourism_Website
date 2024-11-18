import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active class
import './CSS/Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/services"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
