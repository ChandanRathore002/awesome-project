import React from 'react';
import InputBox from '../../component/InputBox';

const LoginForm = () => (
  <div className="login-form">
    <div className="form-group">
      <InputBox placeholder="Email address" formClass="form-control" />
    </div>
  </div>
);

export default LoginForm;