import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import getBooksBySearch from '../util/AJAX/getBooksBySearch';
import { addListBook } from './bookSlice';

/* eslint no-use-before-define: 0 */
export const STATUS_DOWLOAD_PENDING = 'PENDING';
export const STATUS_DOWLOAD_ANSWER_IS_NULL = 'NULL';
export const STATUS_DOWLOAD_ERROR = 'ERROR';
export const STATUS_DOWLOAD_FINISH = 'FINISH';
export const STATUS_DOWLOAD_WAIT = 'WAIT';


export const fetchSearchListWork = createAsyncThunk(
  'search/fetchSearchListWork',
  async ({ params, page, url }, { dispatch }) => {
    const responsBooks = await getBooksBySearch(params, page);
    dispatch(addListBook(responsBooks.arrayWorks));
    const arrayKeyWorks = responsBooks.arrayWorks.map((item) => {
      return item.key;
    });
    dispatch(addPropsToSearchObject({ url, arrayKeyWorks }));
    dispatch(setMaxPageSearchObject({ url, maxPage: responsBooks.maxPage }));
    return responsBooks;
  }
);

export const createSelectListWorkByArrayKey = (arrayKey = []) => {
  const arrayFunctionsGetWork = arrayKey.map((item) => {
    return (state) => {
      return state.book.worksList[item];
    };
  });
  const selectWorkByArrayKey = createSelector(arrayFunctionsGetWork, (...args) => {
    return args.map((item) => {
      if (!item) {
        return {
          photos: [],
          alternateNames: [],
        };
      }
      return item;
    });
  });
  return selectWorkByArrayKey;
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    statusDownloadWork: STATUS_DOWLOAD_WAIT,
    seachList: {},
    pageList: {},
  },
  reducers: {
    addPropsToSearchObject: (state, action) => {
      const { url, arrayKeyWorks } = action.payload;
      if (!state.seachList[url]) {
        state.seachList[url] = arrayKeyWorks;
        return;
      }
      state.seachList[url] = [...state.seachList[url], ...arrayKeyWorks];
    },
    setPageSearchObject: (state, action) => {
      if (!state.pageList[action.payload.url]) {
        state.pageList[action.payload.url] = { page: action.payload.page };
        return;
      }
      state.pageList[action.payload.url].page = action.payload.page;
    },
    setMaxPageSearchObject: (state, action) => {
      if (!state.pageList[action.payload.url]) {
        state.pageList[action.payload.url] = { maxPage: action.payload.maxPage };
        return;
      }
      state.pageList[action.payload.url].maxPage = action.payload.maxPage;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchListWork.pending, (state) => {
      state.statusDownloadWork = STATUS_DOWLOAD_PENDING;
    });
    builder.addCase(fetchSearchListWork.rejected, (state, action) => {
      state.seachList[action.meta.arg.url] = null;
      state.statusDownloadWork = STATUS_DOWLOAD_ERROR;
    });
    builder.addCase(fetchSearchListWork.fulfilled, (state, action) => {
      if (action.payload.arrayWorks.length === 0) {
        state.statusDownloadWork = STATUS_DOWLOAD_ANSWER_IS_NULL;
      } else {
        state.statusDownloadWork = STATUS_DOWLOAD_FINISH;
      }
    });
  },
});

export const {
  setPageSearchObject,
  addPropsToSearchObject,
  setMaxPageSearchObject,
} = searchSlice.actions;

export default searchSlice.reducer;
