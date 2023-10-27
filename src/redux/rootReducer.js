import { combineReducers } from '@reduxjs/toolkit';

import reducerAuthor from './authorSlice';

const rootReducer = combineReducers({
  author: reducerAuthor,
});

export default rootReducer;
