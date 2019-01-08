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
    sideDrawerOpen: false,
    width: window.innerWidth,
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
          <WeekHeader />
          <StundenplanView data={this.state} />
       
          <FooterNavigation />
          drawer = <Drawer show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} />
          sideDrawer = <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>
       
      </BrowserRouter>
    );
  }
}

export default App;
