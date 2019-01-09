import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Tag from "./Tag/Tag";
import './StundenplanView.css'

class StundenplanView extends Component {
  calcWeek() {
    var d = new Date();
    var onejan = new Date(d.getFullYear(), 0, 1);
    var millisecsInDay = 86400000;
    var weekNumber = Math.ceil(
      ((d - onejan) / millisecsInDay + onejan.getDay() + 1) / 7
    );
    if (d.getDay() === 6) return weekNumber % 2 !== 0 ? "gKW" : "uKW";
    else return weekNumber % 2 === 0 ? "gKW" : "uKW";
  }

  dayRouter() {
    var week = this.calcWeek();
    var d = new Date();
    const day = d.getDay(); //number of the current day 0 = sunday , 1 = monday, etc
    let autoPath = "/";
    switch (day) {
      case 2: {
        autoPath = "/DI/" + week;
        break;
      }
      case 3: {
        autoPath = "/MI/" + week;
        break;
      }
      case 4: {
        autoPath = "/DO/" + week;
        break;
      }
      case 5: {
        autoPath = "/FR/" + week;
        break;
      }
      default: {
        autoPath = "/MO/" + week;
        break;
      }
    }
    return autoPath;
  }

  render() {
    console.log(this.props.location.key);
    return (
      <div>
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}
          >
          <div>
            <Route
              exact
              path="/"
              render={() => <Redirect to={this.dayRouter()} />}
            />
            <Route
              path="/MO/:woche(gKW|uKW)"
              render={props => (
                <Tag
                  {...props}
                  studiengang={this.props.data.studiengang}
                  semester={this.props.data.semester}
                  gruppe={this.props.data.gruppe}
                  tag="Montag"
                />
              )}
            />
            <Route
              path="/DI/:woche(gKW|uKW)"
              render={props => (
                <Tag
                  {...props}
                  studiengang={this.props.data.studiengang}
                  semester={this.props.data.semester}
                  gruppe={this.props.data.gruppe}
                  tag="Dienstag"
                />
              )}
            />
            <Route
              path="/MI/:woche(gKW|uKW)"
              render={props => (
                <Tag
                  {...props}
                  studiengang={this.props.data.studiengang}
                  semester={this.props.data.semester}
                  gruppe={this.props.data.gruppe}
                  tag="Mittwoch"
                />
              )}
            />
            <Route
              path="/DO/:woche(gKW|uKW)"
              render={props => (
                <Tag
                  {...props}
                  studiengang={this.props.data.studiengang}
                  semester={this.props.data.semester}
                  gruppe={this.props.data.gruppe}
                  tag="Donnerstag"
                />
              )}
            />
            <Route
              path="/FR/:woche(gKW|uKW)"
              render={props => (
                <Tag
                  {...props}
                  studiengang={this.props.data.studiengang}
                  semester={this.props.data.semester}
                  gruppe={this.props.data.gruppe}
                  tag="Freitag"
                />
              )}
            />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(StundenplanView);
