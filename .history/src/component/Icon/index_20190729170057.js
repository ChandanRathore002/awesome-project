import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ path, icon }) => (
  <img src={path} alt="Icon" className={icon} />
);

Icon.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Icon;
