import React from 'react';
import { NavLink } from 'react-router-dom';
import User from '../../assets/assets_Homework_Front-End_01/shape.png';
import IconDown from '../../assets/assets_Homework_Front-End_01/path_2.png';

const Navbar = () => {
  return (
    <div className="navcontainer">
      <div className="navmenu">
        <NavLink className="navmenuitem" to="#">
          SO FUNKTIONIERT'S
        </NavLink>
        <NavLink className="navmenuitem" to="#">
          SONDERANGEBOTE
        </NavLink>
        <div className="dropdown navmenuitem">
          <div className="dropbtn">
            <img src={User} className="icon"></img>MEIN BEREICH
            <img src={IconDown} className="icon"></img>
          </div>
          <div className="dropdown-content">
            <NavLink className="submenuitems" to="#">
              My published jokes
            </NavLink>
            <NavLink className="submenuitems" to="#">
              My saved jokes
            </NavLink>
            <NavLink className="submenuitems" to="#">
              Account Information
            </NavLink>
            <NavLink className="submenuitems" to="#">
              Publish new jokes
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
