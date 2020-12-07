import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BasePage from '../components/basePage/basePage';
import Button from '../components/button/button';
import InputField from '../components/inputField/inputField';
import Table from '../components/table/table';
import TextArea from '../components/textArea/textArea';
import WishListRow from '../components/wishList/wishListRow/wishListRow';
import {
  getPersonalWishlist,
  saveToPersonalWishlist,
} from '../services/backend';

import './personalWishList.css';

function PersonalWishList() {
  // Prepare states
  const [wishList, setWishList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newPresent, setNewPresent] = useState({});

  useEffect(() => {
    getPersonalWishlist().then((results) => {
      if (results.length) {
        setWishList(results);
      }
    });
    setNewPresent({ name: '', link: '', notes: '' });
  }, []);

  const rows = wishList.map((item) => <WishListRow item={item} />);

  const toggleForm = () => setShowForm(!showForm);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPresent({ ...newPresent, [name]: value });
  };
  const saveNewPresent = (event) => {
    event.preventDefault();
    saveToPersonalWishlist(newPresent)
      .then(() => {
        toggleForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BasePage description="For Christmas, may I please have:">
      {showForm ? (
        <form>
          <InputField
            id="name"
            label="Name"
            onChange={handleChange}
            value={newPresent.name}
          />
          <InputField
            id="link"
            isOptional
            label="Link"
            onChange={handleChange}
            value={newPresent.link}
          />
          <TextArea
            id="notes"
            isOptional
            label="Notes"
            onChange={handleChange}
            value={newPresent.notes}
          />

          <div className="PersonalWishList__actions">
            <Button onClick={toggleForm} theme="secondary" type="button">
              Cancel
            </Button>
            <Button onClick={saveNewPresent}>Save</Button>
          </div>
        </form>
      ) : (
        <React.Fragment>
          <Table
            isordered={true}
            header={<p>Personal Wishlist</p>}
            rows={rows}
          ></Table>
          <div className="PersonalWishList__actions">
            <Button onClick={toggleForm}>Add</Button>
          </div>
        </React.Fragment>
      )}
    </BasePage>
  );
}

export default PersonalWishList;
