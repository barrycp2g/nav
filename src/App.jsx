import React, { useState } from "react";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow">
      {/* Make this container the positioning context */}
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#">
            <img
              src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/layout/p2g_logo_new.svg"
              alt="Parcel2Go Logo"
              className="h-8"
            />
          </a>

          {/* Nav links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Smart Send
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Get a Quote
            </a>

            {/* Services dropdown */}
            <div className="group inline-block">
              <button className="text-gray-600 hover:text-blue-600">
                Services
              </button>
              {/* Now absolute to the full-width container above */}
              <div className="absolute top-full left-0 w-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
                <div className="container mx-auto px-4 py-4">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Range of Couriers</h4>
                      {/* …links */}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">UK Parcel Delivery</h4>
                      {/* …links */}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        International Parcel Delivery
                      </h4>
                      {/* …links */}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Delivery Tools</h4>
                      {/* …links */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="text-gray-600 hover:text-blue-600">
              Track a Parcel
            </a>

            {/* Regular Senders dropdown */}
            <div className="group inline-block">
              <button className="text-gray-600 hover:text-blue-600">
                Regular Senders
              </button>
              <div className="absolute top-full left-0 w-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50">
                <div className="container mx-auto px-4 py-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Resources for Regular Senders
                      </h4>
                      {/* …links */}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Marketplace Integrations
                      </h4>
                      {/* …links */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="text-gray-600 hover:text-blue-600">
              Help
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              🛒
            </a>

            <button
              onClick={() => setLoggedIn(!loggedIn)}
              className="text-gray-600 hover:text-blue-600 flex items-center"
            >
              {loggedIn ? "Sign Out" : "Sign In"}
              <span className="ml-1">👤</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  return <NavBar />;
}
