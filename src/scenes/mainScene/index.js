import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Navigation from './navigation';
import './mainScene.scss';

export default function MainScene({ className }) {
  return (
    <section className={`${className} main-scene`}>
      <Navigation />
      <Outlet />
    </section>
  );
}

MainScene.propTypes = {
  className: PropTypes.string.isRequired,
};
