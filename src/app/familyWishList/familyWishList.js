import React from "react";

import Table from "../components/table/table";

import "./familyWishList.css";

function FamilyWishList(props) {
  const rows = ["Item 1", "Item 2", "Item 3"];

  return (
    <div className="FamilyWishList">
      <section className="FamilyWishList__list">
        <header>My WishList</header>
        <Table
          isordered={true}
          header="Items"
          footer="Footer"
          rows={rows}
        ></Table>
      </section>

      <section className="FamilyWishList__list">
        <header>Family WishList</header>
        <Table
          isordered={true}
          header="Items"
          footer="Footer"
          rows={rows}
        ></Table>
      </section>
    </div>
  );
}

export default FamilyWishList;
