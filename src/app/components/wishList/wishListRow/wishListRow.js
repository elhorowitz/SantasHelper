import React from 'react';

import './wishListRow.css';

class WishListRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      item: props.item,
    };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    console.log('clicked! ', this.state.isExpanded);
    this.setState((state) => ({ isExpanded: !state.isExpanded }));
  }

  render() {
    const { isExpanded, item } = this.state;

    return (
      <div className="WishListRow">
        <button
          className={
            'WishListRow__toggle' +
            (isExpanded ? ' WishListRow__toggle--expanded' : '')
          }
          onClick={this.toggleExpand}
        >
          <p className="WishListRow__toggle__label">{item.name}</p>
        </button>

        {isExpanded && (
          <div className="WishListRow__expand">
            <div className="WishListRow__expand__notes">
              <p>Notes:</p>
              <p>{item.notes || '--'}</p>
            </div>
            <div className="WishListRow__expand__links">
              <p>Links:</p>
              {item.links.length ? (
                <ul>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <a href={link}>{link}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                '--'
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default WishListRow;
