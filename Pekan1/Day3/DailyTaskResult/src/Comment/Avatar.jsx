import React from "react";

function Avatar({ src, alt }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      style={{ width: 50, height: 50, borderRadius: "50%" }} 
    />
  );
}

export default Avatar;
