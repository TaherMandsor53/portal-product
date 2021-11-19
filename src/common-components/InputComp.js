import React from 'react';

export default function InputComp({
  inputType,
  onInputChange,
  placeholderText,
  isReadOnly,
  errorMsg,
  inputVal,
  inputTxt,
}) {
  const onHandleChange = e => {
    onInputChange(e);
  };
  return (
    <div className="input-details">
      <input
        type={inputType}
        onChange={onHandleChange}
        placeholder={placeholderText}
        className={errorMsg ? 'inputErrorClass' : isReadOnly ? 'inputClass readOnly' : 'inputClass'}
        value={inputVal}
        name={inputTxt}
        readOnly={isReadOnly}
      />
      {errorMsg && <div className="inputErrorMsg">{errorMsg}</div>}
    </div>
  );
}
