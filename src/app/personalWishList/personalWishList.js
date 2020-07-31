import React from "react";

import BasePage from "../components/basePage/basePage";
import Table from "../components/table/table";
import WishListHeader from "../components/wishList/wishListHeader/wishListHeader";
import WishListRow from "../components/wishList/wishListRow/wishListRow";

import "./personalWishList.css";

function PersonalWishList() {
  const wishList = [
    {
      item: "Shirts",
      notes: "I like turtles",
      links: ["https://www.google.com"],
    },
  ];

  const rows = wishList.map((item) => <WishListRow item={item} />);

  return (
    <BasePage description="For Christmas, may I please have:">
      <Table isordered={true} header={<WishListHeader />} rows={rows}></Table>
    </BasePage>
  );
}

export default PersonalWishList;
