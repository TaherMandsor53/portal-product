import React, { useContext } from 'react';
export default function InputComp({ inputType, onInputChange, placeholderText, errorMsg, inputVal, inputTxt }) {
  const onHandleChange = e => {
    onInputChange(e);
  };
  return (
    <div className="input-details">
      <input
        type={inputType}
        onChange={onHandleChange}
        placeholder={placeholderText}
        className={errorMsg ? 'inputErrorClass' : 'inputClass'}
        value={inputVal}
        name={inputTxt}
      />
      {errorMsg && <div className="inputErrorMsg">{errorMsg}</div>}
    </div>
  );
}
