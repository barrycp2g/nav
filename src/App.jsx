// src/App.jsx
import React, { useState } from 'react';

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
            {/* Smart Send */}
            <li className="relative group">
              <button className="hover:text-blue-600 focus:outline-none">
                Smart Send
              </button>
              <div className="hidden group-hover:block absolute inset-x-0 top-full bg-white shadow-lg z-50">
                <div className="container mx-auto px-4 py-4">
                  <ul className="grid grid-cols-1 gap-2 text-sm">
                    <li>
                      <a
                        href="/myaccount/uploadeditems/smartersending"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 block"
                      >
                        Go To <strong>Smart Send</strong>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/smartsend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 block"
                      >
                        What is <strong>Smart Send</strong>?
                      </a>
                    </li>
                    <li>
                      <a
                        href="/myaccount/uploadtools"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 block"
                      >
                        Linked Accounts
                      </a>
                    </li>
                    <li>
                      <a
                        href="/myaccount/uploadeditems/letters"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 block"
                      >
                        Bulk Send With Whistl
                      </a>
                    </li>
                    <li>
                      <a
                        href="/myaccount/uploadtools/csv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 block"
                      >
                        Upload Spreadsheet
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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
              <div className="hidden group-hover:block absolute inset-x-0 top-full bg-white shadow-lg z-50">
                <div className="container mx-auto px-4 py-4">
                  <div className="grid grid-cols-4 gap-6 text-sm">
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
                      <ul className="space-y-1">
                        <li>
                          <a href="/couriers" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">
                            All Couriers
                          </a>
                        </li>
                        <li>
                          <a href="/couriers/royal-mail" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">
                            Royal Mail <span className="bg-blue-100 text-blue-700 px-1 ml-1 rounded text-xs">New</span>
                          </a>
                        </li>
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
                        <li><a href="/services/express-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Express Delivery</a></li>
                        <li><a href="/services/send-parcel-no-printer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">No Printer Couriers</a></li>
                        <li><a href="/services/recorded-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Recorded Delivery</a></li>
                        <li><a href="/services/special-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Special Delivery</a></li>
                        <li><a href="/services/parcel-broker" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Parcel Broker</a></li>
                        <li><a href="/business" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Business Shipping</a></li>
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
                        <li><a href="/international-couriers" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">All International Delivery</a></li>
                        <li><a href="/international-shipping-hub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">EU Shipping Info <span className="bg-blue-100 text-blue-700 px-1 ml-1 rounded text-xs">New</span></a></li>
                        <li><a href="/parcel-delivery/usa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">USA Delivery</a></li>
                        <li><a href="/parcel-delivery/canada" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Canada Delivery</a></li>
                        <li><a href="/parcel-delivery/australia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Australia Delivery</a></li>
                        <li><a href="/parcel-delivery/new-zealand" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">New Zealand Delivery</a></li>
                        <li><a href="/international-couriers" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">European Delivery</a></li>
                        <li><a href="/parcel-delivery/germany" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Germany Delivery</a></li>
                        <li><a href="/parcel-delivery/spain-mainland-only" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Spain Delivery</a></li>
                        <li><a href="/parcel-delivery/ireland" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Ireland Delivery</a></li>
                        <li><a href="/parcel-delivery/france" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">France Delivery</a></li>
                        <li><a href="/parcel-delivery/netherlands" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Netherlands Delivery</a></li>
                        <li><a href="/parcel-delivery/norway" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Norway Delivery</a></li>
                        <li><a href="/parcel-delivery/belgium" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Belgium Delivery</a></li>
                        <li><a href="/parcel-delivery-asia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Asia Delivery</a></li>
                        <li><a href="/parcel-delivery/china" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">China Delivery</a></li>
                        <li><a href="/parcel-delivery/hong-kong" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Hong Kong Delivery</a></li>
                        <li><a href="/parcel-delivery/united-arab-emirates" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">UAE Delivery</a></li>
                        <li><a href="/parcel-delivery/india" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">India Delivery</a></li>
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
                        <li><a href="/content/what-is-prepay.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Parcel2Go Prepay</a></li>
                        <li><a href="/postcode-finder" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Postcode Finder</a></li>
                        <li><a href="/volume-calculator" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Parcel Volume Calculator</a></li>
                        <li><a href="/help-centre/parcels/question/documentation/i-have-already-placed-an-order-where-can-i-find-my-label" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Print Your Labels</a></li>
                        <li><a href="/help-centre/parcels/question/documentation/what-documents-do-i-need-to-send-outside-of-the-eu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Print a Commercial Invoice</a></li>
                        <li><a href="/help-centre/parcels/question/collection/i-will-not-be-available-at-the-time-of-collection-what-can-i-do" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Rearrange Your Collection</a></li>
                        <li><a href="/prohibited-items" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Prohibited Items</a></li>
                        <li><a href="/tracking" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Tracking</a></li>
                        <li><a href="/content-hub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Content Hub</a></li>
                        <li><a href="/content/my-parcel-delivery" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Parcel Delivery Advice</a></li>
                        <li><a href="/mobile-app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Mobile App</a></li>
                        <li><a href="/smartsend" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Ecommerce Shipping</a></li>
                      </ul>
                    </div>
                  </div>
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

          {/* Regular Senders */}
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
                    <ul className="space-y-1">
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">What is Smart Send?</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Business Hub</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Business Accounts</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Royal Mail OBA</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Bulk Letter Sending</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Become a VIP</a></li>
                    </ul>
                  </div>
                  {/* Integrations */}
                  <div>
                    <h4 className="font-semibold mb-2">Marketplace Integrations</h4>
                    <ul className="space-y-1">
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Shopify</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">EKM</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">eBay</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Amazon</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">TikTok</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">NOTHS</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">PrestaShop</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Etsy</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Wix</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">Magento</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">ShopWired</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">BluePark</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">SquareSpace</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">OnBuy</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">WooCommerce</a></li>
                      <li><a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 block">BigCommerce</a></li>
                    </ul>
                  </div>
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

          {/* Sign In / Account */}
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
    </nav>
  );
}
