import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getImageUrl from '../util/AJAX/getImageUrl';

export const STATUS_IMAGE_PENDING = 'PENDING';
export const STATUS_IMAGE_ERROR = 'ERROR';
/* eslint no-use-before-define: 0 */

export const fetchImage = createAsyncThunk(
  'image/fetchImage',
  async (externalUrl, { dispatch }) => {
    const newInternalUrl = await getImageUrl(externalUrl);
    dispatch(saveInternalUrl({ externalUrl, internalUrl: newInternalUrl }));
    return newInternalUrl;
  }
);

export const fetchArrayImages = createAsyncThunk(
  'image/fetchArrayImages',
  async (ArrayExternalURLImages, { dispatch, getState }) => {
    const state = getState();
    ArrayExternalURLImages.forEach((externalUrl) => {
      if (!state.image[externalUrl]) {
        dispatch(fetchImage(externalUrl));
      }
    });
  }
);

export const imageSlice = createSlice({
  name: 'image',
  initialState: {},
  reducers: {
    saveInternalUrl: (state, action) => {
      state[action.payload.externalUrl] = action.payload.internalUrl;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImage.pending, (state, action) => {
      state[action.meta.arg] = STATUS_IMAGE_PENDING;
    });
    builder.addCase(fetchImage.rejected, (state, action) => {
      state[action.meta.arg] = STATUS_IMAGE_ERROR;
    });
  },
});

export const { saveInternalUrl } = imageSlice.actions;

export default imageSlice.reducer;
