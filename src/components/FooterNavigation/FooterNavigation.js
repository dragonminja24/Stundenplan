import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './FooterNavigation.css'

class FooterNavigation extends Component {
  render() {
    return (
      <footer className="App-footer">
        <div className="App-footer">
          <Link className="tag" to={"/MO"+this.props.location.pathname.substr(3,4)}>
            MO
          </Link>
          <Link className="tag" to={"/DI"+this.props.location.pathname.substr(3,4)}>
            DI
          </Link>
          <Link className="tag" to={"/MI"+this.props.location.pathname.substr(3,4)}>
            MI
          </Link>
          <Link className="tag" to={"/DO"+this.props.location.pathname.substr(3,4)}>
            DO
          </Link>
          <Link className="tag" to={"/FR"+this.props.location.pathname.substr(3,4)}>
            FR
          </Link>
        </div>
      </footer>
    );
  }
}

export default withRouter(FooterNavigation);
