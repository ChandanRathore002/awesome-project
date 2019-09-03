import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classes, zasdasfdfdf }) => (
  <button
    type="button"
    className={classes}
  >
    {zasdasfdfdf}
  </button>
);

Button.propTypes = {
  classes: PropTypes.string.isRequired,
  zasdasfdfdf: PropTypes.node.isRequired,
};

export default Button;
