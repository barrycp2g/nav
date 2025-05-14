import React, { useState } from 'react';

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header id="header-top" className="hidden sm:block bg-white shadow" role="banner">
      <div className="container mx-auto px-4 flex items-center justify-between py-3" role="navigation">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            alt="Parcel2Go.com"
            src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/layout/p2g_logo_new.svg"
            className="h-8"
          />
        </a>

        {/* Main nav */}
        <ul className="flex items-center space-x-6 text-[#003863]">
          <li>
            <a href="/business" className="hover:text-[#0056a3]">
              Business
            </a>
          </li>
          <li>
            <a href="/quick-quote" className="hover:text-[#0056a3]">
              Get a Quote
            </a>
          </li>

          {/* Services dropdown */}
          <li className="relative group">
            <button className="hover:text-[#0056a3] focus:outline-none">
              Services
            </button>
            <div className="hidden group-hover:block absolute top-full left-0 w-full bg-white shadow-lg z-50">
              <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-4 gap-6">
                  {/* Range of Couriers */}
                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        loading="lazy"
                        src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/range_of_couriers_icon.svg"
                        alt=""
                        className="w-6 h-6 mr-2"
                      />
                      <h4 className="font-semibold">Range of Couriers</h4>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <a href="/couriers" className="hover:text-[#0056a3] block">
                          All Couriers
                        </a>
                      </li>
                      <li>
                        <a href="/couriers/royal-mail" className="hover:text-[#0056a3] block">
                          Royal Mail <span className="text-xs bg-blue-100 text-blue-700 px-1 ml-1 rounded">New</span>
                        </a>
                      </li>
                      <li><a href="/couriers/fedex-express" className="hover:text-[#0056a3] block">FedEx Express</a></li>
                      <li><a href="/couriers/parcelforce" className="hover:text-[#0056a3] block">Parcelforce</a></li>
                      <li><a href="/couriers/ups" className="hover:text-[#0056a3] block">UPS</a></li>
                      <li><a href="/couriers/ups-access-point" className="hover:text-[#0056a3] block">UPS Access Point</a></li>
                      <li><a href="/couriers/tnt" className="hover:text-[#0056a3] block">TNT</a></li>
                      <li><a href="/couriers/evri-drop-off" className="hover:text-[#0056a3] block">Evri Drop-off</a></li>
                      <li><a href="/couriers/evri-collection" className="hover:text-[#0056a3] block">Evri Collection</a></li>
                      <li><a href="/couriers/dpd" className="hover:text-[#0056a3] block">DPD</a></li>
                      <li><a href="/couriers/yodel-direct" className="hover:text-[#0056a3] block">Yodel Direct</a></li>
                      <li><a href="/couriers/citysprint" className="hover:text-[#0056a3] block">CitySprint</a></li>
                      <li><a href="/couriers/inpost" className="hover:text-[#0056a3] block">InPost</a></li>
                      <li><a href="/couriers/usps" className="hover:text-[#0056a3] block">USPS</a></li>
                      <li><a href="/couriers/dhl" className="hover:text-[#0056a3] block">DHL</a></li>
                      <li><a href="/service/whistl" className="hover:text-[#0056a3] block">Whistl</a></li>
                      <li><a href="/couriers/palletways" className="hover:text-[#0056a3] block">Palletways</a></li>
                      <li><a href="/couriers/dx" className="hover:text-[#0056a3] block">DX</a></li>
                      <li><a href="/couriers/landmark" className="hover:text-[#0056a3] block">Landmark</a></li>
                      <li><a href="/couriers/norsk" className="hover:text-[#0056a3] block">Norsk</a></li>
                      <li><a href="/couriers/anpost" className="hover:text-[#0056a3] block">An Post</a></li>
                      <li><a href="/couriers/gls" className="hover:text-[#0056a3] block">GLS</a></li>
                      <li><a href="/couriers/fastway" className="hover:text-[#0056a3] block">Fastway</a></li>
                      <li><a href="/couriers/correos" className="hover:text-[#0056a3] block">Correos</a></li>
                      <li><a href="/business/parcel2go-business-account" className="hover:text-[#0056a3] block">Business Account</a></li>
                    </ul>
                  </div>
                  {/* UK Parcel Delivery */}
                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        loading="lazy"
                        src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/parcel_delivery_icon.svg"
                        alt=""
                        className="w-6 h-6 mr-2"
                      />
                      <h4 className="font-semibold">UK Parcel Delivery</h4>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li><a href="/parcel-delivery/uk" className="hover:text-[#0056a3] block">All UK Delivery Services</a></li>
                      <li><a href="/services/send-a-parcel" className="hover:text-[#0056a3] block">Send a Parcel</a></li>
                      <li><a href="/services/postage-costs" className="hover:text-[#0056a3] block">Postage Costs</a></li>
                      <li><a href="/services/drop-off-services" className="hover:text-[#0056a3] block">Drop-Off Services</a></li>
                      <li><a href="/services/collection-services" className="hover:text-[#0056a3] block">Collection Services</a></li>
                      <li><a href="/services/letters-and-small-parcels" className="hover:text-[#0056a3] block">Letters & Small Parcels</a></li>
                      <li><a href="/services/small-parcel-delivery" className="hover:text-[#0056a3] block">Small Parcels</a></li>
                      <li><a href="/services/evri-postable" className="hover:text-[#0056a3] block">Letterbox Parcels - Evri Postable</a></li>
                      <li><a href="/services/large-parcel-delivery" className="hover:text-[#0056a3] block">Large Parcels</a></li>
                      <li><a href="/services/heavy-parcel-delivery" className="hover:text-[#0056a3] block">Heavy Parcels</a></li>
                      <li><a href="/services/pallet-delivery" className="hover:text-[#0056a3] block">Pallet Delivery</a></li>
                      <li><a href="/services/same-day-delivery" className="hover:text-[#0056a3] block">Same-Day Delivery</a></li>
                      <li><a href="/services/next-day-delivery" className="hover:text-[#0056a3] block">Next-Day Delivery</a></li>
                      <li><a href="/services/48-hour-couriers" className="hover:text-[#0056a3] block">2 to 3 Day</a></li>
                      <li><a href="/services/standard-3-day-delivery" className="hover:text-[#0056a3] block">3 Day Delivery</a></li>
                      <li><a href="/services/weekend-delivery" className="hover:text-[#0056a3] block">Weekend Delivery</a></li>
                      <li><a href="/services/express-delivery" className="hover:text-[#0056a3] block">Express Delivery</a></li>
                      <li><a href="/services/send-parcel-no-printer" className="hover:text-[#0056a3] block">No Printer Couriers</a></li>
                      <li><a href="/services/recorded-delivery" className="hover:text-[#0056a3] block">Recorded Delivery</a></li>
                      <li><a href="/services/special-delivery" className="hover:text-[#0056a3] block">Special Delivery</a></li>
                      <li><a href="/services/parcel-broker" className="hover:text-[#0056a3] block">Parcel broker</a></li>
                      <li><a href="/business" className="hover:text-[#0056a3] block">Business Shipping</a></li>
                    </ul>
                  </div>
                  {/* International Parcel Delivery */}
                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        loading="lazy"
                        src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/international_icon.svg"
                        alt=""
                        className="w-6 h-6 mr-2"
                      />
                      <h4 className="font-semibold">International Parcel Delivery</h4>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li><a href="/international-couriers" className="hover:text-[#0056a3] block">All International Delivery</a></li>
                      <li><a href="/international-shipping-hub" className="hover:text-[#0056a3] block">EU Shipping Info <span className="text-xs bg-blue-100 text-blue-700 px-1 ml-1 rounded">New</span></a></li>
                      <li><a href="/parcel-delivery/usa" className="hover:text-[#0056a3] block">USA Delivery</a></li>
                      <li><a href="/parcel-delivery/canada" className="hover:text-[#0056a3] block">Canada Delivery</a></li>
                      <li><a href="/parcel-delivery/australia" className="hover:text-[#0056a3] block">Australia Delivery</a></li>
                      <li><a href="/parcel-delivery/new-zealand" className="hover:text-[#0056a3] block">New Zealand Delivery</a></li>
                      <li><a href="/international-couriers" className="hover:text-[#0056a3] block">European Delivery</a></li>
                      <li><a href="/parcel-delivery/germany" className="hover:text-[#0056a3] block">Germany Delivery</a></li>
                      <li><a href="/parcel-delivery/spain-mainland-only" className="hover:text-[#0056a3] block">Spain Delivery</a></li>
                      <li><a href="/parcel-delivery/ireland" className="hover:text-[#0056a3] block">Ireland Delivery</a></li>
                      <li><a href="/parcel-delivery/france" className="hover:text-[#0056a3] block">France Delivery</a></li>
                      <li><a href="/parcel-delivery/netherlands" className="hover:text-[#0056a3] block">Netherlands Delivery</a></li>
                      <li><a href="/parcel-delivery/norway" className="hover:text-[#0056a3] block">Norway Delivery</a></li>
                      <li><a href="/parcel-delivery/belgium" className="hover:text-[#0056a3] block">Belgium Delivery</a></li>
                      <li><a href="/parcel-delivery-asia" className="hover:text-[#0056a3] block">Asia Delivery</a></li>
                      <li><a href="/parcel-delivery/china" className="hover:text-[#0056a3] block">China Delivery</a></li>
                      <li><a href="/parcel-delivery/hong-kong" className="hover:text-[#0056a3] block">Hong Kong Delivery</a></li>
                      <li><a href="/parcel-delivery/united-arab-emirates" className="hover:text-[#0056a3] block">UAE Delivery</a></li>
                      <li><a href="/parcel-delivery/india" className="hover:text-[#0056a3] block">India Delivery</a></li>
                    </ul>
                  </div>
                  {/* Delivery Tools */}
                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        loading="lazy"
                        src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/tools_icon.svg"
                        alt=""
                        className="w-6 h-6 mr-2"
                      />
                      <h4 className="font-semibold">Delivery Tools</h4>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li><a href="/content/what-is-prepay.aspx" className="hover:text-[#0056a3] block">Parcel2Go Prepay</a></li>
                      <li><a href="/postcode-finder" className="hover:text-[#0056a3] block">Postcode Finder</a></li>
                      <li><a href="/volume-calculator" className="hover:text-[#0056a3] block">Parcel Volume Calculator</a></li>
                      <li><a href="/help-centre/parcels/question/documentation/i-have-already-placed-an-order-where-can-i-find-my-label" className="hover:text-[#0056a3] block">Print Your Labels</a></li>
                      <li><a href="/help-centre/parcels/question/documentation/what-documents-do-i-need-to-send-outside-of-the-eu" className="hover:text-[#0056a3] block">Print a Commercial Invoice</a></li>
                      <li><a href="/help-centre/parcels/question/collection/i-will-not-be-available-at-the-time-of-collection-what-can-i-do" className="hover:text-[#0056a3] block">Rearrange Your Collection</a></li>
                      <li><a href="/prohibited-items" className="hover:text-[#0056a3] block">Prohibited Items</a></li>
                      <li><a href="/tracking" className="hover:text-[#0056a3] block">Tracking</a></li>
                      <li><a href="/content-hub" className="hover:text-[#0056a3] block">Content Hub</a></li>
                      <li><a href="/content/my-parcel-delivery" className="hover:text-[#0056a3] block">Parcel Delivery Advice</a></li>
                      <li><a href="/mobile-app" className="hover:text-[#0056a3] block">Mobile App</a></li>
                      <li><a href="/smartsend" className="hover:text-[#0056a3] block">Ecommerce Shipping</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Track a Parcel */}
          <li>
            <a href="javascript:void(0)" onClick={() => alert('Tracking panel')} className="hover:text-[#0056a3]">
              Track a Parcel
            </a>
          </li>

          {/* Smart Send dropdown */}
          <li className="relative group">
            <button className="hover:text-[#0056a3] focus:outline-none">
              Smart Send
            </button>
            <div className="hidden group-hover:block absolute top-full left-0 w-full bg-white shadow-lg z-50">
              <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-1">
                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        loading="lazy"
                        src="https://cdn.parcel2go.com/42c5534b-0f47-4342-80f0-8f21203f0669/homepage/redesign/bulk%20tools%20(1).svg"
                        alt=""
                        className="w-6 h-6 mr-2"
                      />
                      <h4 className="font-semibold">Smart <i>Send</i></h4>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li><a href="/myaccount/uploadeditems/smartersending" className="hover:text-[#0056a3] block">Go To <strong>Smart <i>Send</i></strong></a></li>
                      <li><a href="/smartsend" className="hover:text-[#0056a3] block">What is <strong>Smart <i>Send</i></strong>?</a></li>
                      <li><a href="/myaccount/uploadtools" className="hover:text-[#0056a3] block">Linked Accounts</a></li>
                      <li><a href="/myaccount/uploadeditems/letters" className="hover:text-[#0056a3] block">Bulk Send With Whistl</a></li>
                      <li><a href="/myaccount/uploadtools/csv" className="hover:text-[#0056a3] block">Upload Spreadsheet</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Help */}
          <li>
            <a href="/help-centre" className="hover:text-[#0056a3]">
              Help
            </a>
          </li>

          {/* Basket */}
          <li>
            <a href="/order/confirm" id="basket-container" className="flex items-center hover:text-[#0056a3]">
              <span className="hidden sm:inline">Basket</span>
              <i className="fa fa-shopping-basket ml-1"></i>
            </a>
          </li>

          {/* Account/Login */}
          {loggedIn ? (
            <li className="relative group">
              <button className="hover:text-[#0056a3] focus:outline-none flex items-center">
                <i className="fa fa-user-o mr-1"></i>Account
              </button>
              <div className="hidden group-hover:block absolute top-full right-0 w-48 bg-white shadow-lg z-50">
                <ul className="py-2">
                  <li><a href="/myaccount/myorders" className="block px-4 py-2 hover:bg-gray-100">My Orders</a></li>
                  <li><a href="/myaccount/preferences" className="block px-4 py-2 hover:bg-gray-100">My Settings</a></li>
                  <li><button onClick={() => setLoggedIn(false)} className="w-full text-left px-4 py-2 hover:bg-gray-100">Sign Out</button></li>
                </ul>
              </div>
            </li>
          ) : (
            <li>
              <button onClick={() => setLoggedIn(true)} className="hover:text-[#0056a3] flex items-center focus:outline-none">
                Sign In <i className="fa fa-user-o ml-1"></i>
              </button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
