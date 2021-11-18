import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../../common-components/InputComp';
import { getProductDetails } from '../../action/action';

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    userName: '',
    password: '',
  });

  const [userDetailsError, setUserDetailsError] = useState({
    userNameError: '',
    passwordError: '',
  });

  useEffect(() => {
    getProductDetails();
  }, []);

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
      <div className="login-form">
        <InputComp
          placeholderText="Username"
          inputType="text"
          inputTxt="userName"
          onInputChange={onUserDetailChange}
          errorMsg={userDetailsError.userNameError}
        />

        <InputComp
          placeholderText="Password"
          inputType="password"
          inputTxt="password"
          onInputChange={onUserDetailChange}
          errorMsg={userDetailsError.passwordError}
        />
        <Link to="/register">Create an account</Link>
        <div className="button-container">
          <button className="login-btn" onClick={onLoginClick}>
            Login
          </button>
          <button className="cancel-btn" onClick={onCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
