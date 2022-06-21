import React from 'react';
import Main from './scenes';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import ListBooks from './scenes/mainScene/listBooks';
import Book from './scenes/mainScene/book';
import Author from './scenes/mainScene/author';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<ListBooks />} />
          <Route path="book/" element={<Book />} />
          <Route path="author/" element={<Author />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
