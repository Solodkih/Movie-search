import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getAuthor } from '../util/AJAX/getAuthor';

export const fetchAuthor = createAsyncThunk('author/fetchAuthor', async (url) => {
  const response = await getAuthor(url);
  return response;
});

export const authorSlice = createSlice({
  name: 'author',
  initialState: {
    photos: [],
    alternateNames: [],
  },
  reducers: {
    setAuthor: (state, action) => {
      return { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthor.fulfilled, (state, action) => {
      return { ...action.payload };
    });
  },
});

export const selectAuthor = (state) => {
  return state.author;
};

export const { setAuthor } = authorSlice.actions;

export default authorSlice.reducer;
