import React /*, { Component } */ from "react";
import "./Kurs.css";

//class Kurs extends Component {
/* Kann genutzt werden um Kurs zur aktuellen Uhrzeit zu erkennen, überprüfung auf Wochentag und Woche fehlt noch
  aktuell(){
    var start = this.props.info.Beginn.split(":");
    var end = this.props.info.Ende.split(":");

    var d1 = new Date();
    var d2 = new Date();
    var c = new Date();

    d1.setHours(start[0]);
    d1.setMinutes(start[1]);
    d2.setHours(end[0]);
    d2.setMinutes(end[1]);

    if (c > d1 && c < d2) {
      return true;
    }
    else {
      return false;
    }
  }
*/

//  render() {

const Kurs = props => {
  return (
    /*
      <div className={this.aktuell() ? "eintrag-aktiv" : "eintrag"}>
      */
    <div className="eintrag">
      <div className="left">
        <div className="time">
          {props.info.Beginn} <br />-<br /> {props.info.Ende}
        </div>
      </div>
      <div className="right">
        <p className="titel">{props.info.Titel}</p>
        <div className="infos">
          Dozent: {props.info.Dozent}{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Raum:{" "}
          {props.info.Raum}
        </div>
      </div>
    </div>
  );
};
//  }
//}

export default Kurs;
