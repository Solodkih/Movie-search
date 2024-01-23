import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

import getAuthor from '../util/AJAX/getAuthor';

export const STATUS_AUTHOR_DOWLOAD_PENDING = 'PENDING';
export const STATUS_AUTHOR_DOWLOAD_ERROR = 'ERROR';
export const STATUS_AUTHOR_DOWLOAD_FINISH = 'FINISH';
export const STATUS_AUTHOR_DOWLOAD_WAIT = 'WAIT';

export const fetchAuthor = createAsyncThunk('author/fetchAuthor', async (url) => {
  const response = await getAuthor(url);
  return response;
});

export const authorSlice = createSlice({
  name: 'author',
  initialState: {
    authorList: {
      notFoundAuthor: {
        photos: [],
        alternateNames: [],
      },
    },
    statusDownloadAuthor: STATUS_AUTHOR_DOWLOAD_WAIT,
  },
  reducers: {
    setAuthor: (state, action) => {
      return { ...action.payload, statusDownloadAuthor: state.statusDownloadAuthor };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthor.pending, (state) => {
      state.statusDownloadAuthor = STATUS_AUTHOR_DOWLOAD_PENDING;
    });

    builder.addCase(fetchAuthor.rejected, (state) => {
      state.statusDownloadAuthor = STATUS_AUTHOR_DOWLOAD_ERROR;
    });

    builder.addCase(fetchAuthor.fulfilled, (state, action) => {
      state.statusDownloadAuthor = STATUS_AUTHOR_DOWLOAD_FINISH;
      state.authorList[action.payload.key] = action.payload;
    });
  },
});

export const selectAuthor = (state, key) => {
  if (!state.author.authorList[key]) {
    return state.author.authorList.notFoundAuthor;
  }
  return state.author.authorList[key];
};

export const createAuthorsByArrayKey = (arrayKey = []) => {
  const arrayFunctionsGetAuthor = arrayKey.map((item) => {
    return (state) => {
      return state.author.authorList[item];
    };
  });
  const selectAuthorsByArrayKey = createSelector(
    arrayFunctionsGetAuthor,
    (...args) => {
      return args.map((item) => {
        if (!item) {
          return {
            photos: [],
            alternateNames: [],
          };
        }
        return item;
      });
    }
  );
  return selectAuthorsByArrayKey;
};

export const selectAuthorStatusDownload = (state) => {
  return state.author.statusDownloadAuthor;
};

export const { setAuthor } = authorSlice.actions;

export default authorSlice.reducer;
