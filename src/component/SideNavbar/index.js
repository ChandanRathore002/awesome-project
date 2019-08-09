import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Icon from '../Icon';
import sideNav from './navIcons';
import csIcon from '../../images/cs-icon.svg';
import './sidenavbar.scss';

const SideNavbar = () => (
  <div className="sidenavbar">
    <Nav
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <div className="navbar">
        {sideNav.map(item => (
          <Nav.Item>
            <Nav.Link href="/home">
              <Icon title={item.title} path={item.img} />
            </Nav.Link>
          </Nav.Item>
        ))}
      </div>
      <div className="navbar">
        <Nav.Item>
          <Nav.Link href="/home">
            <Icon path={csIcon} />
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  </div>
);

export default SideNavbar;
