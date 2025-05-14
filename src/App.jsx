import React, { useState, useRef } from "react";
 
// Full-width Dropdown component
function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
 
  // Show/hide handlers
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
      ref={dropdownRef}
    >
      <button
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
        className={`${
          open ? "block" : "hidden"
        } absolute left-0 right-0 top-full bg-white shadow-xl z-50`}
      >
        <div className="container mx-auto px-8 py-8">
          {children}
        </div>
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
            <a href="/business" className="hover:text-blue-600">
              Business
            </a>
          </li>
          <li>
            <a href="/quick-quote" className="hover:text-blue-600">
              Get a Quote
            </a>
          </li>
          {/* SERVICES DROPDOWN */}
          <Dropdown label="Services">
            <div className="grid grid-cols-4 gap-10">
              {/* Range of Couriers */}
              <div>
                <h4 className="text-base font-semibold mb-3 text-gray-900">Range of Couriers</h4>
                <ul>
                  <li><a href="/couriers" className="block py-1 text-sm text-gray-700 hover:text-blue-600">All Couriers</a></li>
                  <li><a href="/couriers/royal-mail" className="block py-1 text-sm text-gray-700 hover:text-blue-600">Royal Mail <span className="bg-blue-100 text-blue-700 px-1 ml-1 rounded text-xs">New</span></a></li>
                  <li><a href="/couriers/fedex" className="block py-1 text-sm text-gray-700 hover:text-blue-600">FedEx Express</a></li>
                  <li><a href="/couriers/parcelforce" className="block py-1 text-sm text-gray-700 hover:text-blue-600">Parcelforce</a></li>
                  <li><a href="/couriers/ups" className="block py-1 text-sm text-gray-700 hover:text-blue-600">UPS</a></li>
                  <li><a href="/couriers/access-point" className="block py-1 text-sm text-gray-700 hover:text-blue-600">UPS Access Point</a></li>
                  <li><a href="/couriers/evri" className="block py-1 text-sm text-gray-700 hover:text-blue-600">Evri</a></li>
