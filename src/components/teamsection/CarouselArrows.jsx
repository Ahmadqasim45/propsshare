import React from "react";

export const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} team-carousel-arrow next-arrow`}
      style={{
        ...style,
        display: "block",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>
  );
};

export const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} team-carousel-arrow prev-arrow`}
      style={{
        ...style,
        display: "block",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </div>
  );
};
