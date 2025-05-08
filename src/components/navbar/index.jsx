import React from "react";
import {FaReact} from 'react-icons/fa';
import Home from "../../containers/home";
import {Link} from 'react-router-dom';

const data = [
    {
        label : 'Home',
        to : '/'
    }, 
    {
        label : 'About Me', 
        to : '/about'
    }, 
    {
        label : 'Skills', 
        to : '/skills'
    }, 
    {
        label : 'Resume', 
        to : '/resume'
    }, 
    {
        label : 'Portofolio',
        to : '/portofolio'
    }, 
    {
        label : 'Contact', 
        to : '/contact'
    }
]

const Navbar=()=>{
    return(
        <div>
            <nav className="navbar">
                <div className="navbar_container">

                    <Link to={'/'} className="navbar_container_logo">
                        <FaReact size={30}/>
                    </Link>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;