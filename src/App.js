import React, { Component } from 'react';

import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Content from './components/MainList/MainList';
import Drawer from './components/SideDrawer/Drawer';

class App extends Component {
  state = {
    sideDrawerOpen : false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };


  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div style={{height: '100%'}} >

      <Content />
      <Drawer drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      </div>
    );
  }
}

export default App;
