import React, { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/layout/p2g_logo_new.svg"
              alt="Parcel2Go Logo"
              className="h-8"
            />
          </a>

          {/* Nav items */}
          <ul className="flex items-center space-x-6 text-gray-800">
            {/* Business Link */}
            <li>
              <a href="/business" className="hover:text-blue-600">
                Business
              </a>
            </li>

            {/* Get a Quote Link */}
            <li>
              <a href="/quick-quote" className="hover:text-blue-600">
                Get a Quote
              </a>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">
                Services
              </button>
              <div className="hidden group-hover:block absolute inset-x-0 top-full bg-white shadow-lg z-50">
                <div className="container mx-auto px-4 py-4">
                  <div className="grid grid-cols-4 gap-6">
                    {/* Range of Couriers */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <img
                          src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/range_of_couriers_icon.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        Range of Couriers
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li><a href="/couriers">All Couriers</a></li>
                        <li><a href="/couriers/royal-mail">Royal Mail</a></li>
                        <li><a href="/couriers/fedex-express">FedEx Express</a></li>
                        {/* Additional links */}
                      </ul>
                    </div>

                    {/* UK Parcel Delivery */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <img
                          src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/parcel_delivery_icon.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        UK Parcel Delivery
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li><a href="/parcel-delivery/uk">All UK Delivery Services</a></li>
                        <li><a href="/services/send-a-parcel">Send a Parcel</a></li>
                        {/* Additional links */}
                      </ul>
                    </div>

                    {/* International Parcel Delivery */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <img
                          src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/international_icon.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        International Parcel Delivery
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li><a href="/international-couriers">All International Delivery</a></li>
                        {/* Additional links */}
                      </ul>
                    </div>

                    {/* Delivery Tools */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <img
                          src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/tools_icon.svg"
                          alt=""
                          className="w-5 h-5 mr-2"
                        />
                        Delivery Tools
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li><a href="/content/what-is-prepay.aspx">Parcel2Go Prepay</a></li>
                        <li><a href="/postcode-finder">Postcode Finder</a></li>
                        {/* Additional links */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Track a Parcel Link */}
            <li>
              <a href="/track-parcel" className="hover:text-blue-600">
                Track a Parcel
              </a>
            </li>

            {/* Regular Senders Dropdown */}
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">
                Regular Senders
              </button>
              <div className="hidden group-hover:block absolute inset-x-0 top-full bg-white shadow-lg z-50">
                <div className="container mx-auto px-4 py-4">
                  <div className="grid grid-cols-2 gap-8 text-sm">
                    {/* Resources */}
                    <div>
                      <h4 className="font-semibold mb-2">Resources for Regular Senders</h4>
                      <ul className="space-y-1 text-sm">
                        <li><a href="#">What is Smart Send?</a></li>
                        <li><a href="#">Business Hub</a></li>
                        <li><a href="#">Business Accounts</a></li>
                        {/* Additional links */}
                      </ul>
                    </div>

                    {/* Integrations */}
                    <div>
                      <h4 className="font-semibold mb-2">Marketplace Integrations</h4>
                      <ul className="space-y-1 text-sm">
                        <li><a href="#">Shopify</a></li>
                        <li><a href="#">EKM</a></li>
                        <li><a href="#">eBay</a></li>
                        {/* Additional links */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Help Link */}
            <li>
              <a href="/help-centre" className="hover:text-blue-600">
                Help
              </a>
            </li>

            {/* Basket Link */}
            <li>
              <a href="/order/confirm" className="hover:text-blue-600">
                Basket
              </a>
            </li>

            {/* Account / Sign In */}
            <li>
              {loggedIn ? (
                <button onClick={() => setLoggedIn(false)} className="hover:text-blue-600">
                  Sign Out
                </button>
              ) : (
                <button onClick={() => setLoggedIn(true)} className="hover:text-blue-600">
                  Sign In
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
