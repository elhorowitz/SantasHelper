import React from "react";

import WishListHeader from "./components/wishListHeader/wishListHeader";
import WishListRow from "./components/wishListRow/wishListRow";
import Table from "../components/table/table";
import Navigation from "../components/navigation/navigation";

import "./familyWishList.css";

function FamilyWishList({ isFamily }) {
  const rows = ["Item 1", "Item 2", "Item 3"].map((item) => (
    <WishListRow item={item} />
  ));

  return (
    <section className="FamilyWishList">
      <header className="FamilyWishList__header">
        <h1 className="FamilyWishList__header--title">
          Dearest{" "}
          <span className="FamilyWishList__header--title--alt">Santa</span>,
        </h1>
        <h2 className="FamilyWishList__header--subtitle">
          {isFamily
            ? "Let me help you with these items for my family:"
            : "For Christmas, may I please have:"}
        </h2>
      </header>

      <div className="FamilyWishList__body">
        <Table
          isordered={true}
          header={<WishListHeader isFamily={isFamily} />}
          rows={rows}
        ></Table>
      </div>

      <footer className="FamilyWishList__footer">
        <Navigation />
      </footer>
    </section>
  );
}

export default FamilyWishList;
