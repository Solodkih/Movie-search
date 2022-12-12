import { useEffect } from 'react';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

export default function useIntersect(containerRef, setPage) {
  const intersectionObserverCalback = ([entry]) => {
    if (entry.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionObserverCalback, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, [containerRef]);
}
