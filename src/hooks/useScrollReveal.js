import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 *
 * Attaches an IntersectionObserver to the returned `ref`.
 * Once the element enters the viewport it adds the `.pb-revealed` class
 * and then unobserves it so the animation only plays once.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="pb-reveal pb-stagger-2"> … </div>
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, reveal immediately and skip
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('pb-revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pb-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * useScrollRevealGroup
 *
 * Observes a container ref. When the container enters the viewport,
 * it adds `.pb-revealed` to every child matching `childSelector`.
 * Stagger CSS classes (pb-stagger-1 … pb-stagger-N) are applied
 * automatically if `autoStagger` is true.
 *
 * Usage:
 *   const ref = useScrollRevealGroup();
 *   <ul ref={ref}>
 *     <li className="pb-reveal"> … </li>
 *     <li className="pb-reveal"> … </li>
 *   </ul>
 */
export function useScrollRevealGroup(childSelector = '.pb-reveal', threshold = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const children = Array.from(container.querySelectorAll(childSelector));

    // Apply stagger classes automatically
    children.forEach((child, i) => {
      const n = i + 1;
      if (n <= 6) child.classList.add(`pb-stagger-${n}`);
      if (reduced) child.classList.add('pb-revealed');
    });

    if (reduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child) => child.classList.add('pb-revealed'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [childSelector, threshold]);

  return ref;
}
