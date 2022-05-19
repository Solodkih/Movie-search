import React from 'react';
import img from '../../../icon/Home.png';

import './menu.scss';

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__logo">Menu</div>
      <ul className="menu__list">
        <li>
          <div className="item">
            <img className="item__image" src={img} alt="Home" />
            <div className="item__name">Home</div>
          </div>
        </li>
        <li>
          <div>Discovery</div>
        </li>
        <li>
          <div>Awards</div>
        </li>
        <li>
          <div>Celebrities</div>
        </li>
      </ul>
    </div>
  );
}
