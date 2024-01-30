import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './scenes';
import StartScene from './scenes/mainScene/startScene';
import Book from './scenes/mainScene/book';
import Author from './scenes/mainScene/author';
import SearchList from './scenes/mainScene/searchList';
import BadUrl from './scenes/mainScene/badUrl';

import store from './redux/store';

function Redirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/books-search');
    console.log('Redirect');
  }, []);
  return null;
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/books-search" element={<Main />}>
            <Route index element={<StartScene />} />
            <Route path="works">
              <Route path=":worksId" element={<Book />} />
            </Route>
            <Route path="authors">
              <Route path=":authorId" element={<Author />} />
            </Route>
            <Route path="search/*" element={<SearchList />} />
            <Route path="*" element={<BadUrl />} />
          </Route>
          <Route path="*" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
