import { useNavigate } from 'react-router-dom';

export default function useSetUrl(params) {
  const navigate = useNavigate();

  const handleSetParam = (event, data) => {
    event.preventDefault();
    params[event.target.dataset.name] = data;

    const queryUrlParams = params.query ? `query=${params.query}` : '';
    const titleUrlParams = params.title ? `&title=${params.title}` : '';
    const authorUrlParams = params.author ? `&author=${params.author}` : '';
    const subjectUrlParams = params.subject ? `&subject=${params.subject}` : '';
    const placeUrlParams = params.place ? `&place=${params.place}` : '';
    const personUrlParams = params.person ? `&person=${params.person}` : '';
    const publisherUrlParams = params.publisher
      ? `&publisher=${params.publisher}`
      : '';
    navigate(
      `/search?${queryUrlParams}${titleUrlParams}${authorUrlParams}${subjectUrlParams}${placeUrlParams}${personUrlParams}${publisherUrlParams}`
    );
  };
  return handleSetParam;
}
