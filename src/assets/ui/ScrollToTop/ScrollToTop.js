import { useEffect } from 'react';

function useScrollToTopOnLoad() {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: smooth scrolling animation
      });
    };

    // Trigger scroll to top when component mounts
    handleScrollToTop();

    // Cleanup function (no event listener needed)
  }, []);

  // No need to return anything from this hook
}

export default useScrollToTopOnLoad;
