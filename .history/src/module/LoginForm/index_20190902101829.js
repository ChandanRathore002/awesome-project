import React from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import InputBox from '../../component/InputBox';
import Button from '../../component/Button';
import csLogo from '../../images/cs_logo.svg';


const LoginForm = () => (
  <div className="login-form">
    <div className="form-group">
      <div className="cs-logo">
        <Image src={csLogo} />
      </div>
      <Form>
        <Form.Group>
          <InputBox placeholder="Email address" type="email" />
        </Form.Group>
        <Form.Group>
          <InputBox placeholder="Password" type="password" />
        </Form.Group>
        <Form.Group>
          <Button placeholder="Password" type="password" />
        </Form.Group>
      </Form>
    </div>
  </div>
);

export default LoginForm;
