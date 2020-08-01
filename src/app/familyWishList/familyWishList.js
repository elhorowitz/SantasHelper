import React from "react";

import { ReactComponent as EmptyGiftBagIcon } from "../../assets/icons/gift-bag-empty.svg";
import { ReactComponent as FullGiftBagIcon } from "../../assets/icons/gift-bag-full.svg";

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
          name: "Sweater",
          notes: "I like green or purple",
          links: ["https://www.google.com"],
        },
        {
          name: "Slippers",
          notes: "I like my 40 year old ones",
          links: ["https://www.google.com", "https://www.google.com"],
        },
      ],
    },
    {
      name: "Dad",
      wishList: [
        {
          name: "Slippers",
          notes: "I like my 40 year old ones",
          links: ["https://www.google.com"],
        },
      ],
    },
  ];

  const getTableHeader = (memberName) => (
    <div className="FamilyWishListHeader">
      <p className="FamilyWishListHeader__label">{memberName}'s Wishlist</p>
      <p className="FamilyWishListHeader__metadata">
        0 <EmptyGiftBagIcon className="FamilyWishListHeader__metadata__icon" />
      </p>
    </div>
  );

  const getRows = (wishList) =>
    wishList.map((item, index) => <WishListRow item={item} key={index} />);

  const getFamilyMembers = () =>
    wishList.map((member, index) => (
      <li key={index}>
        <Table
          className="FamilyWishList__member"
          header={getTableHeader(member.name)}
          isordered={false}
          rows={getRows(member.wishList)}
        ></Table>
      </li>
    ));

  return (
    <BasePage description="Let me help you with these items for my family:">
      <ol>{getFamilyMembers()}</ol>
    </BasePage>
  );
}

export default FamilyWishList;
