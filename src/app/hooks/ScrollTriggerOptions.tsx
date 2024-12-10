import { useState, useEffect } from "react";

interface ScrollTriggerOptions {
  threshold?: number; // Percentage of element that needs to be visible (0-1)
  rootMargin?: string; // Margin around the root
}

const useScrollTrigger = (
  elementId: string,
  options: ScrollTriggerOptions = {},
) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const { threshold = 0.75, rootMargin = "0px" } = options;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Check if the target element is in view
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * threshold;
        setIsVisible(isInView);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementId, threshold]);

  return { scrollPosition, isVisible };
};

export default useScrollTrigger;
