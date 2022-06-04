import React from 'react';
import PropTypes from 'prop-types';

import './itemMenu.scss';

export default function ItemMenu({ img, name, alt }) {
  return (
    <div className="item-menu">
      <img className="item-menu__image" src={img} alt={alt} />
      <div className="item-menu__name">{name}</div>
    </div>
  );
}

ItemMenu.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
