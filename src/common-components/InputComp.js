import React from 'react';

export default function InputComp({ inputType, onInputChange, placeholderText, errorMsg, inputVal, inputTxt }) {
  const onHandleChange = e => {
    onInputChange(e);
  };
  return (
    <>
      <input
        type={inputType}
        onChange={onHandleChange}
        placeholder={placeholderText}
        className={errorMsg ? 'inputClass' : 'inputErrorClass'}
        value={inputVal}
        name={inputTxt}
      />
      {errorMsg && <div className="inputErrorMsg">{errorMsg}</div>}
    </>
  );
}
