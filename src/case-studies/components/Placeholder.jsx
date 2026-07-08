import React from "react";

const VARIANTS = {
  phone: {
    aspectRatio: "9 / 19.5",
    borderRadius: "32px",
    maxWidth: "280px",
  },
  landscape: {
    aspectRatio: "16 / 9",
    borderRadius: "16px",
    maxWidth: "560px",
  },
  square: {
    aspectRatio: "1 / 1",
    borderRadius: "16px",
    maxWidth: "400px",
  },
  "full-width": {
    aspectRatio: "21 / 9",
    borderRadius: "16px",
    maxWidth: "100%",
    width: "100%",
  },
};

export default function Placeholder({
  variant = "landscape",
  label = "[ IMAGE ]",
  assetId,
  className = "",
  style: extraStyle,
}) {
  const variantStyle = VARIANTS[variant] || VARIANTS.landscape;
  const isDark =
    typeof document !== "undefined" &&
    document.querySelector(".cs-section--dark");

  return (
    <div
      className={`cs-placeholder cs-placeholder--${variant} ${className}`}
      data-asset-id={assetId}
      style={{
        ...variantStyle,
        ...extraStyle,
      }}
    >
      {variant === "phone" && (
        <div className="cs-placeholder__notch" aria-hidden="true" />
      )}
      <span className="cs-placeholder__label">{label}</span>
    </div>
  );
}
