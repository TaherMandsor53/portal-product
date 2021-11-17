import React, { useState } from 'react';
import InputComp from '../../common-components/InputComp';

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    userName: '',
    password: '',
  });

  const [userDetailsError, setUserDetailsError] = useState({
    userNameError: '',
    passwordError: '',
  });

  const onLoginClick = () => {
    const isValidUserName = userDetails.userName.length > 0;
    const isValidPass = userDetails.password.length > 0;
    if (isValidUserName && isValidPass) {
    } else {
      setUserDetailsError(prevState => ({
        ...prevState,
        userNameError: !isValidUserName ? 'Please enter valid username' : '',
        passwordError: !isValidPass ? 'Please enter valid password' : '',
      }));
    }
  };

  const onUserDetailChange = event => {
    const { name, value } = event;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const onCancelClick = () => {
    setUserDetailsError({ userNameError: '', passwordError: '' });
    setUserDetails({ userName: '', password: '' });
  };

  return (
    <div className="login-details">
      <div className="login-header">Login</div>
      <div className="login-email-container">
        <InputComp
          placeholderText="Username"
          inputType="text"
          inputTxt="userName"
          onInputChange={onUserDetailChange}
          errorMsg={userDetailsError.userNameError}
        />
      </div>
      <div className="login-email-container">
        <InputComp
          placeholderText="Password"
          inputType="password"
          inputTxt="password"
          onInputChange={onUserDetailChange}
          errorMsg={userDetailsError.userNameError}
        />
      </div>
      <div className="button-container">
        <button className="login-btn" onClick={onLoginClick}>
          Login
        </button>
        <button className="cancel-btn" onClick={onCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
}
