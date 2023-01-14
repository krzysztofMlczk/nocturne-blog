import { useEffect, useRef, useState } from 'react';

import { tocHeaderSelector } from '#/utils/HtmlSanitizerAndTocGenerator';

/**
 * Hook returning id of header html element that appeared in the view port as the last one
 */
export function useHeadersObserver(containerId: string) {
  const observer = useRef<IntersectionObserver | null>(null);
  const [activeHeaderId, setActiveHeaderId] = useState<string | null>(null);

  useEffect(() => {
    const handleObserve = (entries: Array<IntersectionObserverEntry>) => {
      const intersectingHeader = entries.find((entry) => entry.isIntersecting);
      if (intersectingHeader) {
        setActiveHeaderId(intersectingHeader.target.id);
        return;
      }
    };

    observer.current = new IntersectionObserver(handleObserve, {
      rootMargin: '0% 0% -20% 0%',
      threshold: 1,
    });

    const containerElement = document.getElementById(containerId);
    const headers = containerElement
      ? containerElement.querySelectorAll(tocHeaderSelector)
      : document.querySelectorAll(tocHeaderSelector);
    headers.forEach((header) => observer.current?.observe(header));

    return () => observer.current?.disconnect();
  }, [containerId]);

  return { activeHeaderId };
}
