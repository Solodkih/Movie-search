import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';
import ListBooks from './listBooks';

import './mainScene.scss';

export default function MainScene({ className }) {
  return (
    <section className={`${className} main-scene`}>
      <div>
        <Navigation />
      </div>
      <ListBooks />
    </section>
  );
}

MainScene.propTypes = {
  className: PropTypes.string.isRequired,
};
