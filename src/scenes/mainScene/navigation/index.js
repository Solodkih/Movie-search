import React from 'react';
import './navigation.scss';
import Seach from './search';
import Profile from './profile';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div>Movies</div>
      <div>TV Shows</div>
      <div>Anime</div>
      <Seach />
      <Profile />
    </nav>
  );
}
