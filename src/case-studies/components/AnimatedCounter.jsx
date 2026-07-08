import React, { useEffect, useRef, useState } from "react";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1200,
  className = "",
  inline = false,
}) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          if (prefersReduced) {
            setDisplay(String(value));
            return;
          }

          const start = performance.now();
          const numericValue = parseFloat(String(value).replace(/[^0-9.-]/g, ""));
          const isDecimal = String(value).includes(".");
          const decimalPlaces = isDecimal
            ? String(value).split(".")[1]?.length || 0
            : 0;

          function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);
            const current = numericValue * eased;

            if (isDecimal) {
              setDisplay(current.toFixed(decimalPlaces));
            } else {
              setDisplay(Math.round(current).toString());
            }

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplay(String(value));
            }
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={inline ? className : `cs-counter ${className}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
