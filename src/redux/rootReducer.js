import { combineReducers } from '@reduxjs/toolkit';

import reducerAuthor from './authorSlice';
import reducerBook from './bookSlice';
import reducerSearch from './searchSlice';
import reducerModalWindowImage from './modalWindowImageSlice';
import reducerImage from './imageSlice';

const rootReducer = combineReducers({
  author: reducerAuthor,
  book: reducerBook,
  search: reducerSearch,
  image: reducerImage,
  modalWindowImage: reducerModalWindowImage,
});

export default rootReducer;
