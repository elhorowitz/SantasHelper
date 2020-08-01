import React from 'react';

import './tableRow.css';

function TableRow(props) {
  return <li className="TableRow">{props.children}</li>;
}

export default TableRow;
