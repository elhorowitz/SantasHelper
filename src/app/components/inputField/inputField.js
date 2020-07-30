import React from 'react';

import './inputField.css';

function InputField({id, label, ...restProps}) {
  const labelId = `${id}Label`;

  return (
    <div className="InputField">
      <label className="InputField__label" htmlFor={id} id={labelId}>
        {label}
      </label>
      <input className="InputField__input" id={id} aria-labelledby={labelId} {...restProps} />
    </div>
  );
}

export default InputField;
