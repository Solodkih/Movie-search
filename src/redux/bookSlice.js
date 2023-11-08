import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBookByWorks } from '../util/AJAX/getBook';
import { fetchAuthor } from './authorSlice';

export const fetchWork = createAsyncThunk(
  'book/fetchWork',
  async (url, thunkAPI) => {
    const response = await getBookByWorks(url);
    response.authors.forEach((keyAuthor) => {
      thunkAPI.dispatch(fetchAuthor(keyAuthor));
    });
    return response;
  }
);

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
    statusDownloadWork: false,
  },
  reducers: {
    setBook: (state, action) => {
      state.worksList[action.payload.key] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWork.pending, (state) => {
      state.statusDownloadWork = true;
    });
    builder.addCase(fetchWork.fulfilled, (state, action) => {
      state.statusDownloadWork = false;
      state.worksList[action.payload.key] = action.payload;
    });
  },
});

export const selectBookByKey = (state, key) => {
  if (!state.book.worksList[`/works/${key}`])
    return state.book.worksList.workNotFound;
  return state.book.worksList[`/works/${key}`];
};

export const selectWorkStatusDownload = (state) => {
  return state.book.statusDownloadWork;
};

export const { setBook } = bookSlice.actions;

export default bookSlice.reducer;
