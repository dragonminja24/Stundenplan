import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Content from "./components/MainList/MainList";
import Drawer from "./components/SideDrawer/Drawer";
import Tag from "./components/Tag/Tag";
import FooterNavigation from './components/FooterNavigation/FooterNavigation';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    studiengang: "Informatik",
    semester: "Semester-1"
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <BrowserRouter>
        <div style={{ height: "100%" }}>
          {/*<Content />*/}
          
          <Route exact path="/" component={Content} />
          <Route exact path="/MO" render={() => <Tag studiengang={this.state.studiengang} semester={this.state.semester} tag="Montag" />} />
          <Route exact path="/DI" render={() => <Tag studiengang={this.state.studiengang} semester={this.state.semester} tag="Dienstag" />} />
          <Route exact path="/MI" render={() => <Tag studiengang={this.state.studiengang} semester={this.state.semester} tag="Mittwoch" />} />
          <Route exact path="/DO" render={() => <Tag studiengang={this.state.studiengang} semester={this.state.semester} tag="Donnerstag" />} />
          <Route exact path="/FR" render={() => <Tag studiengang={this.state.studiengang} semester={this.state.semester} tag="Freitag" />} />

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
