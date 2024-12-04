import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle the cleanup of event listeners or any other side effects
    useEffect(() => {
        // Example: Adding global event listener or managing event listeners if needed
        const handleResize = () => {
            console.log("Window resized");
        };

        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);  // Empty dependency array to run only on mount and unmount

    return (
        <header>
            <nav className="navbar">
                <div className="logo">TourNest.com</div>
                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? "✖" : "☰"}
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
                            to="/blog"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Blog
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
                            to="Gallery"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Gallery
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
