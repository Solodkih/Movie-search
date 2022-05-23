import React from 'react';
import Navigation from './navigation';
import './mainScene.scss';
import TrendingBooks from './trendingBooks';

export default function MainScene({ className }) {
  return (
    <section className={`${className} main-scene`}>
      <div>
        <Navigation />
      </div>
      <TrendingBooks />
    </section>
  );
}
