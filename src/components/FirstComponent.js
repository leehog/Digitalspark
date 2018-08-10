import React from "react";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default () => {
    return (
        <div className="component first-component">
            <div className="landing-page-content">
                <h1 className="company-name">DigitalSpark</h1>
                <div className="underline"></div>
                <h2>IT Consulting & Recruitment</h2>
                <div className="row landing-btn-wrap">
                    <Link activeClass="active" className="landing-btn" to="third-component" spy={true} smooth={true} duration={500} >Vad gör vi?</Link>
                    <Link activeClass="active" className="landing-btn" to="second-component" spy={true} smooth={true} duration={500} >Vilka är vi?</Link>
                </div>
            </div>
        </div>
    )
}
