import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ path, icon }) => (
  <img src={path} alt="Icon" className={icon} />
);

Icon.propTypes = {
  path: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Icon;
