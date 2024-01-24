import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getBookByWorks from '../util/AJAX/getBook';
import { fetchAuthor } from './authorSlice';

export const STATUS_BOOK_DOWLOAD_PENDING = 'PENDING';
export const STATUS_BOOK_DOWLOAD_ERROR = 'ERROR';
export const STATUS_BOOK_DOWLOAD_FINISH = 'FINISH';
export const STATUS_BOOK_DOWLOAD_WAIT = 'WAIT';

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

const workNotFound = {
  arrayUrlImage: [],
  subjects: [],
  subjectPlaces: [],
  subjectPeople: [],
  subjectTimes: [],
  authors: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    worksList: {},
    statusDownloadWork: STATUS_BOOK_DOWLOAD_WAIT,
  },
  reducers: {
    setBook: (state, action) => {
      state.worksList[action.payload.key] = {
        ...state.worksList[action.payload.key],
        ...action.payload,
      };
    },
    addListBook: (state, action) => {
      action.payload.forEach((item) => {
        state.worksList[item.key] = {
          ...state.worksList[item.key],
          ...item,
        };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWork.pending, (state) => {
      state.statusDownloadWork = STATUS_BOOK_DOWLOAD_PENDING;
    });
    builder.addCase(fetchWork.rejected, (state) => {
      state.statusDownloadWork = STATUS_BOOK_DOWLOAD_ERROR;
    });
    builder.addCase(fetchWork.fulfilled, (state, action) => {
      state.statusDownloadWork = STATUS_BOOK_DOWLOAD_FINISH;
      state.worksList[action.payload.key] = {
        ...state.worksList[action.payload.key],
        ...action.payload,
      };
    });
  },
});

export const selectBookByKey = (state, key) => {
  if (!state.book.worksList[`/works/${key}`]) return workNotFound;
  return state.book.worksList[`/works/${key}`];
};

export const selectWorkStatusDownload = (state) => {
  return state.book.statusDownloadWork;
};

export const { setBook, addListBook } = bookSlice.actions;

export default bookSlice.reducer;
