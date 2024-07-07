import { useEffect, useState, MutableRefObject } from 'react';

const useOnSameLine = (
  startRef: MutableRefObject<HTMLElement | null>,
  endRef: MutableRefObject<HTMLElement | null>
): boolean => {
  const [onSameLine, setOnSameLine] = useState(false);

  useEffect(() => {
    const checkIfOnSameLine = () => {
      if (startRef.current && endRef.current) {
        const startRect = startRef.current.getBoundingClientRect();
        const endRect = endRef.current.getBoundingClientRect();
        setOnSameLine(startRect.bottom === endRect.bottom);
      }
    };

    window.addEventListener('resize', checkIfOnSameLine);
    checkIfOnSameLine();

    return () => {
      window.removeEventListener('resize', checkIfOnSameLine);
    };
  }, [startRef, endRef]);

  return onSameLine;
};

export default useOnSameLine;