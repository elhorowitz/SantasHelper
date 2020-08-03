import React from 'react';

import './button.css';

function Button({ children, ...restProps }) {
  return (
    <button className="Button" {...restProps}>
      {children}
    </button>
  );
}

export default Button;
