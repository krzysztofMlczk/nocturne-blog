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
        // how far the user has scrolled down
        const scrollTop = document.documentElement.scrollTop;

        if (contentRef.current) {
          // the distance from the content section to the top of the page
          const contentOffsetTop = contentRef.current.offsetTop;

          // the height of the content section
          const contentHeight = contentRef.current.clientHeight;

          if (scrollTop - contentOffsetTop <= 0) {
            return setScrollProgress(0);
          } else if (scrollTop - contentHeight > contentHeight) {
            return setScrollProgress(100);
          }
          setScrollProgress(
              ((scrollTop - contentOffsetTop) / contentHeight) * 100
          );
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [contentRef]);

  return { scrollProgress };
}
