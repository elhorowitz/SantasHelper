import React, { useState, useEffect } from 'react';
import { FaCaretDown, FaCaretUp, FaEdit } from 'react-icons/fa';

import { ReactComponent as BuyIcon } from '../../../../assets/icons/gift.svg';

import Button from '../../button/button';
import InputField from '../../inputField/inputField';
import TextArea from '../../textArea/textArea';
import useForm from '../../../hooks/useForm';

import './wishListRow.css';

function WishListRow({
  handleDelete,
  handleEdit,
  handleSelect,
  handleUnselect,
  item,
}) {
  const [canBuy, setCanBuy] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setCanEdit(!!handleEdit);
    setCanBuy(!!handleSelect);
  }, [handleEdit, handleSelect]);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setIsExpanded(false);
  };

  const toggleExpand = () => {
    if (!isEditing) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleRemove = () => {
    if (
      window.confirm(
        `Are you sure you want to remove ${item.name} from your wishlist?`
      )
    ) {
      handleDelete();
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm({
    initialInputs: { link: item.link, notes: item.notes },
    onSubmit: handleEdit,
  });

  return (
    <div className="WishListRow__container">
      <div
        className={`WishListRow${isExpanded ? ' WishListRow--expanded' : ''}`}
      >
        <button className={'WishListRow__toggle'} onClick={toggleExpand}>
          <p className="WishListRow__toggle__label">
            {item.name}
            {isExpanded ? <FaCaretUp /> : <FaCaretDown />}
          </p>
          {item.isBought && (
            <p className="WishListRow__metadata">
              Purchased{item.isBoughtByMe && ' by me'}
              <BuyIcon className="WishListRow__metadata__icon" />
            </p>
          )}
        </button>

        {canEdit && (
          <button className="WishListRow__toggle__action" onClick={toggleEdit}>
            <FaEdit />
            <span>Edit</span>
          </button>
        )}
      </div>

      {isExpanded && (
        <div className="WishListRow__expand">
          <div className="WishListRow__expand__notes">
            <p>Notes:</p>
            <p>{item.notes || '--'}</p>
          </div>
          <div className="WishListRow__expand__links">
            <p>Links:</p>
            {(item.link && <a href={item.link}>{item.link}</a>) || '--'}
          </div>
          {canBuy && (
            <div className="WishListRow__expand__actions">
              {item.isBoughtByMe ? (
                <Button onClick={handleUnselect}>Return</Button>
              ) : (
                <Button onClick={handleSelect}>Buy</Button>
              )}
            </div>
          )}
        </div>
      )}

      {isEditing && (
        <form className="WishListRow__expand" onSubmit={handleSubmit}>
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
          <div className="WishListRow__expand__actions">
            <Button onClick={handleRemove} theme="secondary" type="button">
              Delete
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default WishListRow;
