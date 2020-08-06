import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BasePage from '../components/basePage/basePage';
import Table from '../components/table/table';
import WishListRow from '../components/wishList/wishListRow/wishListRow';

import './personalWishList.css';

function PersonalWishList() {
  // Prepare states
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    axios.get('/api/family').then((res) => {
      return setWishList(res.data.data.wishlist);
    });
  }, []);

  const rows = wishList.map((item) => <WishListRow item={item} />);

  return (
    <BasePage description="For Christmas, may I please have:">
      <Table
        isordered={true}
        header={<p>Personal Wishlist</p>}
        rows={rows}
      ></Table>
    </BasePage>
  );
}

export default PersonalWishList;
