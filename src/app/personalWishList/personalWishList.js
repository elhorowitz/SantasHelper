import React from "react";

import BasePage from "../basePage/basePage";

import WishListHeader from "../components/wishList/wishListHeader/wishListHeader";
import WishListRow from "../components/wishList/wishListRow/wishListRow";
import Table from "../components/table/table";

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
