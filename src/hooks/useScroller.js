import { useState, useEffect } from "react";
import { useLocation  } from 'react-router-dom';

export const useScroller = (itemsCount) => {
  const { pathname } = useLocation();
    const [index, setIndex] = useState(0);
    const [footerOffset, setFooterOffset] = useState(false); // 0

    useEffect(() => {
      setFooterOffset(false); // 0
    }, [pathname]);
  
    const onMove = (step) => {

      setIndex((prevIndex) => {
        const newIndex = prevIndex + step;

        if (step === -1 && footerOffset === true) { // 0 - footerOffset !== false
          setFooterOffset(false) // 0
          return prevIndex;
        }

        if (newIndex > itemsCount - 1) {
          setFooterOffset(true) // 360 на десктопе
        } else {
          setFooterOffset(false) // 0
        }
  
        if (newIndex < 0 || newIndex > itemsCount - 1) {
          return prevIndex;
        }
  
        return newIndex;
      });
    };

    return {
        index, onMove, footerOffset, setIndex, setFooterOffset
    }
}