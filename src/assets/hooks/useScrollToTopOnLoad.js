import { useEffect } from "react";

function useScrollToTopOnLoad(deps,top) {
    useEffect(() => {
      const handleScrollToTop = () => {
        window.scrollTo({
          top,
          behavior: 'smooth' // Optional: smooth scrolling animation
        });
      };
  
      // Trigger scroll to top when component mounts
      handleScrollToTop();
  
      // Cleanup function (no event listener needed)
    }, [...deps]);
  
    // No need to return anything from this hook
  }
  
  export default useScrollToTopOnLoad