import React, { Component } from "react";
import Kurs from './Kurs/Kurs';
import './Tag.css'

class Tag extends Component {
  render() {
    const Kurse = this.props.data.map(wert => {
      return <Kurs titel={wert.Titel} dozent={wert.Dozent} />;
    });

    return <div className="main">{Kurse}</div>;
  }
}

export default Tag;
