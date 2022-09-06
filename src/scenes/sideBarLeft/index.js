import React from 'react';
import PropTypes from 'prop-types';
import AdvanceSearch from './advanceSearch';

import Logo from './logo';

import './sideBarLeft.scss';

export default function SideBarLeft({ className }) {
  return (
    <aside className={`${className} side-bar-left`}>
      <div className="side-bar-left__container">
        <Logo className="side-bar-left__log" />
        <AdvanceSearch className="side-bar-left__item" />
      </div>
    </aside>
  );
}

SideBarLeft.propTypes = {
  className: PropTypes.string.isRequired,
};
