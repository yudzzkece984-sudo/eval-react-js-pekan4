// Card.jsx
import React from "react";

function Card({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: "14px",
        padding: "18px",
        marginBottom: "20px",
        background: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        cursor: onClick ? "pointer" : "default",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.12)";
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
        }
      }}
    >
      {children}
    </div>
  );
}

export default Card;
