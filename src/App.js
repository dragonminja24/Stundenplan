import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Content from "./components/MainList/MainList";
import Drawer from "./components/SideDrawer/Drawer";
import Firebase from "./components/Firebase/Firebase";
import Tag from "./components/Tag/Tag";
import FooterNavigation from './components/FooterNavigation/FooterNavigation';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    dbData: []
  };

  componentWillMount() {
    let messagesRef = Firebase.database().ref("Lehrveranstaltung");
    messagesRef.once("value", snapshot => {
      this.setState({ dbData: snapshot.val() });
    });
  }

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
          <Route exact path="/MO" render={() => <Tag data={this.state.dbData} />} />
          <Route exact path="/DI" render={() => <Tag data={this.state.dbData} />} />
          <Route exact path="/MI" render={() => <Tag data={this.state.dbData} />} />
          <Route exact path="/DO" render={() => <Tag data={this.state.dbData} />} />
          <Route exact path="/FR" render={() => <Tag data={this.state.dbData} />} />

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
