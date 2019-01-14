import React from "react";

import "./Drawer.css";

const Drawer = props => {
  let drawerClasses = "navigator";
  if (props.show) {
    drawerClasses = "navigator-open";
  }

  return (
    <div className={drawerClasses}>
      <button className="toggle-button" onClick={props.drawerClickHandler}>
        <div className="button-lines">
          <div className="toggle-button_line" />
          <div className="toggle-button_line" />
          <div className="toggle-button_line" />
        </div>
      </button>
    </div>
  );
};

export default Drawer;
