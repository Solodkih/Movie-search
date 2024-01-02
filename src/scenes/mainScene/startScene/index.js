import React, { useEffect, useState } from 'react';
import { getBookSubjects } from '../../../util/AJAX/getBook';
import './startScene.scss';
import ItemListBooks from '../../../components/itemListBooks';

export default function StartScene() {
  return (
    <div className="start-scene">
      We are glad to welcome you to our website.
      <br />
      We hope you find everything you are looking for.
    </div>
  );
}
