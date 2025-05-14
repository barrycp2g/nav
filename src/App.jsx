import React, { useState } from 'react';

// Dropdown components for better maintainability
const SmartSendDropdown = () => (
  <div className="absolute inset-x-0 top-full hidden group-hover:block bg-white shadow-lg z-50">
    <div className="container mx-auto px-4 py-4">
      <ul className="space-y-2 text-sm">
        {/* Insert Smart Send links here */}
      </ul>
    </div>
  </div>
);

const ServicesDropdown = () => (
  <div className="absolute inset-x-0 top-full hidden group-hover:block bg-white shadow-lg z-50">
    <div className="container mx-auto px-4 py-4 grid grid-cols-4 gap-6 text-sm">
      {/* Column 1 */}
      <div>
        <h4 className="font-semibold mb-2 flex items-center">
          <img src="/icons/range_of_couriers.svg" alt="" className="w-5 h-5 mr-2" />
          Range of Couriers
        </h4>
        <ul className="space-y-1">
          {/* Insert links */}
        </ul>
      </div>
      {/* Columns 2,3,4 similarly */}
    </div>
  </div>
);

const RegularSendersDropdown = () => (
  <div className="absolute inset-x-0 top-full hidden group-hover:block bg-white shadow-lg z-50">
    <div className="container mx-auto px-4 py-4 grid grid-cols-2 gap-6 text-sm">
      {/* Column 1 */}
      <div>
        <h4 className="font-semibold mb-2">Resources for Regular Senders</h4>
        <ul className="space-y-1">
          {/* Insert links */}
        </ul>
      </div>
      {/* Column 2: Marketplace Integrations */}
      <div>
        <h4 className="font-semibold mb-2">Marketplace Integrations</h4>
        <ul className="space-y-1">
          {/* Insert links */}
        </ul>
      </div>
    </div>
  </div>
);

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 relative">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/layout/p2g_logo_new.svg"
              alt="Parcel2Go Logo"
              className="h-8"
            />
          </a>

          {/* Navigation Items */}
          <ul className="flex items-center space-x-6">
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">Smart Send</button>
              <SmartSendDropdown />
            </li>

            <li>
              <a href="/quick-quote" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Get a Quote</a>
            </li>

            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">Services</button>
              <ServicesDropdown />
            </li>

            <li>
              <button onClick={() => alert('Track panel')} className="hover:text-blue-600 focus:outline-none">Track a Parcel</button>
            </li>

            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">Regular Senders</button>
              <RegularSendersDropdown />
            </li>

            <li>
              <a href="/help-centre" className="hover:text-blue-600">Help</a>
            </li>

            <li>
              <a href="/order/confirm" className="hover:text-blue-600">Basket</a>
            </li>

            <li>
              {loggedIn ? (
                <button onClick={() => setLoggedIn(false)} className="hover:text-blue-600 flex items-center">Sign Out <i className="fa fa-user-o ml-1" /></button>
              ) : (
                <button onClick={() => setLoggedIn(true)} className="hover:text-blue-600 flex items-center">Sign In <i className="fa fa-user-o ml-1" /></button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
