import React from 'react';
import './PageSlider.css';
import img from "/Users/jordan/Projects/myownpage-v1/src/img/bkg2.jpg";
import img2 from "/Users/jordan/Projects/myownpage-v1/src/img/logotipoekkoW.png";

function PageSlider() {
    return(
    <section className="banner">
        <div className="imgBox">
          <img src={img} alt=""/>
        </div>

        <div className="logoBox">
            <img className="center" src={img2} alt=""/>
        </div>
    </ section>
    );
 }


export default PageSlider;