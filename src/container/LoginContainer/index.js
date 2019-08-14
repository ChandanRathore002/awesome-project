import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import LoginForm from '../../module/LoginForm';

import './login.scss';

const LoginContainer = () => {
  useEffect(() => {
    document.body.classList.add('login-page');
  });
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default LoginContainer;
