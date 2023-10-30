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
    statusDownloadAuthor: false,
  },
  reducers: {
    setAuthor: (state, action) => {
      return { ...action.payload, statusDownloadAuthor: state.statusDownloadAuthor };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthor.pending, (state, action) => {
      state.statusDownloadAuthor = true;
    });
    builder.addCase(fetchAuthor.fulfilled, (state, action) => {
      return { ...action.payload, statusDownloadAuthor: false };
    });
  },
});

export const selectAuthor = (state) => {
  return state.author;
};

export const selectAuthorStatusDownload = (state) => {
  return state.author.statusDownloadAuthor;
};

export const { setAuthor } = authorSlice.actions;

export default authorSlice.reducer;
