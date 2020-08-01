import React from 'react';

import TableFooter from './tableFooter/tableFooter';
import TableHeader from './tableHeader/tableHeader';
import TableRow from './tableRow/tableRow';

import './table.css';

function Table({ isordered, header, rows, footer, ...restProps }) {
  if (isordered) {
    return (
      <ol className="Table" {...restProps}>
        {header && <TableHeader>{header}</TableHeader>}
        {rows &&
          rows.map((row, index) => <TableRow key={index}>{row}</TableRow>)}
        {footer && <TableFooter>{footer}</TableFooter>}
      </ol>
    );
  } else {
    return (
      <ul className="Table" {...restProps}>
        {header && <TableHeader>{header}</TableHeader>}
        {rows &&
          rows.map((row, index) => <TableRow key={index}>{row}</TableRow>)}
        {footer && <TableFooter>{footer}</TableFooter>}
      </ul>
    );
  }
}

export default Table;
