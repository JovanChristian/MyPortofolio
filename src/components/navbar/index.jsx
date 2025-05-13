import React, { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const data = [
    { label: 'Home', to: '/' },
    { label: 'About Me', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Resume', to: '/resume' },
    { label: 'Portofolio', to: '/portofolio' },
    { label: 'Contact', to: '/contact' }
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const handleToggleIcon = () => setToggleIcon(!toggleIcon);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to='/' className="navbar_container_logo">
                        <img
                            src="/public/logo_portofolio_no_background"
                            alt="JCE Logo"
                            style={{ height: "40px" }}
                        />
                    </Link>
                </div>
                <ul className="navbar_container_menu">
                    {data.map((item, key) => (
                        <li key={key} className="navbar_container_menu_item">
                            <Link className="navbar_container_menu_item_links" to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
