import React from 'react';
import SideBarLeft from './sideBarLeft';
import SideBarRight from './sideBarRight';
import MainScene from './mainScene';

import './scene.scss';


export default function Main() {
  return (
    <div className="scene">
      <SideBarLeft className="scene__side-bar-left" />
      <MainScene className="scene__main-scene" />
    </div>
  );
}
//// <SideBarRight className="scene__side-bar-left" />
