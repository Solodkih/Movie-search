import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './scenes';
import StartScene from './scenes/mainScene/startScene';
import Book from './scenes/mainScene/book';
import Author from './scenes/mainScene/author';
import SearchList from './scenes/mainScene/searchList';

import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<StartScene />} />
            <Route path="works">
              <Route path=":worksId" element={<Book />} />
            </Route>
            <Route path="authors">
              <Route path=":authorId" element={<Author />} />
            </Route>
            <Route path="search/*" element={<SearchList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
