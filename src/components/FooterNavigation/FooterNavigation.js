import React, { Component } from "react";
import { Link } from "react-router-dom";
import './FooterNavigation.css'

class FooterNavigation extends Component {
  render() {
    return (
      <footer className="App-footer">
        <div className="App-footer-two">
          <Link className="tag" to="/MO">
            MO
          </Link>
          <Link className="tag" to="/DI">
            DI
          </Link>
          <Link className="tag" to="/MI">
            MI
          </Link>
          <Link className="tag" to="/DO">
            DO
          </Link>
          <Link className="tag" to="/FR">
            FR
          </Link>
        </div>
      </footer>
    );
  }
}

export default FooterNavigation;
