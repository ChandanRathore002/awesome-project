import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import './input.scss';

const InputBox = ({ placeholder, formClass, type }) => (
  <Form.Control type={type} placeholder={placeholder} className={formClass} />
);

InputBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  formClass: PropTypes.string,
  type: PropTypes.string,
};

InputBox.defaultProps = {
  formClass: '',
  type: '',
};

export default InputBox;
