import React, { useState, useContext } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import logo from '../assets/zemoologo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import { useMoralis } from "react-moralis";
import { ConnectButton } from 'web3uikit';
import {
  createTheme,
  ThemeProvider,
  Typography,
  Link,
  IconButton,
  Badge,
} from '@mui/material';
// import Cookies from 'js-cookie';
import { Store } from '../utils/Store';

export default function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div height="200px" className="dark:border-gray-700">
        <nav className="z-10 w-full fixed bg-slate-50 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-2">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-end w-full justify-between">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Image
                      height={100}
                      width={220}
                      src={logo}
                      alt="Workflow"
                      objectFit="contain"
                    />
                  </div>
                  <div className="hidden md:block self-center">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <Link href="/">
                        <a
                          className={
                            router.pathname == '/'
                              ? 'active underline underline-offset-[10px] decoration-[#8247e5] decoration-[3px] font-medium text-lg px-3 py-2 rounded-md'
                              : 'text-black hover:underline hover:decoration-[#8247e5] hover:decoration-[3px] hover:underline-offset-[10px] px-3 py-2 rounded-md text-lg font-medium'
                          }
                        >
                          Home
                        </a>
                      </Link>
                      <Link href="/community">
                        <a
                          className={
                            router.pathname == '/community'
                              ? 'active underline underline-offset-[10px] decoration-[#8247e5] decoration-[3px] font-medium text-lg px-3 py-2 rounded-md'
                              : 'text-black hover:underline hover:decoration-[#8247e5] hover:decoration-[3px] hover:underline-offset-[10px] px-3 py-2 rounded-md text-lg font-medium'
                          }
                        >
                          Community
                        </a>
                      </Link>
                      <Link href="/contact">
                        <a
                          className={
                            router.pathname == '/contact'
                              ? 'active underline underline-offset-[10px] decoration-[#8247e5] decoration-[3px] font-medium text-lg px-3 py-2 rounded-md'
                              : 'text-black hover:underline hover:decoration-[#8247e5] hover:decoration-[3px] hover:underline-offset-[10px] px-3 py-2 rounded-md text-lg font-medium'
                          }
                        >
                          Support
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="self-center md:flex items-center hidden">
                  <div className="">
                    <ConnectButton moralisAuth={false} />
                  </div>

                  
                    <Link href="/cart">
                      {/* <Typography>
                        <div className="text-4xl text-black hover:text-[#8247e5]">
                          <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                      </Typography> */}
                        <IconButton color="primary" aria-label="add to shopping cart" href="/cart">
                          <FontAwesomeIcon icon={faCartShopping} />
                        </IconButton>
                    </Link>
                    
                    

                    

                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {
              <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-200">
                  <Link href="/">
                    <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Home
                    </a>
                  </Link>
                  <Link href="/community">
                    <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Community
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Support
                    </a>
                  </Link>
                </div>
              </div>
            }
          </Transition>
        </nav>
      </div>
  );
}

