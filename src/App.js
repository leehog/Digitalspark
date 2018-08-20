import React, { Component } from 'react';
import './App.css';
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ServiceComponent from "./components/Services";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";
import FifthComponent from "./components/FifthComponent";
import linkedIn from './linked.png'
import fb from './fb.png'
import menu from './menu.png'

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

/**
 * This utility function allows function calls to be debounced.
 * @param {Function} func Function that requires debouncing
 * @param {Number} wait Wait time in milliseconds between successive invocations
 */
const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

class App extends Component {

  state = {
    isOpen: false,
    scrollPositionY: 0,
  }
  
  componentDidMount() {
    return window.addEventListener('scroll', debounce(this.handleScroll, 20))
  }

  componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 20))
  }

  handleScroll = () => {
    // + is unary operator, same as Number(scrollPositionY)
    const scrollPositionY = +window.scrollY
    return this.setState({ scrollPositionY })
  }

  render() {
    const isScrolling = !!this.state.scrollPositionY

    return (
      <div className="App">
      <div className={"nav-wrap " + (this.state.isOpen ? "open" : "closed")}>
      <div className={"sticky-nav " + ((isScrolling) ? 'active-scroll' : '')}>
      <Link activeClass="active" onClick={ () => this.setState({isOpen: false}) } className="scroll-link" to="first-component" spy={true} smooth={true} duration={500} offset={-74} >Start</Link>
      <Link activeClass="active" onClick={ () => this.setState({isOpen: false}) } className="scroll-link" to="second-component" spy={true} smooth={true} duration={500} offset={-74}>About us</Link>
      <Link activeClass="active" onClick={ () => this.setState({isOpen: false}) } className="scroll-link" to="third-component" spy={true} smooth={true} duration={500} offset={-74}>Services</Link>
      <Link activeClass="active" onClick={ () => this.setState({isOpen: false}) } className="scroll-link" to="fourth-component" spy={true} smooth={true} duration={500} offset={-74}>Our Consultants</Link>
      <Link activeClass="active" onClick={ () => this.setState({isOpen: false}) } className="scroll-link" to="fifth-component" spy={true} smooth={true} duration={500} offset={-74}>Contact</Link>
      <div className="hamburger" onClick={ () => this.setState({isOpen: !this.state.isOpen}) }><img src={ menu } alt="menu"></img></div>
      </div>
      </div>
      <React.Fragment>
                <FirstComponent/>
                <SecondComponent/>
                <ServiceComponent/>
                <ThirdComponent/>
                <FourthComponent/>
                <FifthComponent/>
        </React.Fragment>
        <div className="footer container-fluid">
        <div className="row text-center">
            <div className="col-lg-4 col-md-4 col-sm-12 footer-content">
              <img src={ linkedIn } className="social"></img>
              <img src={ fb } className="social"></img>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 footer-content">©DigitalSpark 2018</div>
            <div className="col-lg-4 col-md-4 col-sm-12 footer-content"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
