import React, { useState } from "react";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <a href="#">
            <img
              src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/layout/p2g_logo_new.svg"
              alt="Parcel2Go Logo"
              className="h-8"
            />
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Smart Send
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Get a Quote
            </a>

            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-max bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                <div className="grid grid-cols-4 gap-6 p-4">
                  <div>
                    <h4 className="font-semibold mb-2">Range of Couriers</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">UK Parcel Delivery</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">International Parcel Delivery</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Delivery Tools</h4>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="text-gray-600 hover:text-blue-600">
              Track a Parcel
            </a>

            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600">
                Regular Senders
              </button>
              <div className="absolute left-0 mt-2 w-max bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                <div className="grid grid-cols-2 gap-6 p-4">
                  <div>
                    <h4 className="font-semibold mb-2">Resources for Regular Senders</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Marketplace Integrations</h4>
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
  return (
    <div>
      <NavBar />
    </div>
  );
}
