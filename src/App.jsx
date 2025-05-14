import React, { useState, useRef } from "react";
 
function Dropdown({ label, children, align = "left" }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
 
  // Handlers for mouse and keyboard
  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);
  const handleFocus = () => setOpen(true);
  const handleBlur = (e) => {
    // Close if focus moves outside dropdown
    if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") setOpen(false);
  };
  const handleClick = () => setOpen((prev) => !prev);
 
  // Alignment classes
  const alignClass =
    align === "right"
      ? "right-0"
      : align === "center"
      ? "left-1/2 -translate-x-1/2"
      : "left-0";
 
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
      <div
        className={`absolute ${alignClass} top-full bg-white shadow-lg z-50 min-w-[220px] transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
        tabIndex="-1"
      >
        {children}
      </div>
    </li>
  );
}
 
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
 
  return (
    <header className="bg-white shadow">
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
        <ul className="flex items-center space-x-6 text-gray-800">
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
 
          {/* Services Dropdown */}
          <Dropdown label="Services" align="center">
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-4 gap-8">
                {/* Column 1 */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <img
src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/range_of_couriers_icon.svg"
                      className="w-5 h-5 mr-2"
                      alt=""
                    />
                    Range of Couriers
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a
                        href="/couriers"
                        className="hover:text-blue-600 block"
                      >
                        All Couriers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/couriers/royal-mail"
                        className="hover:text-blue-600 block"
                      >
                        Royal Mail
                        <span className="bg-blue-100 text-blue-700 px-1 ml-1 rounded text-xs">
                          New
                        </span>
                      </a>
                    </li>
                    {/* Add more links as needed */}
                  </ul>
                </div>
                {/* Column 2 */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <img
src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/parcel_delivery_icon.svg"
                      className="w-5 h-5 mr-2"
                      alt=""
                    />
                    UK Parcel Delivery
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a
                        href="/parcel-delivery/uk"
                        className="hover:text-blue-600 block"
                      >
                        All UK Delivery Services
                      </a>
                    </li>
                    {/* Add more links as needed */}
                  </ul>
                </div>
                {/* Column 3 */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <img
src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/international_icon.svg"
                      className="w-5 h-5 mr-2"
                      alt=""
                    />
                    International Parcel Delivery
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a
                        href="/international-couriers"
                        className="hover:text-blue-600 block"
                      >
                        All International Delivery
                      </a>
                    </li>
                    {/* Add more links as needed */}
                  </ul>
                </div>
                {/* Column 4 */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <img
src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/tools_icon.svg"
                      className="w-5 h-5 mr-2"
                      alt=""
                    />
                    Delivery Tools
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a
                        href="/content/what-is-prepay.aspx"
                        className="hover:text-blue-600 block"
                      >
                        Parcel2Go Prepay
                      </a>
                    </li>
                    {/* Add more links as needed */}
                  </ul>
                </div>
              </div>
            </div>
          </Dropdown>
 
          <li>
            <a href="#" className="hover:text-blue-600">
              Track a Parcel
            </a>
          </li>
 
          {/* Smart Send Dropdown */}
          <Dropdown label="Smart Send" align="center">
            <div className="container mx-auto px-4 py-4">
              <h4 className="font-semibold mb-2 flex items-center">
                <img
src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/bulk%20tools%20(1).svg"
                  className="w-5 h-5 mr-2"
                  alt=""
                />
                Smart <i>Send</i>
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    href="/smartsend"
                    className="hover:text-blue-600 block"
                  >
                    What is Smart Send?
                  </a>
                </li>
                {/* Add more links as needed */}
              </ul>
            </div>
          </Dropdown>
 
          <li>
            <a href="/help-centre" className="hover:text-blue-600">
              Help
            </a>
          </li>
          <li>
            <a href="/order/confirm" className="hover:text-blue-600">
              Basket
            </a>
          </li>
 
          {/* Account Dropdown or Sign In */}
          {loggedIn ? (
            <Dropdown
              label={
                <>
                  <i className="fa fa-user-o mr-1" />
                  Account
                </>
              }
              align="right"
            >
              <ul className="py-2">
                <li>
                  <a
                    href="/myaccount/myorders"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Orders
                  </a>
                </li>
                <li>
                  <a
                    href="/myaccount/preferences"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Settings
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setLoggedIn(false)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </Dropdown>
          ) : (
            <li>
              <button
                onClick={() => setLoggedIn(true)}
                className="hover:text-blue-600 flex items-center"
              >
                Sign In <i className="fa fa-user-o ml-1" />
              </button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
