import React /*, { Component } */ from "react";
import { Link, withRouter } from "react-router-dom";
import "./FooterNavigation.css";

//class FooterNavigation extends Component {
//  render() {
const FooterNavigation = props => {
  return (
    <footer className="App-footer">
      <Link
        className={
          props.location.pathname.substr(1, 2) === "MO"
            ? "aktueller-tag"
            : "tag"
        }
        to={"/MO" + props.location.pathname.substr(3, 4)}
      >
        MO
      </Link>
      <Link
        className={
          props.location.pathname.substr(1, 2) === "DI"
            ? "aktueller-tag"
            : "tag"
        }
        to={"/DI" + props.location.pathname.substr(3, 4)}
      >
        DI
      </Link>
      <Link
        className={
          props.location.pathname.substr(1, 2) === "MI"
            ? "aktueller-tag"
            : "tag"
        }
        to={"/MI" + props.location.pathname.substr(3, 4)}
      >
        MI
      </Link>
      <Link
        className={
          props.location.pathname.substr(1, 2) === "DO"
            ? "aktueller-tag"
            : "tag"
        }
        to={"/DO" + props.location.pathname.substr(3, 4)}
      >
        DO
      </Link>
      <Link
        className={
          props.location.pathname.substr(1, 2) === "FR"
            ? "aktueller-tag"
            : "tag"
        }
        to={"/FR" + props.location.pathname.substr(3, 4)}
      >
        FR
      </Link>
    </footer>
  );
};
//  }
//}

export default withRouter(FooterNavigation);
