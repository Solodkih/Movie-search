import { createSlice } from '@reduxjs/toolkit';

export const modalWindowImageSlice = createSlice({
  name: 'modalWindowImageSlice',
  initialState: {
    show: false,
    currentImage: '',
    arrayImage: [],
  },
  reducers: {
    setShowImage: (state, action) => {
      state.show = action.payload.show || false;
      state.currentImage = action.payload.currentImage || null;
      state.arrayImage = action.payload.arrayImage || [];
    },
    nextImage: (state) => {
      const index = state.arrayImage.findIndex((item) => {
        return item === state.currentImage;
      });
      if (index === -1) return;
      if (!state.arrayImage[index + 1]) return;
      state.currentImage = state.arrayImage[index + 1];
    },
    previousImage: (state) => {
      const index = state.arrayImage.findIndex((item) => {
        return item === state.currentImage;
      });
      if (index === -1) return;
      if (!state.arrayImage[index - 1]) return;
      state.currentImage = state.arrayImage[index - 1];
    },
  },
});

export const { setShowImage, nextImage, previousImage } =
  modalWindowImageSlice.actions;

export default modalWindowImageSlice.reducer;
