import React, { Component } from "react";
import "./Tag.css";
import Firebase from "../../Firebase/Firebase";
import Kurs from "../Kurs/Kurs";

class Tag extends Component {
  state = {
    studiengang: this.props.studiengang,
    semester: this.props.semester,
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
  render() {
    var woche = this.props.match.params.woche === "gKW" ? 2 : 1;
    console.log(this.props.match.params.woche);
    console.log(woche);
    var data = this.state.dbData;
    if (data != null) {
      const Kurse = Object.keys(data).map(function(key, index) {
        var current = data[key];
        if (current.Woche === 0 || woche === current.Woche) {
          return <Kurs info={current} key={key} />;
        } else {
          return null;
        }
      });
      return <div className="main">{Kurse}</div>;
    }
    return <div className="main" />;
  }
}

export default Tag;
