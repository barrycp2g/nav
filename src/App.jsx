import React, { useState } from 'react';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleAuthState = () => {
    setIsLoggedIn(!isLoggedIn);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Dropdown data for Services
  const servicesDropdown = {
    title: "Services",
    columns: [
      {
        title: "Range of Couriers",
        links: Array(19).fill({ text: "Courier Service", href: "#" })
      },
      {
        title: "UK Parcel Delivery",
        links: Array(19).fill({ text: "UK Delivery Service", href: "#" })
      },
      {
        title: "International Parcel Delivery",
        links: Array(19).fill({ text: "International Delivery Service", href: "#" })
      },
      {
        title: "Delivery Tools",
        links: Array(19).fill({ text: "Delivery Tool", href: "#" })
      }
    ]
  };

  // Dropdown data for Regular Senders
  const regularSendersDropdown = {
    title: "Regular Senders",
    columns: [
      {
        title: "Resources",
        links: [
          { text: "What is Smart Send", href: "#" },
          { text: "Business Hub", href: "#" },
          { text: "Business Accounts", href: "#" },
          { text: "Royal Mail OBA", href: "#" },
          { text: "Bulk Letter Sending", href: "#" },
          { text: "Become a VIP", href: "#" },
        ]
      },
      {
        title: "Marketplace Integrations",
        links: [
          { text: "eBay", href: "#" },
          { text: "Amazon", href: "#" },
          { text: "Etsy", href: "#" },
          { text: "Shopify", href: "#" },
          { text: "TikTok", href: "#" },
          { text: "Wix", href: "#" },
        ]
      },
      {
        title: "",
        links: [
          { text: "eBay", href: "#" },
          { text: "Amazon", href: "#" },
          { text: "Etsy", href: "#" },
          { text: "Shopify", href: "#" },
          { text: "TikTok", href: "#" },
          { text: "Wix", href: "#" },
        ]
      },
      {
        title: "",
        links: [
          { text: "eBay", href: "#" },
          { text: "Amazon", href: "#" },
          { text: "Etsy", href: "#" },
          { text: "Shopify", href: "#" },
          { text: "TikTok", href: "#" },
          { text: "Wix", href: "#" },
        ]
      }
    ]
  };

  return (
    <div className="font-sans">
      {/* Main navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#">
                <img
                  src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/layout/p2g_logo_new.svg"
                  alt="Parcel2Go"
                  className="h-8"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150x40?text=Parcel2Go";
                  }}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Smart Send</a>
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Get a Quote</a>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-800 hover:text-blue-600 font-medium flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('services');
                  }}
                >
                  Services
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'services' && (
                  <div
                    className="absolute z-10 left-0 mt-2 w-full bg-white shadow-lg rounded-md p-4 grid grid-cols-4 gap-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {servicesDropdown.columns.map((column, index) => (
                      <div key={index}>
                        <h3 className="font-bold text-blue-900 mb-4">{column.title}</h3>
                        <ul className="space-y-2">
                          {column.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600 text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Track a Parcel</a>

              {/* Regular Senders Dropdown */}
              <div className="relative">
                <button
                  className="text-gray-800 hover:text-blue-600 font-medium flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown('regularSenders');
                  }}
                >
                  Regular Senders
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'regularSenders' && (
                  <div
                    className="absolute z-10 left-0 mt-2 w-full bg-white shadow-lg rounded-md p-4 grid grid-cols-4 gap-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {regularSendersDropdown.columns.map((column, index) => (
                      <div key={index}>
                        <h3 className="font-bold text-blue-900 mb-4">{column.title}</h3>
                        <ul className="space-y-2">
                          {column.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600 text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Help</a>

              {/* Basket */}
              <a href="#" className="text-gray-800 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </a>

              {/* Auth Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAuthState();
                }}
                className="text-gray-800 hover:text-blue-600 flex items-center"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span className="ml-1">{isLoggedIn ? 'Sign Out' : 'Sign In'}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-800">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
