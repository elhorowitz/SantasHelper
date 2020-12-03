import React from 'react';

import './tableFooter.css';

function TableFooter(props) {
  return <li className="TableFooter">{props.children}</li>;
}

export default TableFooter;
