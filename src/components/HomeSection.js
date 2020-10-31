import React from 'react';
import './HomeSection.css';
import logotipo from '../img/logotipoekkoW.png';

export default function HomeSection() {
    return (
            <div className="container">
                <div className="img-container">
                    <img src={logotipo} alt=""/>
                </div>
            </div>
    )
}
