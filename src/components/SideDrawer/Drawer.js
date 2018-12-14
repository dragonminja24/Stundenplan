import React from 'react';

import './Drawer.css';

const drawer = props => (
  <div className="navigator">
    <button className="toggle-button" onClick={props.drawerClickHandler}>
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
    </button>
  </div>
);

export default drawer;
