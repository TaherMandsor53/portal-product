import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../../common-components/InputComp';
import './style.scss';

export default function Registration(props) {
  const [registrationDetails, setRegistrationDetails] = useState({
    name: '',
    userName: '',
    password: '',
    confirmPassword: '',
  });

  const [registrationFormError, setRegistrationFormError] = useState({
    nameError: '',
    userNameError: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  const onChangeRegistrationDetails = event => {
    const { name, value } = event.target;
    setRegistrationDetails({ ...registrationDetails, [name]: value });
  };

  const register = () => {
    const isValidName = registrationDetails.name.length > 0;
    const isValidUserName = registrationDetails.userName.length > 0;
    const isValidPassword = registrationDetails.password.length > 0;
    const isValidConfirmPassword = registrationDetails.password === registrationDetails.confirmPassword;

    if (isValidName && isValidUserName && isValidPassword && isValidConfirmPassword) {
    } else {
      setRegistrationFormError(prevState => ({
        ...prevState,
        nameError: !isValidName ? 'Please Enter Name' : '',
        userNameError: !isValidUserName ? 'Please enter valid username' : '',
        passwordError: !isValidPassword ? 'Please enter valid password' : '',
        confirmPasswordError: !isValidConfirmPassword ? 'Password does not match' : '',
      }));
    }
  };

  const onCancelClick = () => {
    setRegistrationFormError({ nameError: '', userNameError: '', passwordError: '', confirmPasswordError: '' });
    setRegistrationDetails({ name: '', userName: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="registration">
      <div className="registration-title">Sign Up !</div>
      <div className="register-form">
        <InputComp
          placeholderText="Name"
          inputType="text"
          inputTxt="name"
          onInputChange={onChangeRegistrationDetails}
          errorMsg={registrationFormError.nameError}
        />
        <InputComp
          placeholderText="User Name"
          inputType="text"
          inputTxt="userName"
          onInputChange={onChangeRegistrationDetails}
          errorMsg={registrationFormError.userNameError}
        />
        <InputComp
          placeholderText="Password"
          inputType="password"
          inputTxt="password"
          onInputChange={onChangeRegistrationDetails}
          errorMsg={registrationFormError.passwordError}
        />
        <InputComp
          placeholderText="Confirm Password"
          inputType="password"
          inputTxt="confirmPassword"
          onInputChange={onChangeRegistrationDetails}
          errorMsg={registrationFormError.confirmPasswordError}
        />
        Already have account ?<Link to="/">Login</Link>
        <div className="btns">
          <div>
            <button onClick={register} className="register-btn">
              Register
            </button>
          </div>
          <div>
            <button className="cancel-btn" onClick={onCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
