import React from 'react';
import Navigation from './navigation';
import './mainScene.scss';
import ListBooks from './listBooks';

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
