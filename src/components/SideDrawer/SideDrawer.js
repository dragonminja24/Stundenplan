import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  let contentClasses = 'dropdown-content';
  let e1 = 'el'; let e2 = 'el'; let e3 = 'el'; let e4 = 'el';
  let tmp = '';

    if(props.data.sideDrawerOpen) {
      drawerClasses = 'side-drawer open';
    }

    if(props.data.showContent){
      e1='el'; e2='el'; e3='el'; e4='el';

      switch(props.data.studiengang){
        case 'Bachelor Informatik' : tmp='Bachelor Informatik'; e1 = 'el hide'; break;
        case 'Bachelor Wirtschaftsinformatik' : tmp='Bachelor Wirtschaftsinformatik'; e2 = 'el hide'; break;
        case 'Master Autonomous Systems' : tmp='Master Autonomous Systems'; e3 = 'el hide'; break;
        case 'Master CSN' : tmp='Master CSN'; e4 = 'el hide'; break;
        default : break;
      }

      contentClasses ='dropdown-content show';
    }


  return(
    <div className={drawerClasses}>
     
        <button onClick={props.contentClickHandler} className="dropbtn">{props.data.studiengang}</button>
        <div className={contentClasses}>
          <p onClick={tmp => this.changeStudiengang.bind(tmp)} className={e1}>Bachelor Informatik </p>
        </div>
        <div className={contentClasses}>
          <p onClick={tmp => this.changeStudiengang.bind(tmp)} className={e2}>Bachelor Wirtschaftsinformatik</p>
        </div>
        <div className={contentClasses}>
          <p  onClick={tmp => this.changeStudiengang.bind(tmp)}  className={e3}>Master Autonomous Systems</p>
        </div>
        <div className={contentClasses}>
          <p onClick={tmp => this.changeStudiengang.bind(tmp)} className={e4}>Master CSN</p>
        </div>
     
    </div>
  );
};

export default sideDrawer;
