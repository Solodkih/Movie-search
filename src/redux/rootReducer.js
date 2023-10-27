import { combineReducers } from '@reduxjs/toolkit';

import reducerAuthor from './authorSlice';
import reducerBook from './bookSlice';

const rootReducer = combineReducers({
  author: reducerAuthor,
  book: reducerBook,
});

export default rootReducer;
