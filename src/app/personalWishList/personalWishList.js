import React, { useState, useEffect } from 'react';

import BasePage from '../components/basePage/basePage';
import Button from '../components/button/button';
import InputField from '../components/inputField/inputField';
import Table from '../components/table/table';
import TextArea from '../components/textArea/textArea';
import WishListRow from '../components/wishList/wishListRow/wishListRow';
import useForm from '../hooks/useForm';
import {
  getPersonalWishlist,
  removeFromPersonalWishlist,
  saveToPersonalWishlist,
  updatePersonalWishlist,
} from '../services/backend';

import './personalWishList.css';

function PersonalWishList() {
  const [wishList, setWishList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getPersonalWishlist().then((results) => {
      if (results.length) {
        setWishList(results);
      }
    });
  }, []);

  const updatePresent = (item) => updatePersonalWishlist(item);

  const removePresent = (item) => removeFromPersonalWishlist(item);

  const rows = wishList.map((item, index) => (
    <WishListRow
      handleEdit={updatePresent}
      handleDelete={removePresent}
      item={item}
      key={index}
    />
  ));

  const toggleForm = () => setShowForm(!showForm);

  const saveNewPresent = () => {
    saveToPersonalWishlist(inputs)
      .then(() => {
        toggleForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { inputs, handleInputChange, handleSubmit } = useForm({
    initialInputs: { name: '', link: '', notes: '' },
    onSubmit: saveNewPresent,
  });
  return (
    <BasePage description="For Christmas, may I please have:">
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <InputField
            id="name"
            label="Name"
            onChange={handleInputChange}
            value={inputs.name}
          />
          <InputField
            id="link"
            isOptional
            label="Link"
            onChange={handleInputChange}
            value={inputs.link}
          />
          <TextArea
            id="notes"
            isOptional
            label="Notes"
            onChange={handleInputChange}
            value={inputs.notes}
          />

          <div className="PersonalWishList__actions">
            <Button onClick={toggleForm} theme="secondary" type="button">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
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
