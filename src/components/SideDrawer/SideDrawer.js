import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if(props.show) {
    drawerClasses = 'side-drawer open';
  }

  return(
    <nav className={drawerClasses}>
      <a href="/">HELLO I AM</a>
      <a href="/">A</a>
      <a href="/">Link</a>
    </nav>
  );
};

export default sideDrawer;
