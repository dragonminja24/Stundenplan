import React, { Component } from "react";
import "./SideDrawer.css";
import Firebase from "../Firebase/Firebase";

class sideDrawer extends Component {
  constructor(props) {
    super(props);
    var saved = JSON.parse(localStorage.getItem("Settings"));
    if (saved !== null) {
      this.state = {
        studiengang: saved.studiengang,
        semester: saved.semester,
        gruppe: saved.gruppe,
        dbData: null,
        selectStudiengaenge: <option value={saved.studiengang}>{saved.studiengang}</option>,
        selectSemester: <option value={saved.semester}>{saved.semester}</option>,
        selectGruppen: <option value={saved.gruppe}>{saved.gruppe}</option>
      };
    } else {
      this.state = {
        studiengang: "",
        semester: "",
        gruppe: "",
        dbData: null,
        selectStudiengaenge: null,
        selectSemester: null,
        selectGruppen: null
      };
    }

    this.handleStudiengangChange = this.handleStudiengangChange.bind(this);
    this.handleSemesterChange = this.handleSemesterChange.bind(this);
    this.handleGruppeChange = this.handleGruppeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    let messagesRef = Firebase.database().ref("Uebersicht");
    messagesRef.once("value", snapshot => {
      this.setState({ dbData: snapshot.val() });

      var data = this.state.dbData;
      var studiengaenge = null;
      var semester = null;
      var gruppen = null;
      if (data != null) {
        studiengaenge = Object.keys(data).map(function(key, index) {
          return (
            <option value={key} key={index}>
              {key}
            </option>
          );
        });
        if (this.state.studiengang !== "") {
          data = data[this.state.studiengang];
          semester = Object.keys(data).map(function(key, index) {
            return (
              <option value={key} key={index}>
                {key}
              </option>
            );
          });
          if (this.state.semester !== "") {
            data = data[this.state.semester];
            gruppen = Object.keys(data).map(function(key, index) {
              return (
                <option value={data[key]} key={index}>
                  {data[key]}
                </option>
              );
            });
          }
        }
      }

      this.setState({
        selectStudiengaenge: studiengaenge,
        selectSemester: semester,
        selectGruppen: gruppen
      });
    });
  }

  handleStudiengangChange(event) {
    this.setState({ studiengang: event.target.value });

    var data = this.state.dbData[event.target.value];
    var semester = Object.keys(data).map(function(key, index) {
      return (
        <option value={key} key={index}>
          {key}
        </option>
      );
    });
    this.setState({ selectSemester: semester, selectGruppen: null });
  }

  handleSemesterChange(event) {
    this.setState({ semester: event.target.value });

    var data = this.state.dbData[this.state.studiengang][event.target.value];
    var gruppen = Object.keys(data).map(function(key, index) {
      return (
        <option value={data[key]} key={index}>
          {data[key]}
        </option>
      );
    });
    this.setState({ selectGruppen: gruppen });
  }

  handleGruppeChange(event) {
    this.setState({ gruppe: event.target.value });
  }

  handleSubmit(event) {
    this.props.changeSettings(this.state);
    localStorage.setItem("Settings", JSON.stringify(this.state));
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
                <option value="" disabled>
                  Select your option
                </option>
                {this.state.selectStudiengaenge}
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
                <option value="" disabled>
                  Select your option
                </option>
                {this.state.selectSemester}
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
                <option value="" disabled>
                  Select your option
                </option>
                {this.state.selectGruppen}
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
