import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import User from '../../assets/assets_Homework_Front-End_01/shape.png';
import IconDown from '../../assets/assets_Homework_Front-End_01/path_2.png';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="navcontainer">
      <div className="navmenu">
        <NavLink className="navmenuitem" to="#">
          SO FUNKTIONIERT'S
        </NavLink>
        <NavLink className="navmenuitem" to="#">
          SONDERANGEBOTE
        </NavLink>
        <div className="dropdown navmenuitem cursor-pointer" onClick={() => setClicked(!clicked)}>
          <div className="dropbtn flex space-between">
            <div>
              <img src={User} className="icon" alt="a"></img>MEIN BEREICH
            </div>
            <div>
              <img src={IconDown} className="icon" alt="a"></img>
            </div>
          </div>
          <div className={`dropdown-content ${clicked ? '' : 'display-none'}`}>
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
