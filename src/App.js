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

  state = {
    isOpen: false,
  }
  render() {
    return (
      <div className="App">
      <div className={this.state.isOpen ? "sticky-nav open" : "sticky-nav closed"}>
      <Link activeClass="active" className="scroll-link" to="first-component" spy={true} smooth={true} duration={500} offset={-64} >Start</Link>
      <Link activeClass="active" className="scroll-link" to="second-component" spy={true} smooth={true} duration={500} offset={-64}>About us</Link>
      <Link activeClass="active" className="scroll-link" to="third-component" spy={true} smooth={true} duration={500} offset={-64}>Vad vi gör?</Link>
      <Link activeClass="active" className="scroll-link" to="fourth-component" spy={true} smooth={true} duration={500} offset={-64}>Our Consultants</Link>
      <Link activeClass="active" className="scroll-link" to="fifth-component" spy={true} smooth={true} duration={500} offset={-64}>Contact</Link>
      <div className="hamburger" onClick={ () => this.setState({isOpen: !this.state.isOpen}) }>=</div>
      </div>
      <React.Fragment>
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent/>
                <FourthComponent/>
                <FifthComponent/>
        </React.Fragment>
        <div className="footer">
            
        </div>
      </div>
    );
  }
}

export default App;
