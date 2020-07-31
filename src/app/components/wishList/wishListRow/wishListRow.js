import React from "react";

import "./wishListRow.css";

function WishListRow({ isFamily, item }) {
  return (
    <div className="WishListRow">
      {isFamily && <p>Member</p>}
      <p className="WishListRow__cell">{item.item}</p>
      <p className="WishListRow__cell">{item.notes}</p>
      <p className="WishListRow__cell">{item.links}</p>
    </div>
  );
}

export default WishListRow;
