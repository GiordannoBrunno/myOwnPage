import React from 'react';
import './Navbar.css';
import isotipo from '../img/isotipoekkoW.png';

function Navbar() {
    return(
        <div className="navbar-container">
            <img className="logo" src={isotipo} alt=""/>
            <i><a className="contact-link" href="#">Contact</a></i>
        </div>
    )

    }

export default Navbar;