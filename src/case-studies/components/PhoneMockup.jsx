import React, { useRef, useEffect, useCallback } from "react";

/**
 * Renders a screenshot inside a realistic phone mockup frame.
 * Supports two scrolling modes:
 *  1. Passive page-scroll — the inner screenshot scrolls as the section moves through the viewport.
 *  2. Direct interaction — the user can scroll/swipe inside the phone screen directly.
 */
export default function PhoneMockup({
  screenshotSrc,
  screenshotAlt = "App screenshot",
  mockupSrc = "/iphone-mockup.png",
}) {
  const containerRef = useRef(null);
  const scrollAreaRef = useRef(null);
  const isUserScrolling = useRef(false);
  const userScrollTimer = useRef(null);

  /* ---- page-scroll driven inner scroll ---- */
  const onPageScroll = useCallback(() => {
    if (isUserScrolling.current) return;
    const container = containerRef.current;
    const scrollArea = scrollAreaRef.current;
    if (!container || !scrollArea) return;

    const rect = container.getBoundingClientRect();
    const vh = window.innerHeight;

    // progress: 0 when the container bottom touches viewport bottom
    //           1 when the container top reaches viewport top
    const progress = Math.max(
      0,
      Math.min(1, (vh - rect.top) / (vh + rect.height))
    );

    const maxScroll = scrollArea.scrollHeight - scrollArea.clientHeight;
    scrollArea.scrollTop = progress * maxScroll;
  }, []);

  /* ---- detect manual scrolling inside the phone ---- */
  const onInnerScroll = useCallback(() => {
    isUserScrolling.current = true;
    clearTimeout(userScrollTimer.current);
    userScrollTimer.current = setTimeout(() => {
      isUserScrolling.current = false;
    }, 2000);
  }, []);

  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    window.addEventListener("scroll", onPageScroll, { passive: true });
    scrollArea?.addEventListener("scroll", onInnerScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onPageScroll);
      scrollArea?.removeEventListener("scroll", onInnerScroll);
      clearTimeout(userScrollTimer.current);
    };
  }, [onPageScroll, onInnerScroll]);

  return (
    <div ref={containerRef} className="cs-phone-mockup">
      {/* Frame overlay — sits on top, pointer-events: none so interactions pass to screen */}
      <img
        src={mockupSrc}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="cs-phone-mockup__frame"
      />

      {/* Scrollable screen area positioned behind the frame */}
      <div ref={scrollAreaRef} className="cs-phone-mockup__screen">
        <img
          src={screenshotSrc}
          alt={screenshotAlt}
          draggable={false}
          className="cs-phone-mockup__screenshot"
        />
      </div>
    </div>
  );
}
