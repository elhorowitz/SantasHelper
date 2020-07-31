import React from "react";

import "./wishListHeader.css";

function WishListHeader({ isFamily, ...restProps }) {
  return (
    <div className="WishListHeader">
      {isFamily && <p className="WishListHeader__cell">Member</p>}
      <p className="WishListHeader__cell">Item</p>
      <p className="WishListHeader__cell">Description</p>
      <p className="WishListHeader__cell">Actions</p>
    </div>
  );
}

export default WishListHeader;
