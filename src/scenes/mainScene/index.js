import React from 'react';
import Navigation from './navigation';
import './mainScene.scss';

export default function MainScene({ className }) {
  return (
    <section className={`${className} main-scene`}>
      <div>
        <Navigation />
      </div>
      <div>MainScene</div>
    </section>
  );
}
