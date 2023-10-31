import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getAuthor } from '../util/AJAX/getAuthor';

export const fetchAuthor = createAsyncThunk('author/fetchAuthor', async (url) => {
  const response = await getAuthor(url);
  return response;
});

export const authorSlice = createSlice({
  name: 'author',
  initialState: {
    authorList: {
      notFoundAuthor: {
        photos: [],
        alternateNames: [],
      },
    },
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
      state.statusDownloadAuthor = false;
      state.authorList[action.payload.key] = action.payload;
    });
  },
});

export const selectAuthor = (state, key) => {
  if (!state.author.authorList[key]) {
    return state.author.authorList.notFoundAuthor;
  }
  return state.author.authorList[key];
};

export const selectAuthorStatusDownload = (state) => {
  return state.author.statusDownloadAuthor;
};

export const { setAuthor } = authorSlice.actions;

export default authorSlice.reducer;
