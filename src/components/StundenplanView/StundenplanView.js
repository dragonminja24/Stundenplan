import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Tag from "./Tag/Tag";

class StundenplanView extends Component {
  dayRouter() {
    var d = new Date();
    const day = d.getDay(); //number of the current day 0 = sunday , 1 = monday, etc
    let autoPath = "/";
    switch (day) {
      case 2: {
        autoPath = "/DI";
        break;
      }
      case 3: {
        autoPath = "/MI";
        break;
      }
      case 4: {
        autoPath = "/DO";
        break;
      }
      case 5: {
        autoPath = "/FR";
        break;
      }
      default: {
        autoPath = "/MO";
        break;
      }
    }
    return autoPath;
  }

  render() {
    return (
      <div>
        <Redirect to={this.dayRouter()} />
        <Route
          exact
          path="/MO"
          render={() => (
            <Tag
              studiengang={this.props.data.studiengang}
              semester={this.props.data.semester}
              tag="Montag"
            />
          )}
        />
        <Route
          exact
          path="/DI"
          render={() => (
            <Tag
              studiengang={this.props.data.studiengang}
              semester={this.props.data.semester}
              tag="Dienstag"
            />
          )}
        />
        <Route
          exact
          path="/MI"
          render={() => (
            <Tag
              studiengang={this.props.data.studiengang}
              semester={this.props.data.semester}
              tag="Mittwoch"
            />
          )}
        />
        <Route
          exact
          path="/DO"
          render={() => (
            <Tag
              studiengang={this.props.data.studiengang}
              semester={this.props.data.semester}
              tag="Donnerstag"
            />
          )}
        />
        <Route
          exact
          path="/FR"
          render={() => (
            <Tag
              studiengang={this.props.data.studiengang}
              semester={this.props.data.semester}
              tag="Freitag"
            />
          )}
        />
      </div>
    );
  }
}

export default StundenplanView;
