import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Icon from '../Icon';
import { homeIcon } from '../../images/index';

const SideNavbar = () => (
  <div className="sidenavbar">
    <Nav
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">
          <Icon path={homeIcon} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
            Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
);

SideNavbar.propTypes = {
  path: PropTypes.string.isRequired,
};

export default SideNavbar;
