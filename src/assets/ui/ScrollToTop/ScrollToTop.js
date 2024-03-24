import { useEffect, useRef } from 'react';

function useScrollToTop(dep, top) {
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!isFirstLoad.current) {
      const handleScrollToTop = () => {
        window.scrollTo({
          top,
          behavior: 'smooth' // Optional: smooth scrolling animation
        });
      };

      // Trigger scroll to top when component mounts
      handleScrollToTop();
    } else {
      // After the first load, set isFirstLoad to false
      isFirstLoad.current = false;
    }

    // Cleanup function (no event listener needed)
  }, [dep, top]);

  // No need to return anything from this hook
}

export default useScrollToTop;
