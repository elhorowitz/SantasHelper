import React from 'react';

import './textArea.css';

function TextArea({ id, label, isOptional, ...restProps }) {
  const labelId = `${id}Label`;

  return (
    <div className="TextArea">
      <label className="TextArea__label" htmlFor={id} id={labelId}>
        {label}
        {isOptional && (
          <span className="TextArea__label--optional">Optional</span>
        )}
      </label>
      <textarea
        className="TextArea__input"
        id={id}
        name={id}
        aria-labelledby={labelId}
        rows={4}
        {...restProps}
      />
    </div>
  );
}

export default TextArea;
