import React from 'react';
import './modalWindowImage.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  nextImage,
  previousImage,
  setShowImage,
} from '../../redux/modalWindowImageSlice';
import { STATUS_IMAGE_ERROR, STATUS_IMAGE_PENDING } from '../../redux/imageSlice';
import useGetInternalUrlImage from '../../components/hooks/useGetInternalUrlImage';
import ImageNotFound from '../../components/imageNotFound';
import { SmallLoader } from '../../components/loader';

export default function ModalWindowImage() {
  const dispatch = useDispatch();
  const currentImage = useSelector((state) => {
    return state.modalWindowImage.currentImage;
  });

  const url = useGetInternalUrlImage(currentImage);

  const handlerCanselWindow = () => {
    dispatch(setShowImage({ show: false }));
  };

  return (
    <div className="modalWindowImage">
      <button
        aria-label="show previous image"
        type="button"
        className="modalWindowImage__button"
        onClick={() => {
          dispatch(previousImage());
        }}
      >
        <i className="modalWindowImage__arrow modalWindowImage__arrow_left" />
      </button>
      <div className="modalWindowImage__image-block">
        <button
          aria-label="clouse window image"
          type="button"
          className="modalWindowImage__image-block-cansel"
          onClick={handlerCanselWindow}
        />
        {url === STATUS_IMAGE_ERROR && (
          <div className="modalWindowImage__image">
            <ImageNotFound className="modal-image-not-found " />
          </div>
        )}
        {url === STATUS_IMAGE_PENDING && (
          <div className="modalWindowImage__image">
            <SmallLoader />
          </div>
        )}
        {url !== STATUS_IMAGE_ERROR && url !== STATUS_IMAGE_PENDING && (
          <img className="modalWindowImage__image" alt={url} src={url} />
        )}
      </div>
      <button
        aria-label="show next image"
        type="button"
        className="modalWindowImage__button"
        onClick={() => {
          dispatch(nextImage());
        }}
      >
        <i className="modalWindowImage__arrow modalWindowImage__arrow_right" />
      </button>
    </div>
  );
}
