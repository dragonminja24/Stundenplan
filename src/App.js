import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Drawer from "./components/SideDrawer/Drawer";
import FooterNavigation from "./components/FooterNavigation/FooterNavigation";
import StundenplanView from "./components/StundenplanView/StundenplanView";

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

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <BrowserRouter>
        <div style={{ height: "100%" }}>
          <StundenplanView data={this.state} />
          <FooterNavigation />
          <Drawer show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
