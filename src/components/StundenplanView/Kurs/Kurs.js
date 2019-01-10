import React, { Component } from "react";
import "./Kurs.css";

class Kurs extends Component {
  render() {
    return (
      <div className="eintrag">
        <div className="left">
          <div className="time">
            {this.props.info.Beginn} <br />-<br /> {this.props.info.Ende}
          </div>
        </div>
        <div className="right">
          <p className="titel">{this.props.info.Titel}</p>
          <div className="infos">
            Dozent: {this.props.info.Dozent} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Raum: {this.props.info.Raum}
          </div>
        </div>
      </div>
    );
  }
}

export default Kurs;
