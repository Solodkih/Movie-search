import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './navigation';
import ListBooks from './listBooks';
import { Outlet } from 'react-router-dom';
import './mainScene.scss';

export default function MainScene({ className }) {
  return (
    <section className={`${className} main-scene`}>
      <div>
        <Navigation />
      </div>
      <Outlet />
    </section>
  );
}

MainScene.propTypes = {
  className: PropTypes.string.isRequired,
};
