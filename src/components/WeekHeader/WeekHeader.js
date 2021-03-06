import React /*, { Component } */ from "react";
import { Link, withRouter } from "react-router-dom";
import "./WeekHeader.css";

//class WeekHeader extends Component {
//  render() {
  const WeekHeader = props => {
    return (
      <header className="App-header">
        <Link className={props.location.pathname.substr(4,3) === "gKW" ? "active" : "woche"} to={props.location.pathname.substr(0,3) + "/gKW"}>
          gKW
        </Link>
        <Link className={props.location.pathname.substr(4,3) === "uKW" ? "active" : "woche"} to={props.location.pathname.substr(0,3) + "/uKW"}>
          uKW
        </Link>
      </header>
    );
    }
//  }
//}

export default withRouter(WeekHeader);
