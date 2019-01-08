import React, { Component } from "react";
import "./Tag.css";
import Firebase from "../../Firebase/Firebase";
import Kurs from "../Kurs/Kurs";

class Tag extends Component {
  state = {
    studiengang: this.props.studiengang,
    semester: this.props.semester,
    gruppe: this.props.gruppe,
    tag: this.props.tag,
    dbData: null
  };

  componentWillMount() {
    var saved = JSON.parse(localStorage.getItem(this.props.tag));
    if (
      saved != null &&
      saved.studiengang === this.props.studiengang &&
      saved.semester === this.props.semester
    ) {
      this.setState(saved);
    } else {
      let messagesRef = Firebase.database().ref(
        "Studiengaenge/" +
          this.props.studiengang +
          "/" +
          this.props.semester +
          "/" +
          this.props.tag
      );
      messagesRef.once("value", snapshot => {
        this.setState({ dbData: snapshot.val() });
        if (this.state.dbData != null) {
          localStorage.setItem(this.props.tag, JSON.stringify(this.state));
        }
      });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    var woche = this.props.match.params.woche === "gKW" ? 2 : 1;
    var gruppe = this.state.gruppe;
    var data = this.state.dbData;
    if (data != null) {
      const Kurse = Object.keys(data).map(function(key, index) {
        var current = data[key];
        if (
          (current.Woche !== 0 && woche !== current.Woche) ||
          (current.Gruppe !== 0 && gruppe !== current.Gruppe)
        ) {
          return null;
        } else {
          return <Kurs info={current} key={key} />;
        }
      });
      return <div className="main">{Kurse}</div>;
    }
    return <div className="main" />;
  }
}

export default Tag;
