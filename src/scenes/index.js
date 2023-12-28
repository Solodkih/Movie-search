import React from 'react';
import { useSelector } from 'react-redux';

import SideBarLeft from './sideBarLeft';
import MainScene from './mainScene';
import ModalWindowImage from './modalWindowImage';

import './scene.scss';

export default function Main() {
  const show = useSelector((state) => {
    return state.modalWindowImage.show;
  });
  return (
    <>
      {show && <ModalWindowImage />}
      <div className="scene">
        <SideBarLeft className="scene__side-bar-left" />
        <MainScene className="scene__main-scene" />
      </div>
    </>
  );
}
