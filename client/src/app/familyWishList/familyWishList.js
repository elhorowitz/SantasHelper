import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ReactComponent as EmptySleighIcon } from '../../assets/icons/sleigh-empty.svg';
import { ReactComponent as FullSleighIcon } from '../../assets/icons/sleigh-full.svg';

import BasePage from '../components/basePage/basePage';
import Table from '../components/table/table';
import WishListRow from '../components/wishList/wishListRow/wishListRow';

import './familyWishList.css';

function FamilyWishList() {
  // Prepare states
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    axios.get('/api/family').then((res) => {
      console.log(res);
      return setWishList(res.data.data);
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
