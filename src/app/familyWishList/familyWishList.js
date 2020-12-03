import React, { useEffect, useState } from 'react';

import { ReactComponent as EmptySleighIcon } from '../../assets/icons/sleigh-empty.svg';
import { ReactComponent as FullSleighIcon } from '../../assets/icons/sleigh-full.svg';

import BasePage from '../components/basePage/basePage';
import Table from '../components/table/table';
import WishListRow from '../components/wishList/wishListRow/wishListRow';
import { getFamilyWishlist } from '../services/backend';

import './familyWishList.css';

function FamilyWishList() {
  // Prepare states
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    getFamilyWishlist('Zs3xufcbxHX6TSolLc2g').then((results) => {
      if (results.length) {
        setWishList(results);
      }
    });
  }, []);

  const getTableHeader = (memberName) => (
    <div className="FamilyWishListHeader">
      <p className="FamilyWishListHeader__label">{memberName}'s Wishlist</p>
      <p className="FamilyWishListHeader__metadata">
        0 <EmptySleighIcon className="FamilyWishListHeader__metadata__icon" />
      </p>
    </div>
  );

  const getRows = (wishList) =>
    wishList &&
    wishList.map((item, index) => <WishListRow item={item} key={index} />);

  const getFamilyMembers = () =>
    wishList &&
    wishList.map((member) => (
      <li key={member.id}>
        <Table
          className="FamilyWishList__member"
          header={getTableHeader(member.name)}
          isordered={false}
          rows={getRows(member.wishlist)}
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
