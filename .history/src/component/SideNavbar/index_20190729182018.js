import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Icon from '../Icon';
import navIcon from './navIcons';
import './sidenavbar.scss';

const SideNavbar = () => (
  <div className="sidenavbar">
    <Nav
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <div className="navbar">
        <Nav.Item>
          <Nav.Link href="/home">
            <Icon path={homeIcon} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Icon path={communityIcon} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Icon path={fileIcon} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Icon path={powerIcon} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Icon path={twitterIcon} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Icon path={settingIcon} />
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  </div>
);

export default SideNavbar;
