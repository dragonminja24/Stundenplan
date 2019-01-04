import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Content from "./components/MainList/MainList";
import Drawer from "./components/SideDrawer/Drawer";
import Tag from "./components/Tag/Tag";
import FooterNavigation from "./components/FooterNavigation/FooterNavigation";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    studiengang: "Bachelor Informatik",
    semester: "Semester-3"
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

    dayRouter(){
      var d = new Date();
      const day = d.getDay(); // the method getDay will return a number of the current day 0 = sunday , 1 = monday
    let autoPath ='/';
    switch(day){
      case 0:{ autoPath = '/MO'; break;}
      case 1:{ autoPath = '/MO'; break;}
      case 2:{ autoPath = '/DI'; break;}
      case 3:{ autoPath = '/MI'; break;}
      case 4:{ autoPath = '/DO'; break;}
      case 5:{ autoPath = '/FR'; break;}
      case 6:{ autoPath = '/MO'; break;}
    }

    return "http://localhost:3000"+autoPath; //making the absolute path of current day for landing page
    
  }

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    const redirect = this.dayRouter(); // getting the current day
    return (
      <BrowserRouter>
      
        <div style={{ height: "100%" }}>
          <Route
            exact
            path = "/"
            render={() => (
              window.location = redirect // redirect from landing page to the current day page
            )}
          />
          <Route
            exact
            path="/MO"
            render={() => (
              <Tag
                studiengang={this.state.studiengang}
                semester={this.state.semester}
                tag="Montag"
              />
            )}
          />
          <Route
            exact
            path="/DI"
            render={() => (
              <Tag
                studiengang={this.state.studiengang}
                semester={this.state.semester}
                tag="Dienstag"
              />
            )}
          />
          <Route
            exact
            path="/MI"
            render={() => (
              <Tag
                studiengang={this.state.studiengang}
                semester={this.state.semester}
                tag="Mittwoch"
              />
            )}
          />
          <Route
            exact
            path="/DO"
            render={() => (
              <Tag
                studiengang={this.state.studiengang}
                semester={this.state.semester}
                tag="Donnerstag"
              />
            )}
          />
          <Route
            exact
            path="/FR"
            render={() => (
              <Tag
                studiengang={this.state.studiengang}
                semester={this.state.semester}
                tag="Freitag"
              />
            )}
          />

          <FooterNavigation />
          <Drawer drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
