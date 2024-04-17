import { useEffect } from "react";

function useScrollToTopOnLoad(deps,top) {
    useEffect(() => {
      const handleScrollToTop = () => {
        window.scrollTo({
          top,
          behavior: 'smooth' 
        });
      };
  
      
      handleScrollToTop();
  
      
    }, [...deps]);
  
    
  }
  
  export default useScrollToTopOnLoad