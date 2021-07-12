import React from "react";

export default function Button({ children, active, className }) {
  const isActive =
    active === true
      ? "bg-blue-light text-white-normal active:bg-blue-normal active:text-gray-medium"
      : "bg-gray-medium text-gray-lighter";
  return (
    <button
      className={`py-3 px-6 rounded-xl transition-all ${isActive} ${className}`}
    >
      {children}
    </button>
  );
}
