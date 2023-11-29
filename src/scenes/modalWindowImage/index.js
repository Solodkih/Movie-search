import React from 'react';
import './modalWindowImage.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  nextImage,
  previousImage,
  setShowImage,
} from '../../redux/modalWindowImageSlice';
import useGetInternalUrlImage from '../../components/hooks/useGetInternalUrlImage';

export default function ModalWindowImage() {
  const dispatch = useDispatch();
  const currentImage =
    useSelector((state) => {
      return state.modalWindowImage.currentImage;
    }) || null;

  const url = useGetInternalUrlImage(currentImage);

  const handlerCanselWindow = () => {
    dispatch(setShowImage({ show: false }));
  };

  return (
    <div className="modalWindowImage">
      <div className="modalWindowImage_background" />
      <div className="modalWindowImage_control">
        <button
          className="modalWindowImage_control-button"
          onClick={() => {
            dispatch(previousImage());
          }}
        >
          prev
        </button>
        <div className="modalWindowImage_control-image-block">
          <button className="modalWindowImage_control-image-block-cansel"  onClick={handlerCanselWindow}>Cansel</button>
          <img className="modalWindowImage_control-image" alt="image" src={url} />
        </div>
        <button
          className="modalWindowImage_control-button"
          onClick={() => {
            dispatch(nextImage());
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}
