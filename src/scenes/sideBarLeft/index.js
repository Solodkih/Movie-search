import React from 'react';
import PropTypes from 'prop-types';

import Logo from './logo';
import Menu from './menu';
import Library from './library';
import General from './general';

import './sideBarLeft.scss';

export default function SideBarLeft({ className }) {
  return (
    <aside className={`${className} side-bar-left`}>
      <div className="side-bar-left__container">
        <Logo className="side-bar-left__log" />
        <Menu className="side-bar-left__item" />
        <Library className="side-bar-left__item" />
        <General className="side-bar-left__item" />
      </div>
    </aside>
  );
}

SideBarLeft.propTypes = {
  className: PropTypes.string.isRequired,
};
