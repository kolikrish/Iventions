"use client";
import React from "react";

const IconButton = ({ icon, alt = "icon", pad = "p-2", bg = "white" }) => {
  return (
    <div
      className={`relative flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80 ${pad} rounded-[0.5vw]`}
      style={{ backgroundColor: bg }}
    >
      <img
        src={icon}
        alt={alt}
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
  );
};

export default IconButton;
