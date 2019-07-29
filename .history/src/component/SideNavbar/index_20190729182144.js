import React from 'react';
import Nav from 'react-bootstrap/Nav';
import sideNav from './navIcons';
import './sidenavbar.scss';

const SideNavbar = () => (
  <div className="sidenavbar">
    <Nav
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <div className="navbar">
        
      </div>
    </Nav>
  </div>
);

export default SideNavbar;
