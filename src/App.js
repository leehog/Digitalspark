import React, { Component } from 'react';
import './App.css';
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";
import FifthComponent from "./components/FifthComponent";

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class App extends Component {

  render() {
    return (
      <div className="App">
      <Link activeClass="active" className="scroll-link" to="first-component" spy={true} smooth={true} duration={500} >Start</Link>
      <Link activeClass="active" className="scroll-link" to="second-component" spy={true} smooth={true} duration={500} >About us</Link>
      <Link activeClass="active" className="scroll-link" to="third-component" spy={true} smooth={true} duration={500} >Vad vi gör?</Link>
      <Link activeClass="active" className="scroll-link" to="fourth-component" spy={true} smooth={true} duration={500} >Our Consultants</Link>
      <Link activeClass="active" className="scroll-link" to="fifth-component" spy={true} smooth={true} duration={500} >Contact</Link>

      <React.Fragment>
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent/>
                <FourthComponent/>
                <FifthComponent/>
        </React.Fragment>
        <div className="footer">
           <Link activeClass="active" className="scroll-link" to="first-component" spy={true} smooth={true} duration={500} >Start</Link>
           <Link activeClass="active" className="scroll-link" to="second-component" spy={true} smooth={true} duration={500} >About us</Link>
           <Link activeClass="active" className="scroll-link" to="third-component" spy={true} smooth={true} duration={500} >Vad vi gör?</Link>
           <Link activeClass="active" className="scroll-link" to="fourth-component" spy={true} smooth={true} duration={500} >Our Consultants</Link>
           <Link activeClass="active" className="scroll-link" to="fifth-component" spy={true} smooth={true} duration={500} >Contact</Link>
        </div>
      </div>
    );
  }
}

export default App;
