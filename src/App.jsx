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

          {/* Navigation Items */}
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
                <div className="container mx-auto px-4 py-4">
                  <div className="grid grid-cols-4 gap-6 text-sm">
                    {/* Column 1 */}
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
                        <li><a href="/couriers/ups-access-point" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">UPS Access Point</a></li>
                        <li><a href="/couriers/tnt" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">TNT</a></li>
                        <li><a href="/couriers/evri-drop-off" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Evri Drop-off</a></li>
                        <li><a href="/couriers/evri-collection" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Evri Collection</a></li>
                        <li><a href="/couriers/dpd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">DPD</a></li>
                        <li><a href="/couriers/yodel-direct" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Yodel Direct</a></li>
                        <li><a href="/couriers/citysprint" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">CitySprint</a></li>
                        <li><a href="/couriers/inpost" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">InPost</a></li>
                        <li><a href="/couriers/usps" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">USPS</a></li>
                        <li><a href="/couriers/dhl" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">DHL</a></li>
                        <li><a href="/service/whistl" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Whistl</a></li>
                        <li><a href="/couriers/palletways" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Palletways</a></li>
                        <li><a href="/couriers/dx" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">DX</a></li>
                        <li><a href="/couriers/landmark" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Landmark</a></li>
                        <li><a href="/couriers/norsk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Norsk</a></li>
                        <li><a href="/couriers/anpost" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">An Post</a></li>
                        <li><a href="/couriers/gls" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">GLS</a></li>
                        <li><a href="/couriers/fastway" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Fastway</a></li>
                        <li><a href="/couriers/correos" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Correos</a></li>
                        <li><a href="/business/parcel2go-business-account" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Business Account</a></li>
                      </ul>
                    </div>

                    {/* Column 2: UK Parcel Delivery */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <img src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/parcel_delivery_icon.svg" alt="" className="w-5 h-5 mr-2" />
                        UK Parcel Delivery
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li><a href="/parcel-delivery/uk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">All UK Delivery Services</a></li>
                        <li><a href="/services/send-a-parcel" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Send a Parcel</a></li>
                        <li><a href="/services/postage-costs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Postage Costs</a></li>
                        <li><a href="/services/drop-off-services" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Drop-Off Services</a></li>
                        <li><a href="/services/collection-services" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Collection Services</a></li>
                        <li><a href="/services/letters-and-small-parcels" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Letters & Small Parcels</a></li>
                        <li><a href="/services/small-parcel-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Small Parcels</a></li>
                        <li><a href="/services/evri-postable" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Letterbox Parcels – Evri Postable</a></li>
                        <li><a href="/services/large-parcel-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Large Parcels</a></li>
                        <li><a href="/services/heavy-parcel-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Heavy Parcels</a></li>
                        <li><a href="/services/pallet-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Pallet Delivery</a></li>
                        <li><a href="/services/same-day-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Same-Day Delivery</a></li>
                        <li><a href="/services/next-day-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Next-Day Delivery</a></li>
                        <li><a href="/services/48-hour-couriers" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">2 to 3 Day</a></li>
                        <li><a href="/services/standard-3-day-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">3 Day Delivery</a></li>
                        <li><a href="/services/weekend-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Weekend Delivery</a></li>
                        <li><a href="/services/express-delivery" target="_blank" rel="noopener noreferrer" className="hover
