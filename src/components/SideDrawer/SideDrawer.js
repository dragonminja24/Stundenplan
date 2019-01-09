import React, { Component } from "react";
import "./SideDrawer.css";
import Dropdown from "./Dropdown/Dropdown";
class sideDrawer extends Component {
  constructor(props) {
    super(props);
  }

  /*
  let contentClasses = "dropdown-content";
  let e1 = "el";
  let e2 = "el";
  let e3 = "el";
  let e4 = "el";
  let tmp = "";
*/

  /*
  if (props.data.showContent) {
    e1 = "el";
    e2 = "el";
    e3 = "el";
    e4 = "el";

    switch (props.data.studiengang) {
      case "Bachelor Informatik":
        tmp = "Bachelor Informatik";
        e1 = "el hide";
        break;
      case "Bachelor Wirtschaftsinformatik":
        tmp = "Bachelor Wirtschaftsinformatik";
        e2 = "el hide";
        break;
      case "Master Autonomous Systems":
        tmp = "Master Autonomous Systems";
        e3 = "el hide";
        break;
      case "Master CSN":
        tmp = "Master CSN";
        e4 = "el hide";
        break;
      default:
        break;
    }

    contentClasses = "dropdown-content show";
  }

  return (
    <div className={drawerClasses}>
      <button onClick={props.contentClickHandler} className="dropbtn">
        {props.data.studiengang}
      </button>
      <div className={contentClasses}>
        <p onClick={tmp => props.changeStudiengang.bind(tmp)} className={e1}>
          Bachelor Informatik{" "}
        </p>
      </div>
      <div className={contentClasses}>
        <p onClick={tmp => props.changeStudiengang.bind(tmp)} className={e2}>
          Bachelor Wirtschaftsinformatik
        </p>
      </div>
      <div className={contentClasses}>
        <p onClick={tmp => props.changeStudiengang.bind(tmp)} className={e3}>
          Master Autonomous Systems
        </p>
      </div>
      <div className={contentClasses}>
        <p onClick={tmp => props.changeStudiengang.bind(tmp)} className={e4}>
          Master CSN
        </p>
      </div>
    </div>
  );
  */

  render() {
    if (this.props.data.sideDrawerOpen) {
      this.drawerClasses = "side-drawer open";
    } else {
      this.drawerClasses = "side-drawer";
    }
    return (
      <div className={this.drawerClasses}>
        <Dropdown changeStudiengang={this.props.changeStudiengang}/>
      </div>
    );
  }
}

export default sideDrawer;
