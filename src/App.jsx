import React, { useState } from 'react';



const NavBar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);



  const toggleAuthState = () => {

    setIsLoggedIn(!isLoggedIn);

    setActiveDropdown(null);

  };



  const toggleDropdown = (dropdownName) => {

    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);

  };



  // SVG Icons as components

  const UserIcon = () => (

http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />

    </svg>

  );



  const ChevronDownIcon = () => (

https://www.parcel2go.com/images/logo.svg"

                  alt="Parcel2Go"

                  className="h-8"

                  onError={(e) => {

e.target.onerror = null;

e.target.src = "https://via.placeholder.com/150x40?text=Parcel2Go";

                  }}

                />

              </a>

            </div>



            {/* Desktop Navigation */}

            <div className="hidden md:flex items-center space-x-6">

              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Smart Send</a>

              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Get a Quote</a>



              {/* Services Dropdown */}

              <div className="relative">

                <button

                  className="text-gray-800 hover:text-blue-600 font-medium flex items-center"

                  onClick={(e) => {

                    e.stopPropagation();

                    toggleDropdown('services');

                  }}

                >

                  Services

                  <ChevronDownIcon />

                </button>

                {activeDropdown === 'services' && (

                  <div

                    className="absolute z-10 left-0 mt-2 w-96 bg-white shadow-lg rounded-md p-4 grid grid-cols-3 gap-4"

                    onClick={(e) => e.stopPropagation()}

                  >

{servicesDropdown.columns.map((column, index) => (

                      <div key={index}>

                        <h3 className="font-bold text-blue-900 mb-2">{column.title}</h3>

                        <ul className="space-y-2">

{column.links.map((link, linkIndex) => (

                            <li key={linkIndex}>

                              <a

                                href={link.href}

                                className="text-gray-700 hover:text-blue-600 text-sm"

                                target="_blank"

                                rel="noopener noreferrer"

                              >

                                {link.text}

                              </a>

                            </li>

                          ))}

                        </ul>

                      </div>

                    ))}

                  </div>

                )}

              </div>



              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Track a Parcel</a>



              {/* Regular Senders Dropdown */}

              <div className="relative">

                <button

                  className="text-gray-800 hover:text-blue-600 font-medium flex items-center"

                  onClick={(e) => {

                    e.stopPropagation();

                    toggleDropdown('regularSenders');

                  }}

                >

                  Regular Senders

                  <ChevronDownIcon />

                </button>

                {activeDropdown === 'regularSenders' && (

                  <div

                    className="absolute z-10 left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 grid grid-cols-2 gap-4"

                    onClick={(e) => e.stopPropagation()}

                  >

{regularSendersDropdown.columns.map((column, index) => (

                      <div key={index}>

                        <h3 className="font-bold text-blue-900 mb-2">{column.title}</h3>

                        <ul className="space-y-2">

{column.links.map((link, linkIndex) => (

                            <li key={linkIndex}>

                              <a

                                href={link.href}

                                className="text-gray-700 hover:text-blue-600 text-sm"

                                target="_blank"

                                rel="noopener noreferrer"

                              >

                                {link.text}

                              </a>

                            </li>

                          ))}

                        </ul>

                      </div>

                    ))}

                  </div>

                )}

              </div>



              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Help</a>



              {/* Basket */}

              <a href="#" className="text-gray-800 hover:text-blue-600">

                <ShoppingBagIcon />

              </a>



              {/* Auth Toggle */}

              <button

                onClick={(e) => {

                  e.stopPropagation();

                  toggleAuthState();

                }}

                className="text-gray-800 hover:text-blue-600 flex items-center"

              >

                <UserIcon />

                <span className="ml-1">{isLoggedIn ? 'Sign Out' : 'Sign In'}</span>

              </button>

            </div>



            {/* Mobile menu button */}

            <div className="md:hidden">

              <button className="text-gray-800">

                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

                </svg>

              </button>

            </div>

          </div>

        </div>

      </nav>

    </div>

  );

};



export default NavBar;
