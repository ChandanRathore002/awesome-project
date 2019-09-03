import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classes }) => (
  <button
    type="button"
    className={classes}
  />
);

Button.propTypes = {
  classes: PropTypes.string.isRequired,
};

export default Button;
