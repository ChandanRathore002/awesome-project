import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ classes, children }) => (
  <button
    type="button"
    className={classes}
  >
    {children}
  </button>
);

Button.propTypes = {
  classes: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
