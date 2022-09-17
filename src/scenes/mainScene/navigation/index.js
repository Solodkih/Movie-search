import React from 'react';
import './navigation.scss';
import Profile from './profile';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div>Movies</div>
      <div>TV Shows</div>
      <div>Anime</div>
      <Profile />
    </nav>
  );
}
