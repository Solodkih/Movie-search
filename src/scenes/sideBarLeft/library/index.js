import React from 'react';
import ItemMenu from '../../../components/itemMenu';
import imgHome from '../../../icon/Home.png';
import imgDiscovery from '../../../icon/Safari.png';
import imgAwards from '../../../icon/Award.png';
import imgPlayLists from '../../../icon/Heart.png';
import imgWatchlist from '../../../icon/Add.png';

import imgCompleted from '../../../icon/Checked.png';

export default function Library() {
  return (
    <div className="menu-side-bar">
      <div className="menu-side-bar__logo">Library</div>
      <ul className="menu-side-bar__list">
        <li>
          <ItemMenu img={imgHome} name="Recent" alt="Recent" />
        </li>
        <li>
          <ItemMenu img={imgDiscovery} name="Top Rated" alt="Top Rated" />
        </li>
        <li>
          <ItemMenu img={imgAwards} name="DownLoaded" alt="DownLoaded" />
        </li>
        <li>
          <ItemMenu img={imgPlayLists} name="PlayLists" alt="PlayLists" />
        </li>
        <li>
          <ItemMenu img={imgWatchlist} name="Watchlist" alt="Watchlist" />
        </li>
        <li>
          <ItemMenu img={imgCompleted} name="Completed" alt="Completed" />
        </li>
      </ul>
    </div>
  );
}
