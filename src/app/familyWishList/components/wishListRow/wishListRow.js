import React from "react";

import "./wishListRow.css";

function WishListRow({ isFamily, item, ...restProps }) {
  return (
    <div className="WishListRow">
      {isFamily && <p>Member</p>}
      <p className="WishListRow__cell">{item}</p>
      <p className="WishListRow__cell">Description</p>
      <p className="WishListRow__cell">Actions</p>
    </div>
  );
}

export default WishListRow;
