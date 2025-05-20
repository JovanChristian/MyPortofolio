import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './style.scss';

const data = [
    { label: 'Home', to: '/' },
    { label: 'About Me', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Resume', to: '/resume' },
    { label: 'Portofolio', to: '/portofolio' },
    { label: 'Contact', to: '/contact' }
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="navbar">
            <div className="navbar_container">
                <Link to="/" className="navbar_container_logo">
                    <img
                        src="/logo_portofolio_animal_no_background.png"
                        alt="JCE Logo"
                        style={{ height: "60px" }}
                    />
                </Link>

                <ul className={`navbar_container_menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar_container_menu_item">
                            <Link className="navbar_container_menu_item_links" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="nav-icon" onClick={handleToggleMenu}>
                    {isMobileMenuOpen ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
