import React, { useState, useEffect } from "react";

/**
 * Wraps a YouTube iframe inside a phone-shaped device frame.
 * Pure CSS device chrome — no image dependency.
 */
export default function VideoMockup({
  youtubeId,
  title = "Animation demo",
  caption,
}) {
  // Keep iframe invisible until autoplay has had time to start.
  // YouTube shows title/avatar only in the pre-play state; once
  // autoplay fires those overlays disappear. We reveal the iframe
  // after 900ms so the user never sees the initial overlay flash.
  const [iframeVisible, setIframeVisible] = useState(false);
  useEffect(() => {
    if (!youtubeId) return;
    const t = setTimeout(() => setIframeVisible(true), 900);
    return () => clearTimeout(t);
  }, [youtubeId]);

  return (
    <div className="mo-video-pair__item">
      <div className="mo-video-mockup">
        <div className="mo-video-mockup__notch" aria-hidden="true" />
        {youtubeId ? (
          <>
            <iframe
              className="mo-video-mockup__iframe"
              style={{ opacity: iframeVisible ? 1 : 0, transition: "opacity 0.4s ease" }}
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3&showinfo=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="mo-video-mockup__cover" aria-hidden="true" />
          </>
        ) : (
          <div className="mo-placeholder" style={{ borderRadius: 40, minHeight: "100%" }}>
            <span className="mo-placeholder__label">Video placeholder</span>
          </div>
        )}
      </div>
      {caption && <p className="mo-caption" style={{ textAlign: "center" }}>{caption}</p>}
    </div>
  );
}
