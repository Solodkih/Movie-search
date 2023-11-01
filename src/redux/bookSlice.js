import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    worksList: {
      workNotFound: {
        arrayUrlImage: [],
        subjects: [],
        subjectPlaces: [],
        subjectPeople: [],
        subjectTimes: [],
      },
    },
    authors: [],
  },
  reducers: {
    setBook: (state, action) => {
      const { bookData, authors } = action.payload;
      state.worksList[bookData.key] = bookData;
      state.authors = authors;
    },
  },
});

export const { setBook } = bookSlice.actions;

export default bookSlice.reducer;
