import React, { Component } from "react";
import './Kurs.css'

class Kurs extends Component {
  render() {
    return (
      <div className="eintrag">
        <p className="titel">{this.props.info.Titel}</p>
        <p className="info">Dozent: {this.props.info.Dozent}</p>
        <p className="info">Zeitraum: {this.props.info.Beginn} - {this.props.info.Ende}</p>
        <p className="info">Raum: {this.props.info.Raum}</p>
      </div>
    );
  }
}

export default Kurs;
