import React from 'react';
import './navigation.scss';
import Seach from '../../../components/search';
import Profile from './profile';
import imageSearchButton from '../../../icon/Search.png';

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
