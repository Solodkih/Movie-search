import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setAuthor } = authorSlice.actions;

export default authorSlice.reducer;
