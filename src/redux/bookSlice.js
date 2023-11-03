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
        authors: [],
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

export const selectBookByKey = (state, key) => {
  if (!state.book.worksList[`/works/${key}`])
    return state.book.worksList.workNotFound;
  return state.book.worksList[`/works/${key}`];
};

export const { setBook } = bookSlice.actions;

export default bookSlice.reducer;
