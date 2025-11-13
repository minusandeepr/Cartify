// src/components/ui/Button.jsx
import React from "react";

export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    ghost: "bg-transparent text-indigo-600 hover:bg-indigo-50",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
}
