import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../../common-components/InputComp';
import { getUserDetails } from '../../action/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const userDetailsData = useSelector(state => state.userDetails.userDetailsData.userData);

  const [userDetails, setUserDetails] = useState({
    userName: '',
    password: '',
  });

  const [userDetailsError, setUserDetailsError] = useState({
    userNameError: '',
    passwordError: '',
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  const onLoginClick = () => {
    const isValidUserName = userDetails.userName.length > 0;
    const isValidPass = userDetails.password.length > 0;
    if (
      isValidUserName &&
      isValidPass &&
      userDetailsData.loginId === userDetails.userName &&
      userDetailsData.pass === userDetails.password
    ) {
      window.location.pathname = '/home';
      setIsAuthenticated(true);
    } else {
      setUserDetailsError(prevState => ({
        ...prevState,
        userNameError: !isValidUserName ? 'Please enter valid username' : '',
        passwordError: !isValidPass ? 'Please enter valid password' : '',
      }));
    }
  };

  const onUserDetailChange = event => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const onCancelClick = () => {
    setUserDetailsError({ userNameError: '', passwordError: '' });
    setUserDetails({ userName: '', password: '' });
  };

  return (
    <>
      <div className="login-details">
        <div className="login-header">Login</div>
        <div className="login-form">
          <InputComp
            placeholderText="Username"
            inputType="text"
            inputTxt="userName"
            inputVal={userDetails.userName}
            onInputChange={onUserDetailChange}
            errorMsg={userDetailsError.userNameError}
          />

          <InputComp
            placeholderText="Password"
            inputType="password"
            inputTxt="password"
            inputVal={userDetails.password}
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
    </>
  );
}
