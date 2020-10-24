import React from 'react';
import './Navbar.css';

import img from '/Users/jordan/Projects/myownpage-v1/src/img/chillsW.png';

function Navbar() {
    return(
        <div>
            <img className="logo" src={img} alt=""/>
        </div>
    )

    }

export default Navbar;