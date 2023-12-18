/** @format */

"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// import * as Logo from '@/app/logo.svg';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ user }: { user: any }) {
  const pathname = usePathname();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 "
            suppressHydrationWarning={true}
          >
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  {/* <Logo width="32" height="32" className="text-gray-100"/> */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-gray-100"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="100%"
                      height="100%"
                      rx="16"
                      fill="currentColor"
                    />
                    <path
                      fill="#1A80BB"
                      opacity="1.000000"
                      stroke="none"
                      d="
M41.989925,80.976791 
	C38.745625,78.933861 35.501320,76.890930 32.387138,74.244370 
	C34.777302,73.411743 37.037346,73.182739 39.615181,73.075775 
	C40.877064,73.412888 42.345036,74.125999 42.685837,73.767532 
	C47.051685,69.175217 51.211529,71.274872 55.499237,73.819725 
	C56.085224,74.167519 57.111721,73.773132 57.913330,74.100151 
	C56.664127,75.625526 55.621819,77.328751 54.171871,77.814026 
	C50.202965,79.142387 46.062473,79.958092 41.989925,80.976791 
z"
                    />
                  </svg>
                  {/* <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                  /> */}
                </div>
              </div>
              <div className="grid gap-2 hidden sm:ml-6 sm:flex sm:items-center">
                <button className="p-2 bg-green-400 hover:bg-green-500 font-medium rounded-lg ">
                  Sign Up
                </button>
                <button className="p-2 bg-blue-400 hover:bg-blue-500 font-medium rounded-lg ">
                  Log In
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
