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
                {/* add link to the button above */}

              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
