import { useEffect, useState } from "react";
import type { RefObject } from "react";

// hook från https://medium.com/@jacobvejlinjensen/how-to-create-a-smooth-appear-on-scroll-transition-with-tailwind-css-and-react-82f2a32ab295

export function useIsVisible(ref: RefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
