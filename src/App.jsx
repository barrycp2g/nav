import React, { useState } from "react";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleAuthState = () => {
    setIsLoggedIn(!isLoggedIn);

    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  }; // Dropdown data

  const servicesDropdown = {
    title: "Services",

    columns: [
      {
        title: "Popular Services",

        links: [
          { text: "Parcel Delivery", href: "#" },

          { text: "Pallet Delivery", href: "#" },

          { text: "International Delivery", href: "#" },

          { text: "Next Day Delivery", href: "#" },

          { text: "Same Day Delivery", href: "#" },
        ],
      },

      {
        title: "More Services",

        links: [
          { text: "Euro 48 Delivery", href: "#" },

          { text: "UK Next Day Delivery", href: "#" },

          { text: "UK Economy Delivery", href: "#" },

          { text: "Heavy Parcel Delivery", href: "#" },

          { text: "Large Parcel Delivery", href: "#" },
        ],
      },

      {
        title: "Specialist Services",

        links: [
          { text: "eBay Delivery", href: "#" },

          { text: "Amazon Delivery", href: "#" },

          { text: "Etsy Delivery", href: "#" },

          { text: "DDP Shipping", href: "#" },

          { text: "Duty Calculator", href: "#" },
        ],
      },
    ],
  };

  const regularSendersDropdown = {
    title: "Regular Senders",

    columns: [
      {
        title: "For Business",

        links: [
          { text: "Business Account", href: "#" },

          { text: "Business Delivery", href: "#" },

          { text: "API Integration", href: "#" },

          { text: "Bulk Upload", href: "#" },
        ],
      },

      {
        title: "For Ecommerce",

        links: [
          { text: "eBay Integration", href: "#" },

          { text: "Amazon Integration", href: "#" },

          { text: "Etsy Integration", href: "#" },

          { text: "Shopify Integration", href: "#" },
        ],
      },
    ],
  };

  return (
    <div className="font-sans">
           {/* Top bar */}
           
      <div className="bg-blue-900 text-white text-sm py-1 px-4">
               
        <div className="container mx-auto flex justify-between items-center">
                   <div>Over 6 million customers | Over 1 million reviews</div>
                   
          <div className="flex space-x-4">
                       
            <a href="#" className="hover:underline">
              Help
            </a>
                       
            <a href="#" className="hover:underline">
              Contact Us
            </a>
                     
          </div>
                 
        </div>
             
      </div>
           {/* Main navigation */}
           
      <nav className="bg-white shadow-md">
               
        <div className="container mx-auto px-4">
                   
          <div className="flex justify-between items-center h-16">
                       {/* Logo */}
                       
            <div className="flex-shrink-0">
                           
              <a href="#">
                               
                <img
                  src="https://www.parcel2go.com/images/logo.svg"
                  alt="Parcel2Go"
                  className="h-8"
                  onError={(e) => {
                    e.target.onerror = null;

                    e.target.src =
                      "https://via.placeholder.com/150x40?text=Parcel2Go";
                  }}
                />
                             
              </a>
                         
            </div>
                       {/* Desktop Navigation */}
                       
            <div className="hidden md:flex items-center space-x-6">
                           
              <a
                href="#"
                className="text-gray-800 hover:text-blue-600 font-medium"
              >
                Smart Send
              </a>
                           
              <a
                href="#"
                className="text-gray-800 hover:text-blue-600 font-medium"
              >
                Get a Quote
              </a>
                           {/* Services Dropdown */}
                           
              <div className="relative">
                               
                <button
                  className="text-gray-800 hover:text-blue-600 font-medium flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();

                    toggleDropdown("services");
                  }}
                >
                                   Services                  
                  <svg
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                                       
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                                     
                  </svg>
                                 
                </button>
                               
                {activeDropdown === "services" && (
                  <div
                    className="absolute z-10 left-0 mt-2 w-96 bg-white shadow-lg rounded-md p-4 grid grid-cols-3 gap-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {servicesDropdown.columns.map((column, index) => (
                      <div key={index}>
                                               
                        <h3 className="font-bold text-blue-900 mb-2">
                          {column.title}
                        </h3>
                                               
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
                           
              <a
                href="#"
                className="text-gray-800 hover:text-blue-600 font-medium"
              >
                Track a Parcel
              </a>
                           {/* Regular Senders Dropdown */}
                           
              <div className="relative">
                               
                <button
                  className="text-gray-800 hover:text-blue-600 font-medium flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();

                    toggleDropdown("regularSenders");
                  }}
                >
                                   Regular Senders                  
                  <svg
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                                       
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                                     
                  </svg>
                                 
                </button>
                               
                {activeDropdown === "regularSenders" && (
                  <div
                    className="absolute z-10 left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 grid grid-cols-2 gap-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {regularSendersDropdown.columns.map((column, index) => (
                      <div key={index}>
                                               
                        <h3 className="font-bold text-blue-900 mb-2">
                          {column.title}
                        </h3>
                                               
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
                           
              <a
                href="#"
                className="text-gray-800 hover:text-blue-600 font-medium"
              >
                Help
              </a>
                           {/* Basket */}
                           
              <a href="#" className="text-gray-800 hover:text-blue-600">
                               
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                                   
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                                 
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
                               
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                                   
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                                 
                </svg>
                               
                <span className="ml-1">
                  {isLoggedIn ? "Sign Out" : "Sign In"}
                </span>
                             
              </button>
                         
            </div>
                       {/* Mobile menu button */}
                       
            <div className="md:hidden">
                           
              <button className="text-gray-800">
                               
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                                   
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                                 
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
