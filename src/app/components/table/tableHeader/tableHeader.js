import React from "react";

import "./tableHeader.css";

function TableHeader(props) {
  return <li className="TableHeader">{props.children}</li>;
}

export default TableHeader;
