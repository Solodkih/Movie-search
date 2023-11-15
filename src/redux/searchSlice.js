import { createSlice, createSelector } from '@reduxjs/toolkit';

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
});

export const {
  setPageSearchObject,
  addPropsToSearchObject,
  setMaxPageSearchObject,
} = searchSlice.actions;

export default searchSlice.reducer;
