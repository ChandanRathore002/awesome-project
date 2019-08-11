import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'

const InputBox = ({ placeholder, formClass, type }) => (
  <Form>
    <Form.Control type={type} placeholder={placeholder} className={formClass} />
  </Form>
);

InputBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  formClass: PropTypes.string.isRequired,
}

export default InputBox;