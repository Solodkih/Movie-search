import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import getBooksBySearch from '../util/AJAX/getBooksBySearch';
import { addListBook } from './bookSlice';

export const fetchSearchListWork = createAsyncThunk(
  'search/fetchSearchListWork',
  async ({params, page, url}, { dispatch }) => {
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
    statusDownloadWork: false,
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
      state.statusDownloadWork = true;
    });
    builder.addCase(fetchSearchListWork.fulfilled, (state) => {
      state.statusDownloadWork = false;
    });
  },
});

export const {
  setPageSearchObject,
  addPropsToSearchObject,
  setMaxPageSearchObject,
} = searchSlice.actions;

export default searchSlice.reducer;
