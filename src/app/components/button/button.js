import React from 'react';

import './button.css';

function Button({ children, theme, ...restProps }) {
  const { className } = restProps;
  const classes = ['Button', `Button--${theme ? theme : 'primary'}`, className]
    .filter((item) => !!item)
    .join(' ');
  return (
    <button {...restProps} className={classes}>
      {children}
    </button>
  );
}

export default Button;
