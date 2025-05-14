import React, { useState } from 'react';
import { ChevronDownIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';

// ——— Smart Send Dropdown ———
function SmartSendDropdown() {
  return (
    <div className="fixed left-0 right-0 top-full hidden group-hover:block bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-blue-900 mb-4 text-lg">Smart Send Features</h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-blue-600">Bulk Send</a></li>
              <li><a href="#" className="hover:text-blue-600">Address Book</a></li>
              <li><a href="#" className="hover:text-blue-600">Saved Quotes</a></li>
              <li><a href="#" className="hover:text-blue-600">API Integration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-900 mb-4 text-lg">For Business</h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-blue-600">Business Account</a></li>
              <li><a href="#" className="hover:text-blue-600">Volume Discounts</a></li>
              <li><a href="#" className="hover:text-blue-600">Dedicated Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-900 mb-4 text-lg">Resources</h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-blue-600">Shipping Guides</a></li>
              <li><a href="#" className="hover:text-blue-600">Packaging Tips</a></li>
              <li><a href="#" className="hover:text-blue-600">Video Tutorials</a></li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-2">New to Smart Send?</h4>
            <p className="text-sm text-gray-600 mb-3">Save time and money with our bulk shipping tools</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ——— Services Dropdown ———
function ServicesDropdown() {
  return (
    <div className="fixed left-0 right-0 top-full hidden group-hover:block bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center">
              <img src="https://cdn.parcel2go.com/icons/uk-delivery.svg" alt="UK Delivery" className="w-5 h-5 mr-2" />
              UK Parcel Delivery
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-blue-600">All UK Delivery Services</a></li>
              <li><a href="#" className="hover:text-blue-600">Postage Costs</a></li>
              <li><a href="#" className="hover:text-blue-600">Large Parcels</a></li>
              <li><a href="#" className="hover:text-blue-600">Drop-Off Services</a></li>
              <li><a href="#" className="hover:text-blue-600">Collection Services</a></li>
              <li><a href="#" className="hover:text-blue-600">eBay Quicksend</a></li>
              <li><a href="#" className="hover:text-blue-600">Pallet Delivery</a></li>
              <li><a href="#" className="hover:text-blue-600">Same-Day Delivery</a></li>
              <li><a href="#" className="hover:text-blue-600">Letters & Small Parcels</a></li>
              <li><a href="#" className="hover:text-blue-600">Next-Day Delivery</a></li>
              <li><a href="#" className="hover:text-blue-600">Weekend Delivery</a></li>
              <li><a href="#" className="hover:text-blue-600">Small Parcels</a></li>
              <li><a href="#" className="hover:text-blue-600">No Printer Couriers</a></li>
              <li><a href="#" className="hover:text-blue-600">3 Day Delivery</a></li>
              <li><a href="#" className="hover:text-blue-600">Heavy Parcels</a></li>
              <li><a href="#" className="hover:text-blue-600">2 to 3 Day</a></li>
              <li><a href="#" className="hover:text-blue-600">Express Delivery</a></li>
              <li><a href="#" className="hover:text-blue-600">Recorded Delivery</a></li>
              <li><a href="#" className="hover:text-blue-600">Evri Postable</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center">
              <img src="https://cdn.parcel2go.com/icons/tools.svg" alt="Tools" className="w-5 h-5 mr-2" />
              Delivery Tools
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-blue-600">Parcel2Go Prepay</a></li>
              <li><a href="#" className="hover:text-blue-600">Postcode Finder</a></li>
              <li><a href="#" className="hover:text-blue-600">Parcel Volume Calculator</a></li>
              <li><a href="#" className="hover:text-blue-600">Print Your Labels</a></li>
              <li><a href="#" className="hover:text-blue-600">Print a Commercial Invoice</a></li>
              <li><a href="#" className="hover:text-blue-600">Rearrange Your Collection</a></li>
              <li><a href="#" className="hover:text-blue-600">Prohibited Items</a></li>
              <li><a href="#" className="hover:text-blue-600">Track a Parcel</a></li>
              <li><a href="#" className="hover:text-blue-600">Content Hub</a></li>
              <li><a href="#" className="hover:text-blue-600">Parcel Delivery Advice</a></li>
              <li><a href="#" className="hover:text-blue-600">Mobile App</a></li>
              <li><a href="#" className="hover:text-blue-600">Ecommerce Shipping</a></li>
              <li><a href="#" className="hover:text-blue-600">Despatch Bay Alternative</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ——— Regular Senders Dropdown ———
function RegularSendersDropdown() {
  return (
    <div className="fixed left-0 right-0 top-full hidden group-hover:block bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-blue-900 mb-4 text-lg">For Business</h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-blue-600">Business Account</a></li>
              <li><a href="#" className="hover:text-blue-600">Business Delivery</a></li>
              <li><a href="#" className="hover:text-blue-600">API Integration</a></li>
              <li><a href="#" className="hover:text-blue-600">Bulk Upload</a></li>
              <li><a href="#" className="hover:text-blue-600">Volume Discounts</a></li>
              <li><a href="#" className="hover:text-blue-600">Dedicated Account Manager</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-900 mb-4 text-lg">For Ecommerce</h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:text-blue-600">eBay Integration</a></li>
              <li><a href="#" className="hover:text-blue-600">Amazon Integration</a></li>
              <li><a href="#" className="hover:text-blue-600">Etsy Integration</a></li>
              <li><a href="#" className="hover:text-blue-600">Shopify Integration</a></li>
              <li><a href="#" className="hover:text-blue-600">WooCommerce Integration</a></li>
              <li><a href="#" className="hover:text-blue-600">Magento Integration</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="bg-blue-50 p-6 rounded-lg flex items-center">
            <div className="flex-1">
              <h4 className="font-bold text-blue-900 text-lg mb-2">Ready to save with a business account</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SmartSendDropdown, ServicesDropdown, RegularSendersDropdown };
