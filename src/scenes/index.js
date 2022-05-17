import React from 'react';
import SideBarLeft from './sideBarLeft';
import SideBarRight from './sideBarLeft';
import MainScene from './mainScene';

export default function Main() {
  return (
    <div>
      <SideBarLeft />
      <MainScene />
      <SideBarRight />
    </div>
  );
}
