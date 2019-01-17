import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Drawer from "./components/SideDrawer/Drawer";
import FooterNavigation from "./components/FooterNavigation/FooterNavigation";
import StundenplanView from "./components/StundenplanView/StundenplanView";
import WeekHeader from "./components/WeekHeader/WeekHeader";

class App extends Component {
  constructor(props) {
    super(props);
    var saved = JSON.parse(localStorage.getItem("Settings"));
    if (saved !== null) {
      this.state = {
        showContent: false,
        sideDrawerOpen: false,
        studiengang: saved.studiengang,
        semester: saved.semester,
        gruppe: saved.gruppe
      };
    } else {
      this.state = {
        showContent: false,
        sideDrawerOpen: false,
        studiengang: "",
        semester: "",
        gruppe: ""
      };
    }
  }

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
      <BrowserRouter>
        <div style={{ minheight: "100vh" }}>
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
            drawerClickHandler={this.drawerToggleClickHandler}
          />
          {backdrop}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
