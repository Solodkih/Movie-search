import React from 'react';
import PropTypes from 'prop-types';

import ItemMenu from '../../../components/itemMenu';
import imgHome from '../../../icon/Home.png';
import imgDiscovery from '../../../icon/Safari.png';
import imgAwards from '../../../icon/Award.png';
import imgCelebrities from '../../../icon/Verified.png';

import './menu.scss';

export default function Menu({ className }) {
  return (
    <div className={`${className} menu-side-bar`}>
      <div className="menu-side-bar__logo">Menu</div>
      <ul className="menu-side-bar__list">
        <li>
          <ItemMenu img={imgHome} name="Home" alt="Home" />
        </li>
        <li>
          <ItemMenu img={imgDiscovery} name="Discovery" alt="Discovery" />
        </li>
        <li>
          <ItemMenu img={imgAwards} name="Awards" alt="Awards" />
        </li>
        <li>
          <ItemMenu img={imgCelebrities} name="Celebrities" alt="Celebrities" />
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  className: PropTypes.string.isRequired,
};