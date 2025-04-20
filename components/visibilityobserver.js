import { useState, useEffect } from "react";

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref]);

  return isIntersecting;
}
