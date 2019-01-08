import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./WeekHeader.css";

class WeekHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <Link className="woche" to={this.props.location.pathname.substr(0,3) + "/gKW"}>
          gKW
        </Link>
        <Link className="woche" to={this.props.location.pathname.substr(0,3) + "/uKW"}>
          uKW
        </Link>
      </header>
    );
  }
}

export default withRouter(WeekHeader);
