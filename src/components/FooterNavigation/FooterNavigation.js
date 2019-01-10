import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './FooterNavigation.css'

class FooterNavigation extends Component {
  render() {
    return (
      <footer className="App-footer">
        <div className="App-footer-two">
        <Link className={this.props.location.pathname.substr(1,2) === "MO" ? "aktueller-tag" : "tag"} to={"/MO"+this.props.location.pathname.substr(3,4)}>
            MO
          </Link>
          <Link className={this.props.location.pathname.substr(1,2) === "DI" ? "aktueller-tag" : "tag"} to={"/DI"+this.props.location.pathname.substr(3,4)}>
            DI
          </Link>
          <Link className={this.props.location.pathname.substr(1,2) === "MI" ? "aktueller-tag" : "tag"} to={"/MI"+this.props.location.pathname.substr(3,4)}>
            MI
          </Link>
          <Link className={this.props.location.pathname.substr(1,2) === "DO" ? "aktueller-tag" : "tag"} to={"/DO"+this.props.location.pathname.substr(3,4)}>
            DO
          </Link>
          <Link className={this.props.location.pathname.substr(1,2) === "FR" ? "aktueller-tag" : "tag"} to={"/FR"+this.props.location.pathname.substr(3,4)}>
            FR
          </Link>
        </div>
      </footer>
    );
  }
}

export default withRouter(FooterNavigation);
