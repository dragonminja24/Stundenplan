import React, { Component } from "react";
import './Kurs.css'

class Kurs extends Component {
  render() {
    return (
      <div className="eintrag">
        <p className="titel">{this.props.titel}</p>
        <p className="info">Dozent: {this.props.dozent}</p>
      </div>
    );
  }
}

export default Kurs;
