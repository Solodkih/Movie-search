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
        className="modalWindowImage_button"
        onClick={() => {
          dispatch(previousImage());
        }}
      >
        <i className="modalWindowImage_arrow modalWindowImage_arrow__left" />
      </button>
      <div className="modalWindowImage_image-block">
        <button
          aria-label="clouse window image"
          type="button"
          className="modalWindowImage_image-block-cansel"
          onClick={handlerCanselWindow}
        />
        {url === STATUS_IMAGE_ERROR && (
          <div className="modalWindowImage_image">
            <ImageNotFound className="modal-image-not-found " />
          </div>
        )}
        {url === STATUS_IMAGE_PENDING && (
          <div className="modalWindowImage_image">
            <SmallLoader />
          </div>
        )}
        {url !== STATUS_IMAGE_ERROR && url !== STATUS_IMAGE_PENDING && (
          <img className="modalWindowImage_image" alt={url} src={url} />
        )}
      </div>
      <button
        aria-label="show next image"
        type="button"
        className="modalWindowImage_button"
        onClick={() => {
          dispatch(nextImage());
        }}
      >
        <i className="modalWindowImage_arrow modalWindowImage_arrow__right" />
      </button>
    </div>
  );
}
