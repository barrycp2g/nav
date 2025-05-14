import React, { useState } from 'react';

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
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
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">Range of Couriers</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><a href="#" className="text-sm hover:text-blue-600">All Couriers</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Royal Mail</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">FedEx Express</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">ParcelForce</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">UPS</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">UK Parcel Delivery</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><a href="#" className="text-sm hover:text-blue-600">All UK Delivery Services</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Postage Costs</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Next-Day Delivery</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Same-Day Delivery</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Pallet Delivery</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">International Parcel Delivery</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><a href="#" className="text-sm hover:text-blue-600">All International Delivery</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Economy Delivery</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Express Delivery</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">USA Delivery</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Australia Delivery</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900 mb-2">Delivery Tools</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li><a href="#" className="text-sm hover:text-blue-600">Parcel2Go Prepay</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Postcode Finder</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Parcel Volume Calculator</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Print Your Labels</a></li>
                        <li><a href="#" className="text-sm hover:text-blue-600">Prohibited Items</a></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
