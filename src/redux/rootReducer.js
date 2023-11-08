import { combineReducers } from '@reduxjs/toolkit';

import reducerAuthor from './authorSlice';
import reducerBook from './bookSlice';
import reducerSearch from './searchSlice';

const rootReducer = combineReducers({
  author: reducerAuthor,
  book: reducerBook,
  search: reducerSearch,
});

export default rootReducer;
