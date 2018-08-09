import React, { Component } from 'react';
import './App.css';
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class App extends Component {

  render() {
    return (
      <div className="App">
      <Link activeClass="active" className="scroll-link" to="first-component" spy={true} smooth={true} duration={500} >Start</Link>
      <Link activeClass="active" className="scroll-link" to="second-component" spy={true} smooth={true} duration={500} >About us</Link>

      <React.Fragment>
                <FirstComponent/>
                <SecondComponent/>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
