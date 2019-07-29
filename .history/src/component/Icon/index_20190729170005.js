import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ path }) => (
  <img src={path} alt="Icon" className={icon} />
);

Icon.propTypes = {
  path: PropTypes.object.isRequired,
};

export default Icon;
