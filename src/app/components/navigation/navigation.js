import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as SantaIcon } from "../../../assets/icons/santa.svg";
import { ReactComponent as ElfIcon } from "../../../assets/icons/elf.svg";

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
          <ElfIcon title="Family wish list" />
        </NavLink>
      </li>
      <li className="Navigation__item">
        <NavLink
          activeClassName="Navigation__item__link--active"
          className="Navigation__item__link"
          to="/personal"
        >
          <SantaIcon title="Personal wish list" />
        </NavLink>
      </li>
    </ol>
  );
}

export default Navigation;
