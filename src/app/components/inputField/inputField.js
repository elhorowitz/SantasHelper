import React from 'react';

import './inputField.css';

function InputField({ id, label, isOptional, ...restProps }) {
  const labelId = `${id}Label`;

  return (
    <div className="InputField">
      <label className="InputField__label" htmlFor={id} id={labelId}>
        {label}
        {isOptional && (
          <span className="InputField__label--optional">Optional</span>
        )}
      </label>
      <input
        className="InputField__input"
        id={id}
        name={id}
        aria-labelledby={labelId}
        {...restProps}
      />
    </div>
  );
}

export default InputField;
