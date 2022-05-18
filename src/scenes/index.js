import React from 'react';
import SideBarLeft from './sideBarLeft';
import SideBarRight from './sideBarRight';
import MainScene from './mainScene';

export default function Main() {
  return (
    <div className='_container'>
      <SideBarLeft />
      <MainScene />
      <SideBarRight />
    </div>
  );
}
