import React, { useEffect, useState } from 'react';

import { ReactComponent as EmptySleighIcon } from '../../assets/icons/sleigh-empty.svg';
import { ReactComponent as FullSleighIcon } from '../../assets/icons/sleigh-full.svg';

import BasePage from '../components/basePage/basePage';
import Table from '../components/table/table';
import WishListRow from '../components/wishList/wishListRow/wishListRow';
import {
  buyWishlistItem,
  getFamily,
  getFamilyWishlist,
  returnWishlistItem,
} from '../services/backend';

import './familyWishList.css';

function FamilyWishList() {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    getFamily()
      .then((familyId) => getFamilyWishlist(familyId))
      .then((results) => {
        if (results.length) {
          setWishList(results);
        }
      });
  }, []);

  const getTableHeader = (memberName, memberTally) => (
    <div className="FamilyWishListHeader">
      <p className="FamilyWishListHeader__label">{memberName}'s Wishlist</p>
      <p
        className={`FamilyWishListHeader__metadata${
          memberTally <= 0 && ' FamilyWishListHeader__metadata--empty'
        }`}
      >
        {memberTally}{' '}
        {memberTally > 0 ? (
          <FullSleighIcon className="FamilyWishListHeader__metadata__icon" />
        ) : (
          <EmptySleighIcon className="FamilyWishListHeader__metadata__icon" />
        )}
      </p>
    </div>
  );

  const buyPresent = (memberId, itemName) =>
    buyWishlistItem(memberId, itemName);

  const returnPresent = (memberId, itemName) =>
    returnWishlistItem(memberId, itemName);

  const getRows = (id, wishList) =>
    wishList &&
    wishList.map((item, index) => (
      <WishListRow
        handleSelect={() => buyPresent(id, item.name)}
        handleUnselect={() => returnPresent(id, item.name)}
        item={item}
        key={index}
      />
    ));

  const getFamilyMembers = () =>
    wishList &&
    wishList.map((member) => (
      <li key={member.id}>
        <Table
          className="FamilyWishList__member"
          header={getTableHeader(member.name, member.itemsBought)}
          isordered={false}
          rows={getRows(member.id, member.wishlist)}
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
