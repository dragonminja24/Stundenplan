import React, { Component } from "react";
import "./SideDrawer.css";
import Dropdown from "./Dropdown/Dropdown";
class sideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studiengang: "Bachelor Informatik",
      semester: "Semester-3",
      gruppe: "4"
    };

    this.handleStudiengangChange = this.handleStudiengangChange.bind(this);
    this.handleSemesterChange = this.handleSemesterChange.bind(this);
    this.handleGruppeChange = this.handleGruppeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStudiengangChange(event) {
    this.setState({ studiengang: event.target.value });
  }

  handleSemesterChange(event) {
    this.setState({ semester: event.target.value });
  }

  handleGruppeChange(event) {
    this.setState({ gruppe: event.target.value });
  }

  handleSubmit(event) {
    this.props.changeSettings(this.state);
    event.preventDefault();
  }

  render() {
    if (this.props.data.sideDrawerOpen) {
      this.drawerClasses = "side-drawer open";
    } else {
      this.drawerClasses = "side-drawer";
    }
    return (
      <div className={this.drawerClasses}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Studiengang:
            <div className="select-wrapper">
              <select
                value={this.state.studiengang}
                onChange={this.handleStudiengangChange}
              >
                <option value="Bachelor Informatik">Bachelor Informatik</option>
                <option value="Bachelor Wirtschaftsinformatik">
                  Bachelor Wirtschaftsinformatik
                </option>
                <option value="Master Autonomous Systems">
                  Master Autonomous Systems
                </option>
                <option value="Master CSN">Master CSN</option>
              </select>
            </div>
          </label>
          <br />

          <label>
            Semester:
            <div className="select-wrapper">
              <select
                value={this.state.semester}
                onChange={this.handleSemesterChange}
              >
                <option value="Semester-1">Semester-1</option>
                <option value="Semester-3">Semester-3</option>
                <option value="Semester-5">Semester-5</option>
              </select>
            </div>
          </label>
          <br />

          <label>
            Gruppe:
            <div className="select-wrapper">
              <select
                value={this.state.gruppe}
                onChange={this.handleGruppeChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </label>
          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default sideDrawer;
