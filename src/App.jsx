import React, { useState, useRef } from "react";
 
// Dropdown component
function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
 
  // Handlers for mouse and keyboard
  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);
  const handleFocus = () => setOpen(true);
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") setOpen(false);
  };
  const handleClick = () => setOpen((prev) => !prev);
 
  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <button
        ref={buttonRef}
        className="hover:text-blue-600 focus:text-blue-600 px-2 py-1 flex items-center"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        type="button"
      >
        {label}
        <svg
          className="ml-1 w-3 h-3"
          viewBox="0 0 10 6"
          fill="none"
xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      {/* Full-width dropdown */}
      <div
        className={`fixed left-0 right-0 top-[64px] bg-white shadow-xl z-50 transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
        style={{ minHeight: open ? "auto" : 0 }}
        tabIndex="-1"
      >
        {open && children}
      </div>
    </li>
  );
}
 
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
 
  return (
    <header className="bg-white shadow relative z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/layout/p2g_logo_new.svg"
            alt="Parcel2Go Logo"
            className="h-8"
          />
        </a>
        {/* Main nav */}
        <ul className="flex items-center space-x-6 text-gray-800 font-medium">
          <li>
