import React from 'react';
import PropTypes from 'prop-types';

import ItemMenu from '../../../components/itemMenu';
import imgSettings from '../../../icon/Settings.png';
import imgLogOut from '../../../icon/Exit.png';

export default function General({ className }) {
  return (
    <div className={`${className} menu-side-bar`}>
      <div className="menu-side-bar__logo">General</div>
      <ul className="menu-side-bar__list">
        <li>
          <ItemMenu img={imgSettings} name="Settings" alt="Settings" />
        </li>
        <li>
          <ItemMenu img={imgLogOut} name="Log Out" alt="Log Out" />
        </li>
      </ul>
    </div>
  );
}

General.propTypes = {
  className: PropTypes.string.isRequired,
};
