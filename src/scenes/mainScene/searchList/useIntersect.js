import { useEffect, useState } from 'react';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

export default function useIntersect(containerRef) {
  const [intersection, setIntersection] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersection(entry.isIntersecting);
    }, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [containerRef]);
  return intersection;
}
