import React, { useState } from 'react';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
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
          <ul className="flex items-center space-x-6">
            {/* Smart Send Dropdown */}
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">
                Smart Send
              </button>
              <div className="absolute inset-x-0 top-full hidden group-hover:block bg-white shadow-lg z-50">
                <div className="container mx-auto px-4 py-4">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/myaccount/uploadeditems/smartersending" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">
                        Go To <strong>Smart Send</strong>
                      </a>
                    </li>
                    <li>
                      <a href="/smartsend" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">
                        What is <strong>Smart Send</strong>?
                      </a>
                    </li>
                    <li>
                      <a href="/myaccount/uploadtools" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">
                        Linked Accounts
                      </a>
                    </li>
                    <li>
                      <a href="/myaccount/uploadeditems/letters" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">
                        Bulk Send With Whistl
                      </a>
                    </li>
                    <li>
                      <a href="/myaccount/uploadtools/csv" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">
                        Upload Spreadsheet
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Get a Quote */}
            <li>
              <a href="/quick-quote" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                Get a Quote
              </a>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">Services</button>
              <div className="absolute inset-x-0 top-full hidden group-hover:block bg-white shadow-lg z-50">
                <div className="container mx-auto px-4 py-4 grid grid-cols-4 gap-6 text-sm">
                  {/* Range of Couriers */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <img src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/range_of_couriers_icon.svg" alt="" className="w-5 h-5 mr-2" />
                      Range of Couriers
                    </h4>
                    <ul className="space-y-1">
                      <li><a href="/couriers" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">All Couriers</a></li>
                      <li><a href="/couriers/royal-mail" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Royal Mail <span className="bg-blue-100 text-blue-700 px-1 ml-1 rounded text-xs">New</span></a></li>
                      <li><a href="/couriers/fedex-express" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">FedEx Express</a></li>
                      <li><a href="/couriers/parcelforce" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Parcelforce</a></li>
                      <li><a href="/couriers/ups" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">UPS</a></li>
                    </ul>
                  </div>

                  {/* UK Parcel Delivery */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <img src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/parcel_delivery_icon.svg" alt="" className="w-5 h-5 mr-2" />
                      UK Parcel Delivery
                    </h4>
                    <ul className="space-y-1">
                      <li><a href="/parcel-delivery/uk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">All UK Delivery Services</a></li>
                      <li><a href="/services/send-a-parcel" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Send a Parcel</a></li>
                      <li><a href="/services/postage-costs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Postage Costs</a></li>
                      <li><a href="/services/drop-off-services" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Drop-Off Services</a></li>
                    </ul>
                  </div>

                  {/* International Parcel Delivery */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <img src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/international_icon.svg" alt="" className="w-5 h-5 mr-2" />
                      International Parcel Delivery
                    </h4>
                    <ul className="space-y-1">
                      <li><a href="/international-couriers" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">All International Delivery</a></li>
                      <li><a href="/international-shipping-hub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">EU Shipping Info <span className="bg-blue-100 text-blue-700 px-1 ml-1 rounded text-xs">New</span></a></li>
                    </ul>
                  </div>

                  {/* Delivery Tools */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <img src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/tools_icon.svg" alt="" className="w-5 h-5 mr-2" />
                      Delivery Tools
                    </h4>
                    <ul className="space-y-1">
                      <li><a href="/content/what-is-prepay.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Parcel2Go Prepay</a></li>
                      <li><a href="/postcode-finder" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Postcode Finder</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Track a Parcel */}
            <li>
              <a href="#" className="hover:text-blue-600">
                Track a Parcel
              </a>
            </li>

            {/* Regular Senders Dropdown */}
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">
                Regular Senders
              </button>
              <div className="absolute inset-x-0 top-full hidden group-hover:block bg-white shadow-lg z-50">
                <div className="container mx-auto px-4 py-4 grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Resources for Regular Senders</h4>
                    <ul className="space-y-1">
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">What is Smart Send?</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Business Hub</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Marketplace Integrations</h4>
                    <ul className="space-y-1">
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Shopify</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">EKM</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Help */}
            <li>
              <a href="/help-centre" className="hover:text-blue-600">Help</a>
            </li>

            {/* Basket */}
            <li>
              <a href="/order/confirm" className="hover:text-blue-600">Basket</a>
            </li>

            {/* Sign In / Out */}
            <li>
              {loggedIn ? (
                <button onClick={() => setLoggedIn(false)} className="hover:text-blue-600 flex items-center focus:outline-none">
                  Sign Out <i className="fa fa-user-o ml-1"></i>
                </button>
              ) : (
                <button onClick={() => setLoggedIn(true)} className="hover:text-blue-600 flex items-center focus:outline-none">
                  Sign In <i className="fa fa-user-o ml-1"></i>
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
