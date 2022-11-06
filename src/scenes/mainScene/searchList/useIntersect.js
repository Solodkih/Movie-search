import { useEffect } from 'react';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

export default function useIntersect(containerRef, page, setPage) {
  useEffect(() => {
    const intersectionObserverCalback = ([entry]) => {
      if (entry.isIntersecting) {
        setPage((page += 1));
      }
    };
    const observer = new IntersectionObserver(intersectionObserverCalback, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, [containerRef]);
  return;
}
