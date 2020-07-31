import React from "react";

import BasePage from "../components/basePage/basePage";
import Table from "../components/table/table";
import WishListRow from "../components/wishList/wishListRow/wishListRow";

import "./familyWishList.css";

function FamilyWishList() {
  const wishList = [
    {
      name: "Mom",
      wishList: [
        {
          item: "Sweater",
          notes: "I like green or purple",
          links: ["https://www.google.com"],
        },
      ],
    },
  ];

  const getRows = (wishList) =>
    wishList.map((member) =>
      member.wishList.map((item, index) => (
        <WishListRow item={item} key={index} />
      ))
    );

  const rows = getRows(wishList);

  return (
    <BasePage description="Let me help you with these items for my family:">
      <Table
        isordered={true}
        header={<p>Family Wishlist</p>}
        rows={rows}
      ></Table>
    </BasePage>
  );
}

export default FamilyWishList;
