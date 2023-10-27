import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    bookData: {
      arrayUrlImage: [],
      subjects: [],
      subjectPlaces: [],
      subjectPeople: [],
      subjectTimes: [],
    },
    authors: [],
  },
  reducers: {
    setBook: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { setBook } = bookSlice.actions;

export default bookSlice.reducer;
