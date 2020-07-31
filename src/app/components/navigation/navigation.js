import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as GiftBagEmpty } from "../../../assets/icons/sleigh-full.svg";
import { ReactComponent as GiftBagFull } from "../../../assets/icons/sleigh-empty.svg";

import "./navigation.css";

function Navigation() {
  return (
    <ol className="Navigation">
      <li className="Navigation__item">
        <NavLink
          activeClassName="Navigation__item__link--active"
          className="Navigation__item__link"
          to="/family"
        >
          <GiftBagEmpty />
        </NavLink>
      </li>
      <li className="Navigation__item">
        <NavLink
          activeClassName="Navigation__item__link--active"
          className="Navigation__item__link"
          to="/personal"
        >
          <GiftBagFull />
        </NavLink>
      </li>
    </ol>
  );
}

export default Navigation;
