import React, { useState } from 'react';

// ——— Smart Send Dropdown ———
function SmartSendDropdown() {
  return (
    <div className="absolute inset-x-0 top-full hidden group-hover:block bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <ul className="space-y-2 text-sm">
          {/* …Insert Smart Send links here… */}
        </ul>
      </div>
    </div>
  );
}

// ——— Services Dropdown ———
function ServicesDropdown() {
  return (
    <div className="absolute inset-x-0 top-full hidden group-hover:block bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 grid grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2 flex items-center">
            <img
              src="https://cdn.parcel2go.com/.../range_of_couriers_icon.svg"
              alt=""
              className="w-5 h-5 mr-2"
            />
            Range of Couriers
          </h4>
          <ul className="space-y-1">
            {/* …Insert Range of Couriers links… */}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 flex items-center">
            <img
              src="https://cdn.parcel2go.com/.../parcel_delivery_icon.svg"
              alt=""
              className="w-5 h-5 mr-2"
            />
            UK Parcel Delivery
          </h4>
          <ul className="space-y-1">
            {/* …Insert UK Parcel Delivery links… */}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 flex items-center">
            <img
              src="https://cdn.parcel2go.com/.../international_icon.svg"
              alt=""
              className="w-5 h-5 mr-2"
            />
            International Parcel Delivery
          </h4>
          <ul className="space-y-1">
            {/* …Insert International Parcel Delivery links… */}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 flex items-center">
            <img
              src="https://cdn.parcel2go.com/.../tools_icon.svg"
              alt=""
              className="w-5 h-5 mr-2"
            />
            Delivery Tools
          </h4>
          <ul className="space-y-1">
            {/* …Insert Delivery Tools links… */}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ——— Regular Senders Dropdown ———
function RegularSendersDropdown() {
  return (
    <div className="absolute inset-x-0 top-full hidden group-hover:block bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 grid grid-cols-2 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Resources for Regular Senders</h4>
          <ul className="space-y-1">
            {/* …Insert Resources links… */}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Marketplace Integrations</h4>
          <ul className="space-y-1">
            {/* …Insert Integrations links… */}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ——— Main Component ———
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

          {/* Nav items */}
          <ul className="flex items-center space-x-6">
            {/* Smart Send */}
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">
                Smart Send
              </button>
              <SmartSendDropdown />
            </li>

            {/* Get a Quote */}
            <li>
              <a
                href="/quick-quote"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                Get a Quote
              </a>
            </li>

            {/* Services */}
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">
                Services
              </button>
              <ServicesDropdown />
            </li>

            {/* Track a Parcel */}
            <li>
              <button
                onClick={() => alert('Tracking panel')}
                className="hover:text-blue-600 focus:outline-none"
              >
                Track a Parcel
              </button>
            </li>

            {/* Regular Senders */}
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">
                Regular Senders
              </button>
              <RegularSendersDropdown />
            </li>

            {/* Help */}
            <li>
              <a href="/help-centre" className="hover:text-blue-600">
                Help
              </a>
            </li>

            {/* Basket */}
            <li>
              <a href="/order/confirm" className="hover:text-blue-600">
                Basket
              </a>
            </li>

            {/* Sign In / Out */}
            <li>
              {loggedIn ? (
                <button
                  onClick={() => setLoggedIn(false)}
                  className="hover:text-blue-600 flex items-center focus:outline-none"
                >
                  Sign Out <i className="fa fa-user-o ml-1" />
                </button>
              ) : (
                <button
                  onClick={() => setLoggedIn(true)}
                  className="hover:text-blue-600 flex items-center focus:outline-none"
                >
                  Sign In <i className="fa fa-user-o ml-1" />
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
