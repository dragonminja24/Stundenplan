import React, { Component } from "react";
import Kurs from "./Kurs/Kurs";
import "./Tag.css";
import Firebase from '../../Firebase/Firebase';

class Tag extends Component {
  state = {
    dbData: null
  };

  componentWillMount() {
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
    });
  }
  render() {
    var data = this.state.dbData;
    if (data != null) {
      console.log(data);
      const Kurse = Object.keys(data).map(function(key, index) {
        var current = data[key];
        return <Kurs info={current} />;
      });
      return <div className="main">{Kurse}</div>;
    }
    return <div className="main" />;
  }
}

export default Tag;
