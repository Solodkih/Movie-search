import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    page: 0,
    seachList: {},
  },
  reducers: {
    addPropsToSearchObject: (state, action) => {
      const { url, arrayKeyWorks, page } = action.payload;
      if (!state.seachList[url]) {
        state.seachList[url] = arrayKeyWorks;
        return;
      }
      state.seachList[url] = [...state.seachList[url], ...arrayKeyWorks];
    },
    setPageSearchObject: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPageSearchObject, addPropsToSearchObject } = searchSlice.actions;

export default searchSlice.reducer;
