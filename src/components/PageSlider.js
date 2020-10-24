import React from 'react';
import './PageSlider.css';
import video from "/Users/jordan/Projects/myownpage-v1/src/mediafiles/video3.mp4";

function PageSlider() {
    return(
    <section className="banner">
        <div className="imgBox">
            <video poster="" autoplay muted loop src={video} type="video/mp4" alt=""/>
        </div>

        <div className="contentBox">
            <div>
                <h2>Slide text one</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit viverra, dictum tincidunt natoque. Mauris in habitant class facilisis bibendum placerat sed justo lectus euismod ad, primis varius viverra volutpat aliquam vel aenean augue mattis lobortis eleifend quam, hac purus tortor mus proin porta sodales montes inceptos ac. Commodo id tortor curae parturient scelerisque vestibulum hac ut, laoreet tincidunt hendrerit auctor cursus euismod torquent habitasse, massa tristique arcu fermentum dui ligula vulputate.</p>
                <a href="#">Details</a>
            </div>
            <div>
                <h2>Slide text two</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit viverra, dictum tincidunt natoque. Mauris in habitant class facilisis bibendum placerat sed justo lectus euismod ad, primis varius viverra volutpat aliquam vel aenean augue mattis lobortis eleifend quam, hac purus tortor mus proin porta sodales montes inceptos ac. Commodo id tortor curae parturient scelerisque vestibulum hac ut, laoreet tincidunt hendrerit auctor cursus euismod torquent habitasse, massa tristique arcu fermentum dui ligula vulputate.</p>
                <a href="#">Details</a>
            </div>
            <div>
                <h2>Slide text three</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit viverra, dictum tincidunt natoque. Mauris in habitant class facilisis bibendum placerat sed justo lectus euismod ad, primis varius viverra volutpat aliquam vel aenean augue mattis lobortis eleifend quam, hac purus tortor mus proin porta sodales montes inceptos ac. Commodo id tortor curae parturient scelerisque vestibulum hac ut, laoreet tincidunt hendrerit auctor cursus euismod torquent habitasse, massa tristique arcu fermentum dui ligula vulputate.</p>
                <a href="#">Details</a>
            </div>
            <div>
                <h2>Slide text four</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit viverra, dictum tincidunt natoque. Mauris in habitant class facilisis bibendum placerat sed justo lectus euismod ad, primis varius viverra volutpat aliquam vel aenean augue mattis lobortis eleifend quam, hac purus tortor mus proin porta sodales montes inceptos ac. Commodo id tortor curae parturient scelerisque vestibulum hac ut, laoreet tincidunt hendrerit auctor cursus euismod torquent habitasse, massa tristique arcu fermentum dui ligula vulputate.</p>
                <a href="#">Details</a>
            </div>
        </div>

        <ul className="controlU">
            <li ></li>
        </ul>
        <ul className="controlR">
            <li ></li>
        </ul>
        <ul className="controlD">
            <li ></li>
        </ul>
        <ul className="controlL">
            <li ></li>
        </ul>
    </ section>
    );
 }


export default PageSlider;