import React from 'react';
import { useSelector } from 'react-redux';

import SideBarLeft from './sideBarLeft';
import MainScene from './mainScene';
import { BigLoader } from '../components/loader/index';
import { selectAuthorStatusDownload } from '../redux/authorSlice';
import { selectWorkStatusDownload } from '../redux/bookSlice';

import './scene.scss';

export default function Main() {


  return (
    <>
      <div className="scene">
        <SideBarLeft className="scene__side-bar-left" />
        <MainScene className="scene__main-scene" />
      </div>
    </>
  );
}
