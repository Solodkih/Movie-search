import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getImageUrl } from '../util/AJAX/getImageUrl';

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
});

export const { saveInternalUrl } = imageSlice.actions;

export default imageSlice.reducer;
