import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Drawer from "./components/SideDrawer/Drawer";
import FooterNavigation from "./components/FooterNavigation/FooterNavigation";
import StundenplanView from "./components/StundenplanView/StundenplanView";
import WeekHeader from "./components/WeekHeader/WeekHeader";

class App extends Component {
  state = {
    showContent: false,
    sideDrawerOpen: false,
    width: window.innerWidth,
    studiengang: "Bachelor Informatik",
    semester: "Semester-3",
    gruppe: "4"
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  sideDrawerContentHandler = () => {
    this.setState(prevState => {
      return { showContent: !prevState.showContent };
    });
  };

  changeSettings = props => {
    this.setState({
      studiengang: props.studiengang,
      semester: props.semester,
      gruppe: props.gruppe
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div style={{ height: "100%" }}>
          <WeekHeader />
          <StundenplanView data={this.state} />

          <FooterNavigation />
          <Drawer
            show={this.state.sideDrawerOpen}
            drawerClickHandler={this.drawerToggleClickHandler}
          />
          <SideDrawer
            data={this.state}
            changeSettings={this.changeSettings}
            contentClickHandler={this.sideDrawerContentHandler}
          />
          {backdrop}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
