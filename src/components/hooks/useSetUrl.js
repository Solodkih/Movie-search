import { useNavigate } from 'react-router-dom';

export default function useSetUrl(params) {
  const navigate = useNavigate();

  const handleSetParam = (event, data) => {
    event.preventDefault();
    const newParams = { ...params };
    newParams[event.target.dataset.name] = data;

    const queryUrlParams = newParams.query ? `query=${newParams.query}` : '';
    const titleUrlParams = newParams.title ? `&title=${newParams.title}` : '';
    const authorUrlParams = newParams.author ? `&author=${newParams.author}` : '';
    const subjectUrlParams = newParams.subject
      ? `&subject=${newParams.subject}`
      : '';
    const placeUrlParams = newParams.place ? `&place=${newParams.place}` : '';
    const personUrlParams = newParams.person ? `&person=${newParams.person}` : '';
    const publisherUrlParams = newParams.publisher
      ? `&publisher=${newParams.publisher}`
      : '';
    navigate(
      `/books-search/search?${queryUrlParams}${titleUrlParams}${authorUrlParams}${subjectUrlParams}${placeUrlParams}${personUrlParams}${publisherUrlParams}`
    );
  };
  return handleSetParam;
}
