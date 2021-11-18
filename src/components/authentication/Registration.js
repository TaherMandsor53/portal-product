import React, { useState } from 'react';
import InputComp from '../../common-components/InputComp';

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
        passwordError: !isValidPass ? 'Please enter valid password' : '',
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
      <form className="registration-form">
        <InputComp
          placeholderText="Name"
          inputType="text"
          inputTxt="name"
          onInputChange={onChangeRegistrationDetails}
          errorMsg={userDetailsError.userNameError}
        />
        <InputComp
          placeholderText="User Name"
          inputType="text"
          inputTxt="userName"
          onInputChange={onChangeRegistrationDetails}
          errorMsg={userDetailsError.userNameError}
        />
        <InputComp
          placeholderText="Password"
          inputType="password"
          inputTxt="password"
          onInputChange={onChangeRegistrationDetails}
          errorMsg={userDetailsError.userNameError}
        />
        <InputComp
          placeholderText="Confirm Password"
          inputType="password"
          inputTxt="confirmPassword"
          onInputChange={onChangeRegistrationDetails}
          errorMsg={userDetailsError.userNameError}
        />
        <button onSubmit={register} className="register-btn">
          Register
        </button>
        <button className="cancel-btn" onClick={onCancelClick}>
          Cancel
        </button>
      </form>
    </div>
  );
}
