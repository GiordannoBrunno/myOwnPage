import React from 'react';
import './Navbar.css';

import img from '/Users/jordan/Projects/myownpage-v1/src/img/isotipoekkoW.png';

function Navbar() {
    return(
        <div className="navbar-container">
            <img className="logo" src={img} alt=""/>
            <i><a className="contact-link" href="#">Contact</a></i>
        </div>
    )

    }

export default Navbar;