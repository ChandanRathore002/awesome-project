import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';

const Image = ({ classes, img }) => (
  <Img
    decode={false}
    src={img}
    className={classes}
  />
);

Image.propTypes = {
  classes: PropTypes.string,
  img: PropTypes.string,
};

Image.defaultProps = {
  classes: '',
  img: '',
};

export default Image;
