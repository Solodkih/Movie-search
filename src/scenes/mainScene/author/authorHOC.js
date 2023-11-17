import { selectAuthor, fetchAuthor } from '../../../redux/authorSlice';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

export default function AuthorHOC(Component) {
  return function (props) {
    const { authorId } = useParams();
    const dispatch = useDispatch();
    const author = useSelector((state) => {
      return selectAuthor(state, `/authors/${authorId}`);
    });
    const download =
      useSelector((state) => {
        return state.author.statusDownloadAuthor;
      }) || false;

    useEffect(() => {
      if (author.key === `/authors/${authorId}`) return;
      dispatch(fetchAuthor(`/authors/${authorId}`));
    }, []);

    return <Component author={author} download={download} {...props} />;
  };
}
