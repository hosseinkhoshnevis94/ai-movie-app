import { useEffect, useRef } from 'react';

function useScrollToTop(dep, top) {
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!isFirstLoad.current) {
      const handleScrollToTop = () => {
        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      };

     
      handleScrollToTop();
    } else {
      
      isFirstLoad.current = false;
    }

   
  }, [dep, top]);


}

export default useScrollToTop;
