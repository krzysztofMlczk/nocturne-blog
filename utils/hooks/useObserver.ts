import { useEffect, useRef, useState } from 'react';

export function useObserver(elementToObserveId: string) {
  const observer = useRef<IntersectionObserver | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const handleObserve = (entries: Array<IntersectionObserverEntry>) => {
      const observedEntry = entries[0];
      if (observedEntry) {
        setIsIntersecting(observedEntry.isIntersecting);
        return;
      }
    };

    observer.current = new IntersectionObserver(handleObserve, {
      threshold: 0.7,
    });
    const toObserve = document.getElementById(elementToObserveId);
    if (toObserve) {
      observer.current?.observe(toObserve);
    }

    return () => observer.current?.disconnect();
  }, [elementToObserveId]);

  return { isIntersecting };
}
