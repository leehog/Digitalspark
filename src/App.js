import React, { Component } from 'react';
import './App.css';
import {Pager} from "react-bootstrap";

import ReactPageScroller from "./react-page-scroller/index";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    getPagesNumbers = () => {

        const pageNumbers = [];

        for (let i = 1; i <= 2; i++) {
            pageNumbers.push(
                <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pager.Item>
            )
        }

        return [...pageNumbers];
    };

  render() {

    const pagesNumbers = this.getPagesNumbers();

    return (
      <div className="App">
      <React.Fragment>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <FirstComponent/>
                <SecondComponent/>
            </ReactPageScroller>
            <Pager className="pagination-additional-class" bsSize="large">
                {pagesNumbers}
            </Pager>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
