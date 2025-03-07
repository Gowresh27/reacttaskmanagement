

import React, { useState } from 'react';
import "./Auth.css";
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="auth-container">
      {isRegister ? <Signup /> : <Signin />}
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have an account? Signin" : "Don't have an account? Signup"}
      </button>
    </div>
  );
};

export default Auth;