import React from 'react';
import Main from './scenes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListBooks from './scenes/mainScene/listBooks';
import Book from './scenes/mainScene/book';
import Author from './scenes/mainScene/author';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<ListBooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
