import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { selectAuthor, fetchAuthor } from '../../../redux/authorSlice';
import {
  fetchArrayImages,
  STATUS_IMAGE_ERROR,
  STATUS_IMAGE_PENDING,
} from '../../../redux/imageSlice';
import { getUrlImage, SIZE_IMAGE_LARGE } from '../../../util/image';
import useGetInternalUrlImage from '../../../components/hooks/useGetInternalUrlImage';
import useGetHandlerShowImage from '../../../components/hooks/useGetHandlerShowImage';

export default function AuthorHOC(Component) {
  return function returnFuncAuthorHOC(props) {
    const dispatch = useDispatch();
    const { authorId } = useParams();

    const author = useSelector((state) => {
      return selectAuthor(state, `/authors/${authorId}`);
    });
    const download =
      useSelector((state) => {
        return state.author.statusDownloadAuthor;
      }) || false;

    const handlerShowImage = useGetHandlerShowImage(author.photos);
    let urlImage = useGetInternalUrlImage(
      getUrlImage(SIZE_IMAGE_LARGE, author.photos[0])
    );

    if (urlImage === STATUS_IMAGE_ERROR || urlImage === STATUS_IMAGE_PENDING) {
      urlImage = null;
    }

    useEffect(() => {
      if (author.key === `/authors/${authorId}`) return;
      dispatch(fetchAuthor(`/authors/${authorId}`));
    }, []);

    useEffect(() => {
      dispatch(
        fetchArrayImages(
          author.photos.map((item) => {
            return getUrlImage(SIZE_IMAGE_LARGE, item);
          })
        )
      );
    }, [author]);

    return (
      <Component
        author={author}
        download={download}
        handlerShowImage={handlerShowImage}
        urlImage={urlImage}
        {...props}
      />
    );
  };
}
