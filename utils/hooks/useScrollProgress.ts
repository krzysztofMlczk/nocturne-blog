import { MutableRefObject, useEffect, useState } from 'react';

/**
 * Hook returning percentage of how much the user has scrolled through
 */
export function useScrollProgress(
  contentRef: MutableRefObject<HTMLElement | null>
) {
  const [scrollProgress, setScrollProgress] = useState(0); // TODO: should we pass some init value as arg?

  useEffect(() => {
    if (contentRef) {
      const handleScroll = () => {
        if (contentRef.current) {
          const currentProgress = window.scrollY; // TODO: improve this so content's offset caused by navbar is taken into account
          const scrollHeight = document.body.scrollHeight - window.innerHeight;
          if (scrollHeight) {
            setScrollProgress((currentProgress / scrollHeight) * 100);
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [contentRef]);

  return { scrollProgress };
}
